set positional-arguments

[private]
default:
    @just --list

# Add or edit a website announcement.
manage-announcements *args:
    @python3 scripts/manage_announcements.py "$@"

# Add an announcement directly.
add-announcement *args:
    @python3 scripts/manage_announcements.py --add "$@"

# Add or edit a programme talk.
manage-talks *args:
    @python3 scripts/manage_talks.py "$@"
