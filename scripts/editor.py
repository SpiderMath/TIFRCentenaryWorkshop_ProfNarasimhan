"""Shared prompts and JavaScript string formatting for the site editors."""

import json


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


def ask_multiline(field):
    print(f"Enter the {field}. Type .done on its own line when finished.")
    lines = []
    while True:
        line = ask("> ")
        if line.strip() == ".done":
            return "\n".join(lines).strip()
        lines.append(line)


def js_string(value):
    return json.dumps(value, ensure_ascii=False)
