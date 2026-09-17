Aim: To create a website for a Centenary Workshop, in honour of Prof R. Narasimhan.

Tools available:
- HTML
- CSS
- JavaScript (optional)

Priorities:
- Easy information access
- Keeping it simple
- No em-dashes in the website, or the code
- Mobile-friendly website
- No utilisation of typical AI-isms in language. For example: the sentence structure "its not X, its Y"
- Ability to switch themes

File structure:

```
workshop/
- index.html
- participate.html
- programme.html
- public-lecture.html
- remembering.html
- assets/
    - narasimhan-at-tifr-1.jpg
    - narasimhan-at-tifr-2.jpg
    - nehru-tifrac.jpg
    - tifrac-room.jpg
    - tifr-logo-light.svg
    - tifr-logo-dark.svg
- css/
- js/
    - data.js
```

Webpage Display Structure:
_____________
NAVBAR (on top)

Content

FOOTER
_____________

Points to note:
NAVBAR, FOOTER shall remain constant throughout the pages. So we shall work on that first.
Content varies from page to page, and that is elaborated after this.

Specifications "Content" for various pages:
- index.html
    Present the following bits of information:
    - Centenary Workshop
    - for Prof. R. Narasimhan (1926 - 2007)
    - 10-11 December 2026
    - Tata Institute of Fundamental Research, Mumbai
    - A single line description: A special event to commemorate Professor Narasimhan's distinguished career and legacy, combining technical talks, a public lecture, a student poster session, and a commemorative session on Professor Narasimhan.
    - Carousel of images
        - Will contain a couple of images (final count unknown, currently four images), each image must be coupled with a caption
        - Auto-scrolling (after 5 seconds delay)
        - Must contain arrows for navigation
    - Further elaboration about the workshop:
```
TIFR was Professor Narasimhan’s primary place of work, where he made many important contributions to computer science research and technology. The workshop is being organised at TIFR’s main campus in Mumbai to commemorate his distinguished career and legacy.

The event combines technical talks, a public lecture, a poster session for students, and a commemorative session on Professor Narasimhan. The technical sessions bring together leading researchers from India and abroad working in several areas of computer science.

    “The technologically literate environment of TIFR was an essential facilitating factor in undertaking cutting-edge work in computer science.”
    R. Narasimhan, Men, machines, and ideas, 1999
```

- participate.html
    - Currently empty, to be elaborated later
- programme.html
    - Will contain a list of events that shall happen happen on 10th and 11th December, so present those nicely
    - Each event will follow the following scheme:
        - a scheduled timing (example: "09:00 - 09:15", the format may be modelled as you'd like)
        - a title (examples: "Welcome address", "Algorithms & Formal Methods", "Lunch")
        - a description (i.e. a talk abstract) [OPTIONAL]
        - a speaker (i.e. the presenter) [OPTIONAL]
    - The page must also contain a list of speakers, where each speaker will following the following scheme:
        - Name
        - Institution/organisation affiliated with
        - Picture
        - Link to the website [OPTIONAL]
        - Short bio [OPTIONAL]
    - Requirements:
        - On tapping the speakers in the programme list, it'll take the user to the list of speakers section
        - Heading of the page (right after NAVBAR) must be some variant of Programme Details
        - The list of speakers, and schedule, must be loaded from data.js, the schema/presentation in data.js is your own volition
- remembering.html; public-lecture.html
    - Currently no information
Specifications for NAVBAR and FOOTER: (contains the desktop layout, you are required to adapt the navbar according to current web standards on mobile layout for mobile design and components)
- NAVBAR:
    - Left hand side: Logo of the website
    - Right hand side: Home, Programme, Public Lecture, Participate, Remembering, THEME BUTTON
        - THEME BUTTON: Use the web's standard buttons for changing the theme of the website from dark to light and vice versa. This button must be in visible by default (by not being in the hamburger menu) ON MOBILE LAYOUT.

- FOOTER:
    - Use standard website stylings for the presentation of the following details
        - Contact:
            1. Prof. Umang Bhaskar, Email: <placeholder>
            2. Ms. Sana Naeem Shaikh, Email: <admin-placeholder>, Extension: <placeholder>
        - Location (google maps link: https://maps.app.goo.gl/NHsNqvXtUPAAAsdW9)
        - TIFR Main Website (you may change the text you use to write this): https://www.tifr.res.in
        - TIFR STCS Department Website (you may change the text you use to denote this, STCS denotes School of Technology and Computer Science): https://www.tcs.tifr.res.in/web/
        - Present links to the other pages as well.

Current task:
Please create confirm comprehension of the specifications of the website at the moment. If so, then we shall proceed with the development of the website, AS PER THE INSTRUCTIONS. 
Note: all the non-assets files are empty, and you are free to make your own files as required. Please provide the plan before providing any code.

Okay, I am keeping this background bit, I love this! (I went with narasimhan at tifr 1 btw)
Let's move on to Public Lecture

We wish to convey the following information
- Public Lecture by Prof. Rajeev Alur
- Details in the following text: "
              Zisman Family Professor of Computer and Information Science,
              University of Pennsylvania
            

            
              Professor Alur’s work on trustworthy AI systems is particularly relevant,
              given the widespread prevalence and capabilities of AI systems, as well as
              Professor Narasimhan’s own research in language acquisition and artificial
              intelligence.
            

            
              His distinctions include the inaugural CAV Award, the inaugural Alonzo Church
              Award, the IIT Kanpur Distinguished Alumnus Award, the Knuth Prize, and the
              EATCS Award.
            "
- Keep some space for his talk title (It's unknown for now, so just put "[title goes here]")
- I need you to use rajeev's photo (it's added to the assets folder, don't worry), and also somehow keep space for his talk abstract (write lorem ipsum there (couple of words there for now basically))because this is a big event, a headliner if you will.