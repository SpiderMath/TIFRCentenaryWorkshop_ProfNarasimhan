You are building a static website (HTML/CSS/vanilla JS, no frameworks, no build tools, no external dependencies except optionally Google Fonts via \<link\>) for an academic centenary workshop. I will copy-paste your output directly into files, so everything must work by just opening index.html in a browser (no local server).

 # GOAL

 Build a modern, lean, sharp-typography website for an academic centenary workshop.

 The website must:

 - be easy to navigate for non-technical visitors
- work well on desktop and mobile
- be accessible and readable
- use straightforward, maintainable HTML/CSS/JS
- keep frequently changing information easy to update
- avoid unnecessary technical complexity
- load quickly
- work without a build process or local server

 The site should feel like a real institutional website made for a specific event at TIFR.

 It should have a strong visual identity, but that identity must come from typography, colour, photography, information hierarchy, layout and content rather than decorative effects.

 The overall character should be:

 - modern
- precise
- calm
- lightweight
- typographic
- slightly technical
- academic
- archival
- institutional
- easy to understand

 It should be appropriate for both researchers and visitors who may have little familiarity with technical websites.

 # WRITING STYLE RULES

 Apply these rules to all visible text and code comments.

 - Never use an em dash (—) anywhere.
- Never use the sentence pattern "it's not X, it's Y" or close variants.
- Keep sentences short and plain.
- Avoid marketing language and exaggerated claims.
- Do not invent facts, statistics, testimonials, affiliations, programme details or achievements.
- Use direct language.
- Prefer factual descriptions over promotional copy.

 # DESIGN PHILOSOPHY

 Treat the website as an information system first.

 A visitor should be able to answer these questions quickly:

 - What is this event?
- When is it?
- Where is it?
- What is happening?
- Who is speaking?
- How can I attend?
- How can I submit a poster?
- Who was R. Narasimhan?
- Where can I find more historical information?

 Visual design must support those questions.

 Do not make every section compete for attention.

 Do not add visual elements merely because a section contains empty space.

 Whitespace is useful.

 Content density is acceptable when the content benefits from it.

 A programme should be allowed to look like a programme.

 A speaker directory should be allowed to look like a directory.

 A historical section should be allowed to look archival.

 An instructional section should be allowed to look instructional.

 Do not force every type of content into the same visual component.

 # INSTITUTIONAL IDENTITY

 The website should have a clear TIFR-inspired identity.

 Use TIFR blue as the principal brand colour.

 Blue should be a meaningful structural part of the design rather than a tiny decorative accent.

 Use blue for appropriate elements such as:

 - navigation accents
- active navigation states
- links
- rules and dividers
- section markers
- buttons
- timeline markers
- information bands
- selected headings
- important notices

 Use large areas of blue only where they improve hierarchy or navigation.

 Do not use gradients involving blue.

 Do not combine blue with glows, glass effects or decorative lighting.

 The exact TIFR blue should be represented through a CSS variable so it can be changed easily if the final institutional colour specification is supplied later.

 # VISUAL CHARACTER

 The website should feel closer to a carefully designed institutional publication, academic programme or museum archive than to a startup landing page.

 However, do not blindly imitate a "minimal editorial website" template.

 Avoid creating a repetitive pattern such as:

 small uppercase label\
 large heading\
 paragraph\
 image\
 thin divider

 repeated throughout every section.

 Likewise, do not turn every section into a card.

 The site should have visual rhythm through changes in composition, density, scale and content type.

 Different sections should be designed according to what they contain.

 # COMPOSITION

 Use a consistent underlying grid and alignment system throughout the website.

 The main content should have a clear maximum width and consistent horizontal margins.

 Establish a strong visual relationship between:

 - navigation
- page headings
- section headings
- body text
- images
- metadata
- rules
- content columns

 Do not centre everything by default.

 Do not make every section asymmetric either.

 Choose the composition that best communicates the information.

 Useful compositions include:

 - asymmetric two-column layouts
- image-led sections
- full-width information bands
- editorial text columns
- programme timelines
- schedule tables
- speaker directories
- archival image galleries
- chronological timelines
- pull quotes
- compact metadata blocks
- instructional two-track layouts

 Use different compositions where appropriate.

 Do not repeat the same layout merely for stylistic consistency.

 Consistency should come from the grid, typography, spacing, colour and component language.

 # ANTI-TEMPLATE / ANTI-AI DESIGN RULES

 Before finalising the website, inspect the design for patterns that make it resemble a generic AI-generated website.

 Avoid:

 - generic SaaS layouts
- centred hero sections by default
- giant marketing headlines without informational purpose
- repeated card grids
- excessive cards
- excessive rounded containers
- excessive use of uppercase labels
- excessive use of monospace text
- excessive thin dividers
- repetitive two-column sections
- decorative numbered sections that exist only for appearance
- arbitrary floating elements
- excessive empty space
- generic "feature" sections
- fake visual complexity
- unnecessary badges
- decorative icons without a function
- meaningless statistics
- unnecessary hover animations
- excessive section backgrounds

 If multiple sections look as though they were generated from the same template, change their composition.

 Do not solve this by adding decorative effects.

 Solve it by improving information hierarchy and layout.

 The site should feel designed for this specific event.

 # TYPOGRAPHY

 Typography should be highly readable and distinctive without being fashionable for its own sake.

 A serif display face may be used for major headings if it genuinely suits the archival character.

 A sans-serif may be used for headings if that produces a stronger result.

 Body text should use a highly readable sans-serif or similarly legible typeface.

 A monospace typeface may be used selectively for technical metadata such as:

 - dates
- times
- section numbers
- programme labels
- small metadata

 Do not force monospace typography onto every piece of secondary information.

 Do not make the website look like a developer portfolio.

 Establish a clear typographic scale and use it consistently.

 # COLOUR SYSTEM

 Define all colours as CSS variables.

 The light palette should be based around:

 - warm white or very light neutral background
- dark ink text
- TIFR blue
- restrained secondary neutrals
- subtle borders

 The dark palette should be a genuinely considered dark theme.

 Do not simply replace white with #111 and black with #eee.

 Maintain readable contrast and adjust blue and neutral colours appropriately for dark mode.

 Do not hardcode colours outside the central colour variables.

 # SHAPE AND SURFACES

 - Prefer rectangular or minimally rounded elements.
- Border radius should generally be 0 to 4px.
- Do not use pill-shaped controls unless the shape has a clear semantic reason.
- Do not use box shadows.
- Use borders, spacing, typography and colour to establish hierarchy.
- Do not use glassmorphism.
- Do not use gradients.
- Do not use glowing borders.
- Do not use decorative blur effects.

 # MOTION AND INTERACTION

 Keep motion restrained.

 Do not use:

 - fade-in-on-scroll
- slide-up-on-scroll
- large entrance animations
- scale-up hover effects
- floating animations
- parallax effects
- decorative animation

 Content should be visible immediately.

 Hover states should be subtle, such as:

 - underline
- colour change
- border colour change

 Respect prefers-reduced-motion.

 JavaScript should only be used where it provides a meaningful improvement.

 # ICONOGRAPHY

 Do not use emoji as interface icons.

 If icons are needed, use simple inline SVG icons.

 Appropriate examples include:

 - menu
- close
- sun
- moon
- external link
- previous/next gallery controls

 Do not introduce an icon library.

 # RESPONSIVE DESIGN

 Design desktop and mobile layouts deliberately.

 Do not simply shrink the desktop layout.

 Test the design mentally at:

 - 375px wide
- 768px wide
- 1024px wide
- 1440px wide

 Mobile requirements:

 - no horizontal scrolling
- readable text
- comfortable tap targets
- clear navigation
- appropriately sized images
- easy programme scanning
- speaker information remains usable
- important information remains easy to find

 # NAVIGATION

 Every page shares the same navigation.

 Desktop:

 - rectangular logo on the left
- logo links to index.html
- Home
- Programme & Speakers
- Public Lecture
- Participate
- Remembering Narasimhan
- theme toggle

 Highlight the current page.

 On mobile, collapse the navigation links behind a clearly labelled "Menu" button.

 Do not rely on an unlabeled hamburger icon alone.

 The mobile menu should be simple, obvious and easy to close.

 The theme toggle should have an accessible label.

 Use localStorage so the selected theme persists between pages.

 # FOOTER

 Every page has a shared footer.

 Include a Contact section containing:

 Umang Bhaskar (TIFR)\
 Email: umang@example.tifr.res.in

 Sana Naeem Shaikh (TIFR Admin)\
 Email: sana@example.tifr.res.in\
 Phone: +91-22-0000-0000 (office)

 These are placeholders and must be clearly commented in the code so they can be replaced later.

 # FILE / DIRECTORY STRUCTURE

 Use exactly this layout:

 /\
 index.html\
 programme.html\
 public-lecture.html\
 participate.html\
 remembering.html\
 assets/\
 css/\
 base.css\
 layout.css\
 components.css\
 js/\
 main.js\
 data.js\
 images/

 base.css:\
 CSS reset, variables, typography, colours, dark mode.

 layout.css:\
 Grid, flex layouts, navigation, footer, containers and page-level structure.

 components.css:\
 Buttons, cards, programme elements, speaker entries, gallery, timeline and other reusable UI components.

 main.js:\
 Navigation, mobile menu, theme switching, gallery behaviour and small shared interactions.

 data.js:\
 Structured programme and speaker information.

 images/:\
 Use clearly named placeholder filenames.

 Examples:

 logo.png\
 narasimhan-hero.jpg\
 narasimhan-1.jpg\
 narasimhan-2.jpg\
 narasimhan-3.jpg\
 narasimhan-4.jpg\
 speaker-alur.jpg

 Include a code comment explaining that these are placeholders and must be replaced with final approved assets.

 # DATA-DRIVEN CONTENT

 Frequently changing information must be kept separate from page layout.

 Put programme and speaker data in data.js.

 The HTML should contain structural containers.

 JavaScript should render the changing data into those containers.

 A non-developer should be able to update:

 - a programme time
- a session title
- a speaker
- a speaker biography
- a speaker website
- an abstract

 without modifying the HTML structure.

 Do not create a complicated content management system.

 Keep the data format obvious to someone who understands basic JavaScript.

 At the top of data.js, include a plain-language comment explaining:

 1. How to add a new speaker.
2. How to add a speaker biography.
3. How to add a new programme session.
4. How to add an abstract.
5. How to change an urgent announcement.

 # SITE-WIDE ANNOUNCEMENTS

 Include support for a simple urgent or important announcement.

 For example:

 const siteNotice = {\
 enabled: false,\
 type: "important",\
 text: "",\
 link: ""\
 };

 The announcement should be possible to enable or disable from data.js.

 The announcement may appear in a visually clear but restrained information band.

 Do not make it resemble an advertising banner.

 The purpose is to allow an important update to be published within an hour.

 # PROGRAMME DATA

 Create scheduleData as an array of day objects.

 Each day contains:

 - date label
- day name
- sessions

 Each session contains:

 - time
- title
- optional speaker
- optional abstract

 Seed it with:

 Thursday 10 December

 09:00-09:15\
 Welcome address

 09:15-12:00\
 Algorithms and Formal Methods

 12:00-13:30\
 Lunch

 13:30-16:00\
 Commemorative session on Prof. Narasimhan

 16:00-17:30\
 Student poster session

 17:30-19:00\
 Public lecture\
 Speaker: Prof. Rajeev Alur

 Friday 11 December

 09:30-12:30\
 Complexity and Cryptography

 12:30-14:00\
 Lunch

 14:00-17:30\
 AI, ML and Quantum

 17:30-18:00\
 Closing session

 The programme design must work cleanly when:

 - only the session title is known
- a speaker is later assigned
- an abstract is later added

 Do not create awkward text such as:

 "TBA · Session title"

 Do not fabricate missing information.

 # SPEAKER DATA

 Create speakersData as an array of objects.

 Each speaker supports:

 - name
- photo
- website
- optional affiliation
- optional bio

 Seed it with these confirmed speakers:

 - Rajeev Alur
- Ashutosh Trivedi
- Diptarka Chakraborty
- Chandra Chekuri
- Aditya Gopalan
- Preeti Rao
- Devavrat Shah
- C M Chandrashekar
- Benny Applebaum
- Srikanth Srinivasan
- Rohit Gurjar

 Treat optional information as absent initially.

 The speaker layout must remain balanced when no biography exists.

 Speaker entries should feel like a professional academic directory or programme roster.

 Do not make them look like generic startup testimonial cards.

 # PAGE: INDEX.HTML

 The homepage is the main information hub.

 The first viewport should communicate:

 - Centenary Workshop
- Prof. R. Narasimhan
- 1926-2007
- 10-11 December 2026
- TIFR, Mumbai
- what the workshop contains

 The desktop hero should use a strong two-column composition.

 One side contains:

 - event title
- Narasimhan's name
- dates
- location
- short event description

 The other side contains a large archival photograph.

 Use a real img element.

 Do not use a CSS background image for the hero.

 Include descriptive alt text.

 The hero and the When/Where/Format information strip together should occupy approximately 60-75% of a 1440x900 viewport.

 Do not force all homepage content into the first viewport.

 Below the first viewport, include:

 ## About the workshop

 Two or three sentences.

 Explain that TIFR was Narasimhan's primary place of work and that the workshop commemorates his career and legacy through:

 - technical sessions
- public lecture
- student poster session
- commemorative session

 ## Event information

 Present:

 WHEN\
 10-11 December 2026

 WHERE\
 TIFR main campus\
 Mumbai

 FORMAT\
 Technical sessions\
 Public lecture\
 Student posters\
 Commemorative session

 Keep this compact and highly scannable.

 ## Pull quote

 Use a paraphrase attributed to:

 R. Narasimhan\
 "Men, machines, and ideas," 1999

 The paraphrase should convey his view that TIFR's technologically informed environment helped enable advanced computer science work.

 Do not reproduce the source sentence verbatim.

 ## R. Narasimhan

 Provide a concise biography.

 Cover the most relevant points:

 - training in telecommunication engineering at Madras
- Tata Fellowship to the United States
- MS from Caltech
- PhD in Mathematics from Indiana University in 1954
- joining TIFR at Homi Bhabha's invitation
- leadership of TIFRAC
- TIFRAC becoming operational around 1960
- later work in syntactic picture description
- research involving machine and animal vision
- institution building
- retirement as Professor of Eminence in 1990

 Keep this section concise.

 Do not reproduce the full historical biography on the homepage.

 ## Timeline

 Use a compact visual timeline containing selected milestones such as:

 1954\
 Joined TIFR

 1960\
 TIFRAC became operational

 1964\
 Work on syntactic picture description

 1972\
 Work on machine and animal vision

 1990\
 Retired as Professor of Eminence

 The timeline should communicate information clearly.

 Do not use decorative numbers simply for visual effect.

 ## Archival gallery

 Include a simple image carousel using 4-5 placeholder images.

 Use pure CSS and vanilla JS.

 No library.

 Each image should have:

 - descriptive alt text
- caption
- optional credit

 Include a placeholder for:

 "Jawaharlal Nehru at the TIFRAC console with TIFR scientists."

 The gallery should have:

 - visible previous/next controls
- keyboard accessibility
- swipe support if reasonably simple
- no autoplay
- clear current position such as 1 / 5

 # PAGE: PROGRAMME.HTML

 This page is information-dense by design.

 Do not make it resemble the homepage.

 Present the schedule grouped by day.

 Desktop may use a two-column layout or structured timeline.

 Mobile should stack naturally.

 Show:

 - time
- session title
- speaker if available
- abstract if available

 The schedule should remain clean with missing optional fields.

 Below the programme, include:

 # Confirmed Speakers

 Render speakersData.

 Use an academic directory style rather than generic marketing cards.

 Each speaker should show:

 - photograph
- name
- affiliation if available
- website
- biography if available

 Missing biographies must not leave an obvious empty space.

 # PAGE: PUBLIC-LECTURE.HTML

 Feature:

 Prof. Rajeev Alur

 Zisman Family Professor of Computer and Information Science, University of Pennsylvania

 Include:

 - photograph
- website
- short descriptive biography
- connection to trustworthy AI
- connection to Narasimhan's interests in language, perception and AI
- distinctions

 Distinctions:

 - inaugural CAV Award
- inaugural Alonzo Church Award
- IIT Kanpur Distinguished Alumnus Award
- Knuth Prize
- EATCS Award

 Create a strong venue section:

 Homi Bhabha Auditorium\
 Tata Institute of Fundamental Research

 Explain that TIFR public lectures are held in the Homi Bhabha Auditorium.

 Make the venue visually prominent.

 # PAGE: PARTICIPATE.HTML

 This page should be especially easy for first-time visitors to understand.

 Present two clearly separated participation paths.

 ## Registration

 Visitors can attend the lectures and sessions.

 Travel and accommodation are the responsibility of the attendee.

 Include a placeholder registration link.

 ## Poster Submission

 For students.

 Approximately thirty students from across India will be selected.

 TIFR will provide accommodation for the workshop duration.

 Students travelling from outside Mumbai will also receive travel support.

 Include a placeholder poster submission link.

 Mark placeholder URLs in a code comment so they are easy to replace.

 The page should prioritise clarity over visual experimentation.

 # PAGE: REMEMBERING.HTML

 This is the archival and historical page.

 It should contain more detail than the homepage.

 Possible sections:

 ## Life and career

 ## TIFR and TIFRAC

 ## Research and ideas

 Discuss:

 - syntactic pattern recognition
- picture description
- formal language approaches to visual structure
- machine and animal vision
- computational approaches to language, perception and cognition

 ## Institution building

 Cover, where supported by reliable sources:

 - National Centre for Software Development and Computing Techniques
- later National Centre for Software Technology
- eventual lineage into C-DAC
- Computer Maintenance Corporation
- founding Chairmanship
- Computer Society of India
- first presidency
- Department of Electronics advisory work
- IFIP representation from 1975-1986

 Write entirely in your own words.

 Do not reproduce source text.

 ## Timeline

 Use a clear chronological presentation.

 ## Photographs and archives

 Use archival photographs with captions.

 ## Selected quotations

 Use only short quotations where appropriate.

 Do not reproduce long source passages.

 ## Further reading

 Include plain external links to:

 R. Narasimhan, Resonance / Indian Academy of Sciences:\
 https://www.ias.ac.in/article/fulltext/reso/013/05/0407-0409

 R. Narasimhan, TIFR Endowment:\
 https://www.tifr.res.in/endowment/prof-r-narasimhan.htm

 Clearly identify the publisher/title of each source.

 # TECHNICAL REQUIREMENTS

 Use semantic HTML5:

 - header
- nav
- main
- section
- article
- footer
- figure
- figcaption
- button
- appropriate heading levels

 All five pages must share the same navbar and footer structure.

 Comment each file at the top explaining its purpose.

 Use CSS variables for:

 - colours
- typography
- spacing
- layout widths
- border styles
- theme values

 Keep variables centralised in base.css.

 Use external fonts only if they improve the design and are supplied through a simple Google Fonts link.

 The website must still have sensible fallback fonts if the external font cannot load.

 # JAVASCRIPT

 Keep JavaScript small.

 Use main.js for:

 - mobile navigation
- theme toggle
- localStorage theme persistence
- gallery controls
- small shared interactions

 Use data.js for:

 - scheduleData
- speakersData
- siteNotice
- other frequently changing content

 Do not create a large JavaScript application.

 Do not introduce a router.

 Do not introduce a component framework.

 Do not introduce a build system.

 # MAINTAINABILITY

 Write code for a future editor who may only have basic HTML/CSS/JS knowledge.

 Use:

 - clear names
- plain-language comments
- predictable structure
- small functions
- centralised data
- CSS variables
- meaningful class names

 Avoid:

 - clever abstractions
- unnecessary component systems
- deeply nested CSS
- unexplained magic numbers
- duplicated data
- inline styles
- unnecessary dependencies
- unnecessarily complex JavaScript

 Do not create an abstraction merely because two lines of code look similar.

 Extract reusable code when there is a genuine repeated UI concept.

 # ACCESSIBILITY

 Accessibility is required.

 Include:

 - semantic HTML
- logical heading hierarchy
- keyboard navigation
- visible focus states
- sufficient contrast
- descriptive alt text
- meaningful captions
- accessible buttons
- accessible theme toggle
- accessible mobile navigation
- reduced-motion support

 Do not communicate important information through colour alone.

 The core website content should remain usable without JavaScript wherever reasonably possible.

 # PERFORMANCE

 Keep the site lightweight.

 Do not add libraries for simple tasks.

 Do not add animations that provide no functional benefit.

 Use appropriately sized images.

 Use loading="lazy" for images below the initial viewport where appropriate.

 Do not preload everything.

 # IMPORTANT DESIGN REVIEW

 Before delivering the final implementation, perform a visual review.

 Ask:

 1. Does this look like a website specifically designed for the R. Narasimhan centenary workshop?
2. Does TIFR blue provide a recognisable institutional identity?
3. Are different types of information presented in appropriately different ways?
4. Are there too many cards?
5. Are there too many centred sections?
6. Are there too many large headings?
7. Is monospace being overused?
8. Are thin borders being used excessively?
9. Are sections repeating the same layout?
10. Does anything look decorative without communicating information?
11. Does the site resemble a generic AI-generated "minimal editorial" website?
12. Can a non-technical visitor find important information quickly?
13. Does the mobile layout feel deliberately designed?
14. Does the website still look good if the images are temporarily replaced with plain placeholders?

 If the answer to the AI-template question is yes, change the composition and hierarchy.

 Do not add decorative effects to solve the problem.

 # IMPORTANT ENGINEERING REVIEW

 Before delivery, check:

 - all relative paths
- all navigation links
- mobile menu behaviour
- theme persistence
- keyboard accessibility
- image alt text
- responsive behaviour
- missing optional speaker data
- missing programme abstracts
- missing programme speakers
- announcement enable/disable behaviour
- placeholder links
- CSS variable usage
- absence of em dashes
- absence of the prohibited sentence pattern

 Test mentally at:

 - 375px wide
- 768px wide
- 1024px wide
- 1440px wide

 At 1440x900 specifically, verify that the homepage hero and event information strip occupy approximately 60-75% of the initial viewport without forcing the rest of the homepage into view.

 # IMPORTANT CONTENT PRINCIPLE

 The visual identity must emerge from the combination of:

 TIFR blue\
 +\
 typography\
 +\
 archival photography\
 +\
 strong grid alignment\
 +\
 information hierarchy\
 +\
 restrained interaction\
 +\
 appropriate variation between content types

 Do not rely on fashionable web-design effects.

 The result should feel precise, permanent and specific to the institution and event.

 # DELIVERY FORMAT

 Output one file per code block, each preceded by its filename as a Markdown heading.

 Start with:

 base.css\
 layout.css\
 components.css\
 data.js\
 main.js\
 index.html

 Then stop.

 Ask me to say "continue" before producing:

 programme.html\
 public-lecture.html\
 participate.html\
 remembering.html

 If any single file is long, you may pause and ask me to continue rather than silently truncating it.

 Do not omit required code for brevity.

 # FACTUAL SOURCES

 You may consult the supplied sources and other reliable sources to verify factual information about R. Narasimhan.

 Sources include:

 https://www.ias.ac.in/article/fulltext/reso/013/05/0407-0409

 https://www.tifr.res.in/endowment/prof-r-narasimhan.htm

 Paraphrase source material in your own words.

 If quoting, keep individual quotations short and attribute them clearly.

 Do not fabricate information that is not supported by the supplied material or a reliable source.
