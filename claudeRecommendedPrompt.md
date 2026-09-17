You are building a static website (HTML/CSS/vanilla JS, no frameworks, no build 
tools, no external dependencies except optionally Google Fonts via <link>) for an 
academic centenary workshop. I will copy-paste your output directly into files, so 
everything must work by just opening index.html in a browser (no local server).

GOAL
A modern, lean, sharp-typography site that is easy to navigate for non-technical 
visitors, fully responsive (desktop + mobile, hamburger menu on mobile), and easy 
for a non-developer to maintain (clear file separation, commented code, plain-
language variable/class names).

WRITING STYLE RULES (apply to all visible text and to code comments)
- Never use an em dash (—) anywhere, in content or code.
- Never use the sentence pattern "it's not X, it's Y" or close variants.
- Keep sentences short and plain. Avoid marketing fluff.

FILE / DIRECTORY STRUCTURE (use exactly this layout)
/
  index.html
  programme.html
  public-lecture.html
  participate.html
  remembering.html
  assets/
    css/
      base.css        (CSS reset, variables, typography, color tokens incl. dark mode)
      layout.css       (grid/flex layout, navbar, footer, page containers)
      components.css   (cards, carousel, buttons, tables, badges)
    js/
      main.js          (nav toggle, hamburger menu, dark/light theme toggle, carousel logic)
      data.js           (plain JS objects/arrays for schedule and speakers, see below)
    images/
      (use clearly named placeholder filenames, e.g. logo.png, narasimhan-1.jpg, 
      speaker-alur.jpg, and note in a comment that these are placeholders to be 
      replaced with real assets)

GLOBAL LAYOUT (every page)
- Sticky navbar at top: left side is a rectangular logo image that links to index.html. 
  Right side has links: Home, Programme & Speakers, Public Lecture, Participate, 
  Remembering R Narasimhan, and a theme toggle button (sun/moon icon, label 
  "Light/Dark mode"). On mobile, collapse the right-side links into a hamburger menu 
  that opens a simple full-width dropdown or slide-in panel. Highlight the current 
  page's nav link.
- Footer on every page with a "Contact" section listing:
  Umang Bhaskar (TIFR), email placeholder: umang@example.tifr.res.in
  Sana Naeem Shaikh (TIFR Admin), email placeholder: sana@example.tifr.res.in, 
  phone placeholder: +91-22-0000-0000 (office)
- Dark/light mode toggle must persist using localStorage and apply CSS variables 
  (do not hardcode colors outside variables).

DATA-DRIVEN CONTENT (put in data.js as JS arrays/objects, referenced by the pages' 
own small inline scripts or by main.js, so content updates never require touching 
HTML structure)
1. scheduleData: an array of day objects, each with a date label and a list of 
   sessions. Each session has: time, title, and an optional "speaker" field and an 
   optional "abstract" field, both of which may be null/absent. The rendering 
   template must look clean whether speaker and abstract are present or missing, 
   do not fabricate a placeholder like "TBA · " glued awkwardly to the title. Seed 
   it with this schedule:

   Thursday 10 December
   09:00-09:15 Welcome address
   09:15-12:00 Algorithms and Formal Methods
   12:00-13:30 Lunch
   13:30-16:00 Commemorative session on Prof. Narasimhan
   16:00-17:30 Student poster session
   17:30-19:00 Public lecture, speaker: Prof. Rajeev Alur

   Friday 11 December
   09:30-12:30 Complexity and Cryptography
   12:30-14:00 Lunch
   14:00-17:30 AI, ML and Quantum
   17:30-18:00 Closing session

2. speakersData: an array of speaker objects, each with: name, photo (placeholder 
   filename), website (placeholder URL), and an optional bio (may be missing). 
   Render as a card grid. Cards without a bio should still look complete and 
   balanced, not broken or empty-looking. Seed it with these confirmed speakers 
   (no bios or sessions assigned yet, treat all optional fields as absent for now): 
   Rajeev Alur, Ashutosh Trivedi, Diptarka Chakraborty, Chandra Chekuri, Aditya 
   Gopalan, Preeti Rao, Devavrat Shah, C M Chandrashekar, Benny Applebaum, Srikanth 
   Srinivasan, Rohit Gurjar.

PAGE CONTENT

1. index.html (landing page, must fit cleanly in roughly one screen's worth of 
   scrolling on desktop, can flow further on mobile)
   - Hero: "Centenary Workshop, Prof. R. Narasimhan, 1926-2007", dates "10-11 
     December 2026", location "Tata Institute of Fundamental Research, Mumbai", 
     and one short sentence describing the event (technical talks, public lecture, 
     student poster session, commemorative session).
   - A compact "When / Where / Format" info strip (three short items, not a wall 
     of text).
   - A short "About the workshop" section, two to three sentences max, drawn from 
     the idea that TIFR was Narasimhan's primary workplace and the event marks his 
     legacy through technical sessions, a public lecture, a poster session, and a 
     commemorative session.
   - A short pull-quote block: attribute it to R. Narasimhan, "Men, machines, and 
     ideas," 1999, paraphrase the sentiment about TIFR's environment enabling 
     cutting-edge computer science work rather than quoting it verbatim.
   - A short biographical section on Narasimhan: pioneering computer and cognitive 
     scientist, trained in telecommunication engineering at Madras, went to the US 
     on a Tata fellowship, MS from Caltech, PhD in Mathematics from Indiana 
     University in 1954, joined TIFR at Homi Bhabha's invitation, led TIFRAC 
     (India's first indigenous digital computer, operational around 1960), later 
     research on syntactic picture description (1964) and machine/animal vision 
     (1972), helped found the National Centre for Software Development and 
     Computing Techniques, the Computer Maintenance Corporation, and the Computer 
     Society of India, retired as Professor of Eminence in 1990. Keep this tight, 
     summarize rather than reproduce at length, this is a paraphrase task not a 
     copy task.
   - A simple image carousel (pure CSS/JS, no library) with 4 to 5 placeholder 
     images and captions, for archival photos, including a placeholder for 
     "Jawaharlal Nehru at the TIFRAC console with TIFR scientists."
   - Keep this page scannable: short sections, generous whitespace, no dense 
     paragraphs.

2. programme.html
   - Render scheduleData as a two-column-on-desktop, stacked-on-mobile timeline 
     or table, grouped by day.
   - Below the schedule, render speakersData as a "Confirmed Speakers" card grid 
     (photo, name, website link, bio if present).

3. public-lecture.html
   - Feature Prof. Rajeev Alur: photo placeholder, name, title "Zisman Family 
     Professor of Computer and Information Science, University of Pennsylvania", 
     website link placeholder.
   - Short paragraph connecting his work on trustworthy AI systems to Narasimhan's 
     own research interests in language acquisition and AI, paraphrased not quoted.
   - List his distinctions: inaugural CAV Award, inaugural Alonzo Church Award, 
     IIT Kanpur Distinguished Alumnus Award, Knuth Prize, EATCS Award.
   - A clearly highlighted venue callout: the lecture will be held in the Homi 
     Bhabha Auditorium at TIFR.

4. participate.html
   - Two clearly separated tracks presented as cards or side-by-side sections:
     1. Registration: open attendance for the lectures, travel and accommodation 
        are the attendee's own responsibility.
     2. Poster Submission: for students, around thirty will be selected from 
        across India, TIFR provides accommodation for the workshop duration, and 
        travel support for students coming from outside Mumbai.
   - Include a placeholder call-to-action button or link for each track (e.g. 
     "Register" and "Submit a poster") pointing to a placeholder URL or mailto 
     link, clearly marked as a placeholder in a code comment.

5. remembering.html
   - A page with further biographical and legacy content on Narasimhan, distinct 
     from the condensed homepage version, covering his research contributions 
     (syntactic pattern recognition, computational modeling of cognition) and his 
     institution-building work (National Centre for Software Technology lineage 
     into C-DAC, Computer Maintenance Corporation as founding Chairman, Computer 
     Society of India as first President, advisory role to the Department of 
     Electronics, Indian representative to IFIP 1975-86).
   - Write this in your own words as a paraphrase, do not reproduce text verbatim 
     from any source.
   - You may visit and utilise the details given in the links in "Further Reading"
     section as well, if necessary.
   - Include a "Further reading" section with plain links (not embedded content) 
     to these two external sources, clearly labeled by title/publisher:
     https://www.ias.ac.in/article/fulltext/reso/013/05/0407-0409
     https://www.tifr.res.in/endowment/prof-r-narasimhan.htm

TECHNICAL AND MAINTENANCE REQUIREMENTS
- Semantic HTML5 (nav, main, section, footer, figure/figcaption for images).
- All five pages share identical navbar/footer markup, comment each file clearly 
  at the top with its purpose.
- CSS variables for colors, spacing, and font sizes in base.css so a future editor 
  can retheme without touching component code.
- JS should be small, commented, and split by concern (navigation/theme in 
  main.js, content in data.js).
- Add a short comment block at the top of data.js explaining how a non-developer 
  would add a new speaker, a new schedule row, or mark something "urgent" so it 
  can be updated within an hour, since quick same-day edits are a priority.
- Mobile breakpoint should target common phone widths, test the described layout 
  mentally for both a 375px and a 1440px viewport.

DELIVERY FORMAT
Output one file per code block, each preceded by its filename as a heading. Start 
with base.css, layout.css, components.css, data.js, and main.js, then index.html, 
then stop and ask me to say "continue" before producing the remaining four HTML 
pages. If any single file is long, you may pause mid-list and ask to continue 
rather than truncating a file silently.

PATCH
You may consult the linked sources (and any other reliable ones you find) for factual accuracy on Narasimhan's biography, career, and contributions. Where a specific short phrase is worth preserving because it captures something well, you may quote it directly, in quotation marks, attributed to its source, kept under roughly fifteen words. Otherwise, continue to write in your own words as a paraphrase.