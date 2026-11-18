#!/usr/bin/env python3
"""Interactively add or edit announcements in js/notices.js."""

import argparse
import json
import re
import sys
from html import escape, unescape
from pathlib import Path
from textwrap import indent

from editor import Cancelled, ask, ask_multiline, choose, js_string

NOTICES_FILE = Path(__file__).resolve().parents[1] / "js" / "notices.js"
PAGES = ("home", "programme", "participate", "publicLecture", "remembering")
ARRAY_START = re.compile(
    r"^([ \t]*)const[ \t]+siteNotices\s*=\s*\[[ \t]*", re.MULTILINE
)
NOTICE_ID = re.compile(r"""(?:\bid|"id"|'id')\s*:\s*(["'`])([a-z0-9-]+)\1""")

# Read literal notice data and track value ranges so edits can preserve the source.
LAYOUT = re.compile(r"(?:\s+|//[^\r\n]*|/\*[\s\S]*?\*/)*")
STRING = r""""(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`"""
PROPERTY = re.compile(rf"({STRING}|[A-Za-z_$][\w$]*){LAYOUT.pattern}:", re.DOTALL)
VALUE = re.compile(rf"{STRING}|(?:true|false|null)\b", re.DOTALL)


def literal_text(literal):
    if literal.startswith('"'):
        try:
            return json.loads(literal)
        except json.JSONDecodeError:
            pass
    if literal[:1] in {'"', "'", "`"}:
        return re.sub(r"""\\(["'`$\\])""", r"\1", literal[1:-1])
    return "" if literal == "null" else literal


def next_entry(source, end, closing):
    position = LAYOUT.match(source, end).end()
    token = source[position : position + 1]
    if token == ",":
        return LAYOUT.match(source, position + 1).end()
    if token == closing:
        return position
    raise ValueError(f"Expected a comma or {closing} in siteNotices.")


def read_object(source, start):
    fields = {}
    position = LAYOUT.match(source, start + 1).end()
    while source[position : position + 1] != "}":
        key = PROPERTY.match(source, position)
        if not key:
            raise ValueError("Expected a named property in siteNotices.")
        name = literal_text(key[1])
        value_start = LAYOUT.match(source, key.end()).end()
        if source[value_start : value_start + 1] == "{":
            _, end = read_object(source, value_start)
        else:
            value = VALUE.match(source, value_start)
            if not value:
                raise ValueError(f"Expected a literal value for {name} in siteNotices.")
            end = value.end()
        fields[name] = (value_start, end)
        position = next_entry(source, end, "}")
    return fields, position + 1


def read_notices(source, start):
    notices = []
    position = LAYOUT.match(source, start).end()
    while source[position : position + 1] != "]":
        if source[position : position + 1] != "{":
            raise ValueError("Expected an announcement object in siteNotices.")
        fields, end = read_object(source, position)
        notices.append((position, end, fields))
        position = next_entry(source, end, "]")
    return notices


def field_values(source, fields):
    return {name: source[start:end] for name, (start, end) in fields.items()}


def read_message():
    while True:
        message = ask_multiline("message (HTML supported)")
        if message:
            return message
        print("Enter an announcement message.")


def choose_pages(default):
    current = ", ".join(page for page in PAGES if page in default) or "none"
    print(f"Available pages: {', '.join(PAGES)}")
    while True:
        answer = ask(f"Pages, separated by commas [{current}]: ").strip()
        if not answer:
            return default
        if answer.lower() in {"q", "quit"}:
            raise Cancelled
        if answer.lower() == "none":
            return set()
        pages = {page.strip() for page in answer.split(",")}
        if pages.issubset(PAGES):
            return pages
        print("Choose page names from the list, or enter none for no pages.")


def yes_no(prompt, default):
    answers = {"": default, "y": True, "yes": True, "n": False, "no": False}
    while True:
        answer = ask(prompt).strip().lower()
        if answer in answers:
            return answers[answer]
        print("Enter y or n.")


def ask_active(default):
    hint = "Y/n" if default else "y/N"
    return yes_no(f"Mark active? [{hint}]: ", default)


def next_id(source, title):
    base = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-") or "announcement"
    used_ids = {match[2] for match in NOTICE_ID.finditer(source)}
    notice_id = base
    suffix = 2
    while notice_id in used_ids:
        notice_id = f"{base}-{suffix}"
        suffix += 1
    return notice_id


def render_object(fields):
    properties = ",\n".join(f"{name}: {value}" for name, value in fields.items())
    return "{\n" + indent(properties, "    ") + "\n}"


def render_pages(pages):
    return render_object({page: json.dumps(page in pages) for page in PAGES})


def new_entry(source):
    title = ask("Title (optional): ").strip()
    tag = ask("Tag (optional): ").strip()
    message = read_message()
    pages = choose_pages({"home"})
    active = ask_active(True)
    notice_id = next_id(source, title)
    fields = {"id": js_string(notice_id)}
    for name, text in (("title", title), ("tag", tag)):
        if text:
            fields[name] = js_string(escape(text, quote=False))
    fields.update(
        html=js_string(message), active=json.dumps(active), pages=render_pages(pages)
    )
    return render_object(fields), notice_id


def notice_label(values):
    title = unescape(literal_text(values.get("title", ""))) or "(Untitled)"
    notice_id = literal_text(values.get("id", ""))
    status = "active" if values.get("active") == "true" else "inactive"
    return f"{title} ({notice_id}, {status})"


def edit_fields(values):
    changes = {}
    for name in ("title", "tag"):
        current = unescape(literal_text(values.get(name, "")))
        label = current or "(empty)"
        answer = ask(f"{name.title()} [{label}] (Enter keeps, .clear removes): ").strip()
        if answer:
            text = "" if answer == ".clear" else answer
            if text != current:
                changes[name] = js_string(escape(text, quote=False))

    message = literal_text(values.get("html", ""))
    print(f"\nCurrent message\n{message}")
    if choose("Message", ["Keep current", "Replace"], default=0) == 1:
        replacement = read_message()
        if replacement != message:
            changes["html"] = js_string(replacement)

    pages_literal = values.get("pages", "{}")
    page_flags = {}
    if pages_literal.startswith("{"):
        fields, _ = read_object(pages_literal, 0)
        page_flags = field_values(pages_literal, fields)
    current_pages = {page for page in PAGES if page_flags.get(page) == "true"}
    pages = choose_pages(current_pages)
    if pages != current_pages:
        changes["pages"] = render_pages(pages)

    was_active = values.get("active") == "true"
    active = ask_active(was_active)
    if active != was_active:
        changes["active"] = json.dumps(active)
    return changes


def insert_entry(source, position, entry, remaining_indent, newline):
    remaining = source[position:]
    if not remaining.startswith(("\n", "\r\n")):
        remaining = newline + remaining_indent + remaining
    return source[:position] + newline + entry + "," + remaining


def edit_entry(source, notice, changes, property_indent, newline):
    start, end, fields = notice
    entry = source[start:end]
    replacements = []
    additions = []
    for name, value in changes.items():
        value = value.replace("\n", newline + property_indent)
        if name in fields:
            low, high = fields[name]
            replacements.append((low - start, high - start, value))
        else:
            additions.append(f"{property_indent}{name}: {value}")
    for low, high, value in sorted(replacements, reverse=True):
        entry = entry[:low] + value + entry[high:]
    if additions:
        entry = insert_entry(
            entry, 1, ("," + newline).join(additions), property_indent, newline
        )
    return entry


def save_update(original, updated):
    temporary = NOTICES_FILE.with_suffix(".js.tmp")
    # Exclusive creation gives simultaneous runs a single writer.
    output = temporary.open("xb")
    try:
        with output:
            output.write(updated)
        if NOTICES_FILE.read_bytes() != original:
            raise RuntimeError(
                "js/notices.js changed during review. Run the editor again."
            )
        temporary.replace(NOTICES_FILE)
    except BaseException:
        temporary.unlink(missing_ok=True)
        raise


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--add", action="store_true", help="skip the menu to add an announcement"
    )
    parser.add_argument("--dry-run", action="store_true", help="preview the change")
    args = parser.parse_args()

    original = NOTICES_FILE.read_bytes()
    source = original.decode("utf-8")
    match = ARRAY_START.search(source)
    if not match:
        raise ValueError("Could not find the siteNotices array in js/notices.js.")

    newline = "\r\n" if "\r\n" in source else "\n"
    entry_indent = match[1] + "    "
    add = (
        args.add
        or choose(
            "What would you like to do?", ["Add an announcement", "Edit an announcement"]
        )
        == 0
    )
    if add:
        entry, notice_id = new_entry(source)
        indented_entry = indent(entry, entry_indent).replace("\n", newline)
        updated = insert_entry(source, match.end(), indented_entry, match[1], newline)
        result = f"Added {notice_id} to js/notices.js."
    else:
        notices = read_notices(source, match.end())
        if not notices:
            print("Add an announcement first.")
            return
        values = [field_values(source, fields) for _, _, fields in notices]
        selected = choose("Choose an announcement", [notice_label(item) for item in values])
        changes = edit_fields(values[selected])
        if not changes:
            print("No edits selected.")
            return
        start, end, _ = notices[selected]
        entry = edit_entry(source, notices[selected], changes, entry_indent + "    ", newline)
        updated = source[:start] + entry + source[end:]
        result = "Updated the announcement in js/notices.js."

    print(f"\nReview\n{entry}\n")
    if args.dry_run:
        return
    if not yes_no("Save this announcement? [y/N]: ", default=False):
        raise Cancelled
    save_update(original, updated.encode("utf-8"))
    print(result)


if __name__ == "__main__":
    try:
        main()
    except (Cancelled, KeyboardInterrupt):
        print("\nCancelled.")
    except (OSError, RuntimeError, ValueError) as error:
        print(f"Error: {error}", file=sys.stderr)
        raise SystemExit(1) from error
