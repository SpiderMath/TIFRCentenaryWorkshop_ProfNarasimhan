# Centenary Workshop in Honour of Prof. R. Narasimhan (1926 - 2007)
### Tata Institute of Fundamental Research (TIFR), Mumbai | 10-11 December 2026

This repository hosts the official website for the R. Narasimhan Centenary Workshop organized by the School of Technology and Computer Science (STCS) at TIFR Mumbai. 

The site is built as a lightweight, static web platform without frameworks or external runtime dependencies. It provides mobile responsiveness, dark and light themes, collapsible talk abstracts, a normalized speaker lookup system, and a toggleable sitewide announcement engine.

---

## File Inventory and Architecture

### HTML Pages

*   **`index.html`**
    *   **Role**: The landing page and first point of contact for visitors.
    *   **Purpose**: Introduces the centenary workshop, displays dates and venue metadata, highlights Prof. Narasimhan with a formal portrait and quote from his 1999 monograph *Men, machines, and ideas*, and gives visitors quick links to the programme and registration.

*   **`programme.html`**
    *   **Role**: Conference timetable and speaker catalog.
    *   **Purpose**: Renders the complete two-day workshop schedule. It handles umbrella thematic blocks, nested sub-talks with collapsible abstract drawers, and generates the confirmed speaker directory with links directly to individual academic homepages.

*   **`public-lecture.html`**
    *   **Role**: Dedicated spotlight for the Centenary Keynote Lecture.
    *   **Purpose**: Serves as the standalone feature page for Prof. Rajeev Alur's public lecture on trustworthy AI in clinical decision-making. Contains the complete abstract, biographical summary, speaker photograph, and venue timings.

*   **`participate.html`**
    *   **Role**: Registration, poster submissions, venue logistics, and travel guidance.
    *   **Purpose**: Guides attendees through two distinct tracks: general attendance and student poster presentations (including TIFR accommodation policies). It embeds the interactive TIFR campus map, entry directions, and an itemized list of regional and institutional accommodation options in South Mumbai.

*   **`remembering.html`**
    *   **Role**: Archival history and tribute to Prof. Narasimhan's life and work.
    *   **Purpose**: Commemorates his role in pioneering Indian computer science. Houses biographical chapters, his portrait, an automated sliding archival carousel of TIFR and TIFRAC history, a clean milestone timeline, and interspersed quotes from colleagues.

### JavaScript Engines (`js/`)

*   **`js/data.js`**
    *   **Role**: Central data store for workshop schedule and speakers.
    *   **Purpose**: Separates changing academic data from presentation markup. Adding talks, updating abstracts, or changing speaker affiliations only requires updating this file rather than editing raw HTML tables.

*   **`js/programme.js`**
    *   **Role**: Schedule rendering engine and interactive directory.
    *   **Purpose**: Reads `js/data.js` on page load, builds the timetable, resolves speaker anchors to directory names and cards, formats single or multi-speaker bylines, and handles smooth scrolling to speaker profiles when clicked.

*   **`js/notices.js`**
    *   **Role**: Sitewide announcement banner system.
    *   **Purpose**: Lets organizers post high-visibility notices (such as registration deadline extensions) across specific pages using simple toggle switches, without manually editing HTML alert boxes on every page.

*   **`js/carousel.js`**
    *   **Role**: Image gallery animation engine for `remembering.html`.
    *   **Purpose**: Powers the archival photograph carousel with smooth horizontal sliding transitions, pause-on-hover logic, accessible keyboard controls, and synchronized caption text updates.

*   **`js/theme.js`**
    *   **Role**: Dark and light mode state manager.
    *   **Purpose**: Toggles the `data-theme` attribute on the root HTML tag, remembers user preferences across page navigation via browser `localStorage`, dynamically updates the TIFR vector logo, and inverts the browser tab favicon.

---

## Data Schemas (`js/data.js`)

All schedule items and speaker biographies live in `js/data.js`.

### 1. Schedule and Talks Schema

The `workshopData.schedule` array groups sessions by day. Each session entry follows one of two formats:

#### Format A: Standalone Session (Breaks, Public Lecture, Welcome Address)
```javascript
{
    time: "17:30 - 19:00",
    title: "Public lecture: Trustworthy AI for Clinical Decision Making",
    speakers: ["rajeev-alur"],
    isBreak: false
}

```

* `time`: String showing the overarching time block.
* `title`: Name of the session.
* `speakers`: (Optional) Array of speaker anchor slugs matching entries in `workshopData.speakers`. Can also take a plain string for unlisted guests (e.g. `["Prof. S. Ramakrishnan"]`).
* `isBreak`: Boolean (`true` or `false`). When `true`, styles the row with subtle muted italic text.

#### Format B: Umbrella Thematic Session (Grouped Sub-Talks)

Individual talks inside an umbrella block do not have individual timestamps; they inherit the overarching block window.

```javascript
{
    time: "09:15 - 12:00",
    title: "Algorithms & Formal Methods",
    isBreak: false,
    talks: [
        {
            title: "Approximation Algorithms in Network Design",
            speakers: ["chandra-chekuri"],
            abstract: "Detailed abstract text goes here."
        },
        {
            title: "Joint Perspectives on Verification and Games",
            speakers: ["ashutosh-trivedi", "rohit-gurjar"],
            abstract: "Detailed abstract text goes here."
        }
    ]
}

```

* `title`: Title of the specific talk.
* `speakers`: Array containing one or more anchor slugs. The rendering script automatically resolves these slugs into the speaker's full name, sets up links to their directory card, and labels the line as "Speaker:" or "Speakers:" accordingly.
* `abstract`: Text of the talk abstract. If left as `""` or omitted, the collapsible abstract drawer is omitted automatically.

### 2. Speaker Directory Schema

```javascript
{
    anchor: "chandra-chekuri",
    name: "Chandra Chekuri",
    affiliation: "University of Illinois Urbana-Champaign",
    image: "assets/chandra-chekuri.jpg",
    website: "[https://chekuri.cs.illinois.edu/](https://chekuri.cs.illinois.edu/)"
}

```

* `anchor`: Unique string slug used for internal linking and schedule lookups.
* `name`: Full name displayed on the card and across all linked talks.
* `affiliation`: University or research institute.
* `image`: File path in `assets/`.
* `website`: URL to the speaker's academic website. If empty (`""`), the link pill is omitted automatically.

### 3. Notice Engine Schema (`js/notices.js`)

```javascript
{
    id: "poster-extension",
    tag: "Notice",
    html: 'Poster submission deadline has been extended to 15 November 2026. <a href="participate.html">Submit here</a>.',
    active: true,
    pages: {
        home: true,
        programme: true,
        participate: true,
        publicLecture: false,
        remembering: false
    }
}

```

* `id`: Internal identifier string.
* `tag`: Small colored badge text (e.g., "Notice", "Update", "Alert").
* `html`: Message string. Supports standard HTML tags like `<a>`, `<strong>`, and `<em>`.
* `active`: Set to `true` to display, `false` to turn off globally.
* `pages`: Set booleans to decide exactly which pages show the notice. Up to 3 active notices are shown per page.

---

## Step-by-Step Maintenance Guides

### 1. How to Send Out or Update a Notice

Open `js/notices.js`:

1. To **turn on an existing notice**, find its entry in `siteNotices` and set `active: true`.
2. To **turn off a notice**, set `active: false`.
3. To **choose where it appears**, toggle the page names under `pages` (`home`, `programme`, `participate`, `publicLecture`, `remembering`) between `true` and `false`.
4. To **create a brand-new notice**, insert a new object at the top of the `siteNotices` array:
```javascript
{
    id: "registration-closed",
    tag: "Important",
    html: 'In-person registration is now full. Livestream links will be posted on 9 December.',
    active: true,
    pages: {
        home: true,
        programme: true,
        participate: true,
        publicLecture: true,
        remembering: false
    }
},

```



---

### 2. How to Add or Update a Talk

All talk updates are made inside `js/data.js`.

#### Updating an existing talk

Find the session containing the talk inside `workshopData.schedule`, and update the `title`, `speakers`, or `abstract` fields.

#### Adding a new talk to an umbrella session

Inside the session's `talks` array, add a new talk object using the speaker's directory anchor slug:

```javascript
{
    title: "Algebraic Methods in Derandomization",
    speakers: ["rohit-gurjar"],
    abstract: "We discuss recent progress in derandomization techniques."
}

```

#### Adding a multi-speaker talk

Add all relevant anchor slugs to the `speakers` array:

```javascript
{
    title: "Joint Perspectives on Verification and Games",
    speakers: ["ashutosh-trivedi", "chandra-chekuri"],
    abstract: "A joint discussion covering synthesis and algorithmic bounds."
}

```

---

### 3. How to Add, Update, or Delete a Session

All schedule structures live in `js/data.js` under `workshopData.schedule`.

#### Adding a new standalone session

Insert an object into the appropriate day's `sessions` list:

```javascript
{
    time: "16:00 - 16:30",
    title: "Tea and Informal Discussions",
    isBreak: true
}

```

#### Turning a single session into an umbrella session

Add the `talks: [...]` array to the session object. The timetable engine will automatically render the thematic block with its nested sub-talks.

#### Deleting a session

Locate the session object inside `sessions: [...]` in `js/data.js` and delete the entire block, including its enclosing braces `{ ... }` and trailing comma.

---

### 4. How to Add a New Element to the Remembering Timeline

Open `remembering.html` and find the `<div class="visual-timeline">` container.

To add a new milestone, insert a `<div class="timeline-node">` block in chronological order:

```html
<div class="timeline-node">
    <div class="timeline-year">1975</div>
    <div class="timeline-text">Established the National Centre for Software Development and Computing Techniques (NCSDCT) at TIFR</div>
</div>

```

The vertical rail line and node markers will adjust their height and spacing automatically.

---

### 5. How to Add, Update, or Delete Accommodation Details

Accommodation guidance lives directly in `participate.html` under `<section id="accommodation-guide">`.

#### Updating regional commuting recommendations

Edit the bullet items inside `<ul class="accommodation-regions-list">` to adjust recommended neighborhoods or taxi commute estimates.

#### Adding an institutional or budget option

Find the `hotel-table` table body and insert a new row:

```html
<tr>
    <td><strong><a href="[https://example.com](https://example.com)" target="_blank" rel="noopener noreferrer">Hotel Name</a></strong></td>
    <td>Neighborhood Area</td>
    <td>~3.0 km</td>
</tr>

```

#### Deleting an accommodation entry

Delete the entire `<tr>...</tr>` row for that venue from the table.
