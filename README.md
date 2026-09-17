# Centenary Workshop in Honour of Prof. R. Narasimhan (1926 - 2007)
### Tata Institute of Fundamental Research (TIFR), Mumbai | 10-11 December 2026

This repository hosts the official website for the R. Narasimhan Centenary Workshop organized by the School of Technology and Computer Science (STCS) at TIFR Mumbai. 

The site is built as a lightweight, static web platform without frameworks or external runtime dependencies. It provides full mobile responsiveness, accessible typography, dark and light modes, collapsible talk abstracts, and a dynamic sitewide notification engine.

---

## File Inventory and Architecture

### HTML Pages

*   **`index.html`**
    *   **Role**: The landing page and first point of contact for visitors.
    *   **Why it exists**: Introduces the centenary workshop, displays dates and venue metadata, highlights Prof. Narasimhan with a formal portrait and quote from his 1999 monograph *Men, machines, and ideas*, and gives visitors quick links to the programme and registration.

*   **`programme.html`**
    *   **Role**: Conference timetable and speaker catalog.
    *   **Why it exists**: Renders the complete two-day workshop schedule. It handles umbrella thematic blocks, nested sub-talks with collapsible abstract drawers, and generates the confirmed speaker directory with links directly to individual academic homepages.

*   **`public-lecture.html`**
    *   **Role**: Dedicated spotlight for the Centenary Keynote Lecture.
    *   **Why it exists**: Serves as the standalone feature page for Prof. Rajeev Alur's public lecture on trustworthy AI in clinical decision-making. Contains the complete abstract, biographical summary, speaker photograph, and venue timings.

*   **`participate.html`**
    *   **Role**: Registration, poster submissions, venue logistics, and travel guidance.
    *   **Why it exists**: Guides attendees through two distinct tracks: general attendance and student poster presentations (including TIFR local hospitality and travel grant policies). It embeds the interactive TIFR campus map, bus and train routes, and an itemized list of nearby hotels in South Mumbai.

*   **`remembering.html`**
    *   **Role**: Archival history and tribute to Prof. Narasimhan's life and work.
    *   **Why it exists**: Commemorates his role in pioneering Indian computer science. Houses biographical chapters, his portrait, an automated sliding archival carousel of TIFR and TIFRAC history, a clean milestone timeline, and interspersed quotes from colleagues.

### JavaScript Engines (`js/`)

*   **`js/data.js`**
    *   **Role**: Central data store for workshop schedule and speakers.
    *   **Why it exists**: Separates changing academic data from presentation markup. Adding talks, updating abstracts, or changing speaker affiliations only requires updating this file rather than editing raw HTML tables.

*   **`js/programme.js`**
    *   **Role**: Schedule rendering engine and interactive directory.
    *   **Why it exists**: Reads `js/data.js` on page load, builds the day-by-day timetable tables, checks whether a session is a standard row or an umbrella container with child talks, formats single or multi-speaker bylines, and handles smooth scrolling to speaker profiles when clicked.

*   **`js/notices.js`**
    *   **Role**: Sitewide announcement banner system.
    *   **Why it exists**: Lets organizers post high-visibility notices (such as registration deadline extensions) across specific pages using simple toggle switches, without manually editing HTML alert boxes on every page.

*   **`js/carousel.js`**
    *   **Role**: Image gallery animation engine for `remembering.html`.
    *   **Why it exists**: Powers the archival photograph carousel with smooth horizontal sliding transitions, pause-on-hover logic, accessible keyboard controls, and synchronized caption text updates.

*   **`js/theme.js`**
    *   **Role**: Dark and light mode state manager.
    *   **Why it exists**: Toggles the `data-theme` attribute on the root HTML tag, remembers the user preference via browser `localStorage`, dynamically updates the TIFR vector logo, and inverts the browser tab favicon.

---

## Data Schemas

### 1. Schedule & Talks Schema (`js/data.js`)

The `workshopData.schedule` array groups items by day. Each session entry follows one of two formats:

#### Format A: Standalone Session (Breaks, Single Talks, Ceremonies)
```javascript
{
    time: "17:30 - 19:00",
    title: "Public lecture: Trustworthy AI for Clinical Decision Making",
    speaker: "Prof. Rajeev Alur",
    anchor: "rajeev-alur",
    isBreak: false
}

```

* `time`: String showing the duration.
* `title`: The name of the session.
* `speaker`: (Optional) Speaker name.
* `anchor`: (Optional) ID matching an entry in `workshopData.speakers`. Clicking it jumps down to their card.
* `isBreak`: Boolean (`true` or `false`). When `true`, styles the row with subtle muted italic text.

#### Format B: Umbrella Thematic Session (Grouped Sub-Talks)

```javascript
{
    time: "09:15 - 12:00",
    title: "Algorithms & Formal Methods",
    speaker: "",
    anchor: "",
    isBreak: false,
    talks: [
        {
            time: "09:15 - 10:00", // Leave as "" if talk times are unannounced
            title: "Approximation Algorithms in Network Design",
            speaker: "Chandra Chekuri", // Single speaker
            anchor: "chandra-chekuri",
            abstract: "Detailed abstract text goes here."
        },
        {
            time: "",
            title: "Joint Perspectives on Verification",
            speakers: [ // Multi-speaker support
                { name: "Ashutosh Trivedi", anchor: "ashutosh-trivedi" },
                { name: "Rohit Gurjar", anchor: "rohit-gurjar" }
            ],
            abstract: "Detailed abstract text goes here."
        }
    ]
}

```

### 2. Speaker Directory Schema (`js/data.js`)

```javascript
{
    anchor: "chandra-chekuri",
    name: "Chandra Chekuri",
    affiliation: "University of Illinois Urbana-Champaign",
    image: "assets/chandra-chekuri.jpg",
    website: "[https://chekuri.cs.illinois.edu/](https://chekuri.cs.illinois.edu/)"
}

```

* `anchor`: Unique string slug used for page scrolling and linking.
* `name`: Full name.
* `affiliation`: University or research institute.
* `image`: Path to image file in `assets/`.
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

1. To **turn on an existing notice**, find its entry in the `siteNotices` array and set `active: true`.
2. To **turn off a notice**, set `active: false`.
3. To **choose where it appears**, toggle the page names under `pages` (`home`, `programme`, `participate`, `publicLecture`, `remembering`) between `true` and `false`.
4. To **create a brand-new notice**, add a new object to the top of the `siteNotices` array:
```javascript
{
    id: "registration-closed",
    tag: "Important",
    html: 'In-person registration is now closed. Livestream links will be posted here on 9 December.',
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

Find the session containing the talk inside `workshopData.schedule`, and update the `title`, `abstract`, or `time` fields.

#### Adding a new talk to an umbrella session

Inside the session's `talks` array, add a new talk object:

```javascript
{
    time: "11:15 - 12:00", // Or set to "" if timing is not fixed
    title: "Derandomization via Small-Bias Sets",
    speaker: "Rohit Gurjar",
    anchor: "rohit-gurjar",
    abstract: "We discuss recent developments in pseudorandom generators."
}

```

#### Adding a multi-speaker talk

Replace the single `speaker` and `anchor` keys with the `speakers` array:

```javascript
{
    time: "",
    title: "Panel on the Future of Algorithmic Foundations",
    speakers: [
        { name: "Chandra Chekuri", anchor: "chandra-chekuri" },
        { name: "Diptarka Chakraborty", anchor: "diptarka-chakraborty" }
    ],
    abstract: "An interactive discussion on major open questions in algorithm design."
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
    speaker: "",
    anchor: "",
    isBreak: true
}

```

#### Turning a single session into an umbrella session

Add the `talks: [...]` array to the session object. The timetable engine will automatically render a full-width category banner and create indented rows for each sub-talk.

#### Deleting a session

Locate the session object inside `sessions: [...]` in `js/data.js` and delete the entire block, including its enclosing braces `{ ... }` and comma.

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

### 5. How to Add, Update, or Delete a Hotel

Open `participate.html` and find the `<div class="hotel-grid">` section.

#### Adding a new hotel

Paste a new `<article class="hotel-card">` inside the grid:

```html
<article class="hotel-card">
    <h3 class="hotel-name">The Taj Mahal Tower, Mumbai</h3>
    <div class="hotel-distance">Approx. 4.2 km from TIFR (Apollo Bunder, Colaba)</div>
    <div class="hotel-details">
        Luxury 5-star heritage hotel near the Gateway of India. Direct taxi access to Navy Nagar.
    </div>
    <a href="[https://www.tajhotels.com](https://www.tajhotels.com)" class="hotel-link" target="_blank" rel="noopener noreferrer">Visit Hotel Website &rarr;</a>
</article>

```

#### Updating a hotel

Edit the text inside `.hotel-name`, `.hotel-distance`, or `.hotel-details` directly in `participate.html`.

#### Deleting a hotel

Locate the `<article class="hotel-card">...</article>` block of that hotel in `participate.html` and delete it.
