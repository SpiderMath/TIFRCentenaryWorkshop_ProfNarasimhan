#!/usr/bin/env python3
"""Simple interactive editor for talks in js/data.js."""

import json
import os
from pathlib import Path
import re
import sys


DATA_FILE = Path(__file__).resolve().parents[1] / "js" / "data.js"

# These are the only schedule slots the script edits.
SLOTS = [
    ("Algorithms & Formal Methods", "09:15 - 10:00"),
    ("Algorithms & Formal Methods", "10:30 - 12:00"),
    ("Complexity & Cryptography", "09:30 - 11:00"),
    ("Complexity & Cryptography", "11:30 - 13:00"),
    ("AI, ML & Quantum", "14:00 - 15:30"),
    ("AI, ML & Quantum", "16:00 - 17:30"),
]

JS_STRING = r'"(?:\\.|[^"\\])*"'


class Cancelled(Exception):
    pass


def ask(prompt):
    try:
        return input(prompt)
    except (EOFError, KeyboardInterrupt) as error:
        raise Cancelled from error


def choose(question, options, default=None):
    print(f"\n{question}")
    for number, option in enumerate(options, 1):
        print(f"  {number}. {option}")

    while True:
        hint = f" [{default + 1}]" if default is not None else ""
        answer = ask(f"Select{hint}: ").strip()
        if answer.lower() in {"q", "quit"}:
            raise Cancelled
        if not answer and default is not None:
            return default
        if answer.isdigit() and 1 <= int(answer) <= len(options):
            return int(answer) - 1
        print(f"Enter a number from 1 to {len(options)}, or q to cancel.")


def ask_title(current=None):
    while True:
        hint = " (Enter keeps current)" if current is not None else ""
        title = ask(f"Talk title{hint}: ").strip()
        if title:
            return title
        if current is not None:
            return current
        print("The title cannot be empty.")


def ask_abstract():
    print("Enter the abstract. Type .done on its own line when finished.")
    lines = []
    while True:
        line = ask("> ")
        if line.strip() == ".done":
            return "\n".join(lines).strip()
        lines.append(line)


def edit_abstract(current):
    print(f"\nCurrent abstract:\n{current or '(empty)'}")
    action = choose("Abstract", ["Keep current", "Replace", "Clear"], default=0)
    if action == 0:
        return current
    if action == 2:
        return ""
    return ask_abstract()


def choose_speakers(directory, current=None):
    sorted_directory = sorted(directory, key=lambda speaker: speaker["name"].casefold())
    options = [
        f"{speaker['name']} ({speaker['anchor']})" for speaker in sorted_directory
    ]
    options += ["TBD", "Custom speaker"]

    print("\nSelect speaker(s). Use commas for multiple speakers.")
    for number, option in enumerate(options, 1):
        print(f"  {number}. {option}")

    if current is not None:
        names = [speaker_name(value, directory) for value in current]
        print(f"Current: {', '.join(names) or '(none)'}")

    while True:
        hint = " (Enter keeps current)" if current is not None else ""
        answer = ask(f"Selection{hint}: ").strip()
        if answer.lower() in {"q", "quit"}:
            raise Cancelled
        if not answer and current is not None:
            return current

        try:
            selected_numbers = [int(value.strip()) for value in answer.split(",")]
        except ValueError:
            selected_numbers = []

        if not selected_numbers or any(
            number < 1 or number > len(options) for number in selected_numbers
        ):
            print(f"Enter numbers from 1 to {len(options)}.")
            continue

        speakers = []
        for number in selected_numbers:
            index = number - 1
            if index < len(sorted_directory):
                speakers.append(sorted_directory[index]["anchor"])
            elif index == len(sorted_directory):
                speakers.append("TBD")
            else:
                custom = ask("Custom speaker name: ").strip()
                if custom:
                    speakers.append(custom)
        if speakers:
            return list(dict.fromkeys(speakers))


def speaker_name(value, directory):
    for speaker in directory:
        if speaker["anchor"] == value:
            return speaker["name"]
    return value


def js_string(value):
    return json.dumps(value, ensure_ascii=False)


def find_closing(text, start, opening, closing):
    """Find a matching bracket while ignoring brackets inside strings."""
    depth = 0
    quote = None
    escaped = False
    for index in range(start, len(text)):
        character = text[index]
        if quote:
            if escaped:
                escaped = False
            elif character == "\\":
                escaped = True
            elif character == quote:
                quote = None
            continue
        if character in {'"', "'"}:
            quote = character
        elif character == opening:
            depth += 1
        elif character == closing:
            depth -= 1
            if depth == 0:
                return index
    raise ValueError(f"Could not find closing {closing}")


def objects_in_array(text, array_start, array_end):
    """Return the source ranges of object entries in an array."""
    objects = []
    position = array_start + 1
    while position < array_end:
        while position < array_end and text[position] in " \t\r\n,":
            position += 1
        if position >= array_end:
            break
        if text[position] != "{":
            raise ValueError("Unexpected value in a talks array")
        object_end = find_closing(text, position, "{", "}") + 1
        objects.append((position, object_end))
        position = object_end
    return objects


def read_string_property(block, name, default=None):
    match = re.search(rf"\b{re.escape(name)}\s*:\s*({JS_STRING})", block)
    if not match:
        if default is not None:
            return default
        raise ValueError(f"Talk is missing {name}")
    return json.loads(match.group(1))


def parse_talk(block):
    speaker_key = re.search(r"\bspeakers\s*:\s*\[", block)
    if not speaker_key:
        raise ValueError("Talk is missing speakers")
    speakers_start = block.find("[", speaker_key.start())
    speakers_end = find_closing(block, speakers_start, "[", "]")
    speakers = [
        json.loads(match.group(0))
        for match in re.finditer(JS_STRING, block[speakers_start + 1 : speakers_end])
    ]
    return {
        "title": read_string_property(block, "title"),
        "speakers": speakers,
        "abstract": read_string_property(block, "abstract", default=""),
    }


def load_session(text, title, time):
    marker = re.compile(
        rf"\btime\s*:\s*{re.escape(js_string(time))}\s*,\s*"
        rf"title\s*:\s*{re.escape(js_string(title))}\s*,",
        re.DOTALL,
    )
    matches = list(marker.finditer(text))
    if len(matches) != 1:
        raise ValueError(f"Could not uniquely find {title} at {time}")

    match = matches[0]
    session_start = text.rfind("{", 0, match.start())
    session_end = find_closing(text, session_start, "{", "}")
    talks_key = text.find("talks:", match.end(), session_end)
    if talks_key == -1:
        raise ValueError(f"Session has no talks array: {title} at {time}")

    array_start = text.find("[", talks_key, session_end)
    array_end = find_closing(text, array_start, "[", "]")
    line_start = text.rfind("\n", 0, talks_key) + 1
    indentation = text[line_start:talks_key]
    ranges = objects_in_array(text, array_start, array_end)

    return {
        "key": (title, time),
        "title": title,
        "time": time,
        "array_start": array_start,
        "array_end": array_end + 1,
        "indentation": indentation,
        "talks": [parse_talk(text[start:end]) for start, end in ranges],
    }


def load_sessions(text):
    return [load_session(text, title, time) for title, time in SLOTS]


def load_speakers(text):
    pattern = re.compile(
        rf"\banchor\s*:\s*({JS_STRING})\s*,\s*name\s*:\s*({JS_STRING})",
        re.DOTALL,
    )
    speakers = [
        {"anchor": json.loads(match.group(1)), "name": json.loads(match.group(2))}
        for match in pattern.finditer(text)
    ]
    if not speakers:
        raise ValueError("Could not read the speaker directory")
    return speakers


def slot_label(session):
    return f"{session['title']} | {session['time']}"


def talk_label(talk, directory):
    names = [speaker_name(value, directory) for value in talk["speakers"]]
    return f"{talk['title']} | {', '.join(names)}"


def choose_talk_by_slot(sessions, directory):
    session = sessions[
        choose("Choose the current schedule slot", [slot_label(slot) for slot in sessions])
    ]
    talk_index = choose(
        "Choose the talk", [talk_label(talk, directory) for talk in session["talks"]]
    )
    return session, talk_index


def choose_talk_by_speaker(sessions, directory):
    speaker_ids = []
    for session in sessions:
        for talk in session["talks"]:
            for speaker in talk["speakers"]:
                if speaker not in speaker_ids:
                    speaker_ids.append(speaker)

    speaker_ids.sort(key=lambda speaker: speaker_name(speaker, directory).casefold())

    selected = speaker_ids[
        choose(
            "Choose the speaker",
            [speaker_name(speaker, directory) for speaker in speaker_ids],
        )
    ]
    matches = [
        (session, index)
        for session in sessions
        for index, talk in enumerate(session["talks"])
        if selected in talk["speakers"]
    ]
    if len(matches) == 1:
        return matches[0]

    match_index = choose(
        "Choose the talk",
        [
            f"{talk_label(session['talks'][index], directory)} | {slot_label(session)}"
            for session, index in matches
        ],
    )
    return matches[match_index]


def choose_talk_to_edit(sessions, directory):
    method = choose("Find the talk by", ["Schedule slot", "Speaker"])
    if method == 0:
        return choose_talk_by_slot(sessions, directory)
    return choose_talk_by_speaker(sessions, directory)


def render_talks(talks, indentation):
    if not talks:
        return "[]"

    object_indent = indentation + "  "
    property_indent = object_indent + "  "
    objects = []
    for talk in talks:
        objects.append(
            f"{object_indent}{{\n"
            f"{property_indent}title: {js_string(talk['title'])},\n"
            f"{property_indent}speakers: "
            f"[{', '.join(js_string(value) for value in talk['speakers'])}],\n"
            f"{property_indent}abstract: {js_string(talk['abstract'])},\n"
            f"{object_indent}}},"
        )
    return "[\n" + "\n".join(objects) + f"\n{indentation}]"


def replace_talk_arrays(text, changed_sessions):
    replacements = [
        (
            session["array_start"],
            session["array_end"],
            render_talks(session["talks"], session["indentation"]),
        )
        for session in changed_sessions
    ]
    for start, end, value in sorted(replacements, reverse=True):
        text = text[:start] + value + text[end:]
    return text


def confirm():
    return ask("Apply this change? [y/N]: ").strip().lower() in {"y", "yes"}


def main():
    if "--help" in sys.argv or "-h" in sys.argv:
        print("Usage: python3 scripts/manage_talks.py [--dry-run]")
        print("Interactively add or edit a talk in js/data.js.")
        return

    dry_run = "--dry-run" in sys.argv
    source = DATA_FILE.read_text(encoding="utf-8")
    sessions = load_sessions(source)
    directory = load_speakers(source)

    action = choose("What would you like to do?", ["Add a talk", "Edit a talk"])

    if action == 0:
        destination = sessions[
            choose("Choose the schedule slot", [slot_label(slot) for slot in sessions])
        ]
        title = ask_title()
        speakers = choose_speakers(directory)
        abstract = ask_abstract()
        new_talk = {"title": title, "speakers": speakers, "abstract": abstract}
        changed = [destination]
    else:
        source_session, talk_index = choose_talk_to_edit(sessions, directory)
        old_talk = source_session["talks"][talk_index]
        title = ask_title(old_talk["title"])
        speakers = choose_speakers(directory, old_talk["speakers"])
        abstract = edit_abstract(old_talk["abstract"])
        current_slot = sessions.index(source_session)
        destination = sessions[
            choose(
                "Choose the schedule slot",
                [slot_label(slot) for slot in sessions],
                default=current_slot,
            )
        ]
        new_talk = {"title": title, "speakers": speakers, "abstract": abstract}
        changed = [source_session, destination]

    print("\nReview")
    print(f"  Schedule: {slot_label(destination)}")
    print(f"  Title: {title}")
    print(
        "  Speaker(s): "
        + ", ".join(speaker_name(value, directory) for value in speakers)
    )
    print(f"  Abstract: {abstract or '(empty)'}")
    if not confirm():
        raise Cancelled

    if action == 0:
        destination["talks"].append(new_talk)
    elif source_session is destination:
        source_session["talks"][talk_index] = new_talk
    else:
        source_session["talks"].pop(talk_index)
        destination["talks"].append(new_talk)

    changed = list({session["key"]: session for session in changed}.values())
    updated = replace_talk_arrays(source, changed)

    # Parse the result before writing it.
    load_sessions(updated)
    if dry_run:
        print("\nDry run passed. No file was changed.")
        return

    if DATA_FILE.read_text(encoding="utf-8") != source:
        raise RuntimeError("data.js changed while this script was running")
    temporary_file = DATA_FILE.with_suffix(".js.tmp")
    temporary_file.write_text(updated, encoding="utf-8")
    os.replace(temporary_file, DATA_FILE)
    print(f"\nUpdated {DATA_FILE}")


if __name__ == "__main__":
    try:
        main()
    except Cancelled:
        print("\nNo changes made.")
    except (OSError, RuntimeError, ValueError) as error:
        print(f"\nError: {error}", file=sys.stderr)
        raise SystemExit(1)
