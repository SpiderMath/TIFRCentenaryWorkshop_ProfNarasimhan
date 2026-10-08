const workshopData = {
  schedule: [
    {
      day: "Thursday, 10 December 2026",
      sessions: [
        {
          time: "09:00 - 09:15",
          title: "Welcome address (Director & Dean)",
          isBreak: false,
        },
        {
          time: "09:15 - 10:00",
          title: "Algorithms & Formal Methods",
          isBreak: false,
          talks: [
            {
              title: "TBA",
              speakers: ["devavrat-shah"],
              abstract: "",
            },
            {
              title: "TBA",
              speakers: ["ashutosh-trivedi"],
              abstract: "",
            },
          ],
        },
        {
          time: "10:00 - 10:30",
          title: "Tea break",
          isBreak: true,
        },
        {
          time: "10:30 - 12:00",
          title: "Algorithms & Formal Methods",
          isBreak: false,
          talks: [
            {
              title: "TBA",
              speakers: ["diptarka-chakraborty"],
              abstract: "",
            },
            {
              title: "TBA",
              speakers: ["chandra-chekuri"],
              abstract: "",
            },
          ],
        },
        {
          time: "12:00 - 13:30",
          title: "Lunch",
          isBreak: true,
        },
        {
          time: "13:30 - 16:00",
          title: "Commemorative session on Prof. Narasimhan",
          isBreak: false,
        },
        {
          time: "16:00 - 17:30",
          title: "Student poster session and tea break",
          isBreak: false,
        },
        {
          time: "17:30 - 19:00",
          title: "Public lecture: Trustworthy AI for Clinical Decision Making",
          speakers: ["rajeev-alur"],
          isBreak: false,
        },
      ],
    },
    {
      day: "Friday, 11 December 2026",
      sessions: [
        {
          time: "09:30 - 11:00",
          title: "Complexity & Cryptography",
          isBreak: false,
          talks: [
            {
              title: "The Complexity of Secret Sharing",
              speakers: ["benny-applebaum"],
              abstract:
                "Secret sharing allows a dealer to distribute a secret among a collection of parties so that only certain authorized subsets can reconstruct the secret, while unauthorized subsets learn nothing about it. The complexity of such schemes has been studied for several decades and is governed by the structure of the underlying access structure.\n\nOver the last decade, substantial progress has been made on several central questions, yet many basic problems remain wide open. In this talk, I will survey several of these recent developments and highlight some unexpected connections between the complexity of secret sharing and other questions in computational complexity.",
            },
            {
              title: "TBA",
              speakers: ["srikanth-srinivasan"],
              abstract: "",
            },
          ],
        },
        {
          time: "11:00 - 11:30",
          title: "Tea break",
          isBreak: true,
        },
        {
          time: "11:30 - 13:00",
          title: "Complexity & Cryptography",
          isBreak: false,
          talks: [
            {
              title:
                "A Deterministic Parallel Algorithm for Bipartite Matching",
              speakers: ["rohit-gurjar"],
              abstract:
                "The bipartite matching problem is one of the most extensively studied problems in algorithms and complexity theory. Beyond numerous practical applications such as assigning suitable tasks to machines, its study has led to several influential ideas in the field. In this talk, we will review the history of the problem from the perspective of parallel algorithms and present a recent result that gives the first deterministic parallel algorithm for it, settling a question that had remained open for more than four decades.\n\nBased on joint work with Abhranil Chatterjee, Sumanta Ghosh, Roshan Raj, and Thomas Thierauf.",
              bio: "Rohit Gurjar is a faculty member in the CSE department at IIT Bombay since 2018. His research interests center on theoretical computer science, specifically Computational Complexity, Derandomization, Polyhedral Combinatorics, and Parallel Complexity. In particular, he has worked on the polynomial identity testing, bipartite matching and related combinatorial problems. Before joining IITB, he did his postdocs at the University of Ulm (Germany), Tel Aviv University (Israel), and Caltech (USA), and obtained his Ph.D. from IIT Kanpur.",
            },
            {
              title: "TBA",
              speakers: ["TBD"],
              abstract: "",
            },
          ],
        },
        {
          time: "13:00 - 14:00",
          title: "Lunch",
          isBreak: true,
        },
        {
          time: "14:00 - 15:30",
          title: "AI, ML & Quantum",
          isBreak: false,
          talks: [
            {
              title: "TBA",
              speakers: ["preeti-rao"],
              abstract: "",
            },
            {
              title: "TBA",
              speakers: ["aditya-gopalan"],
              abstract: "",
            },
          ],
        },
        {
          time: "15:30 - 16:00",
          title: "Tea break",
          isBreak: true,
        },
        {
          time: "16:00 - 17:30",
          title: "AI, ML & Quantum",
          isBreak: false,
          talks: [
            {
              title: "TBA",
              speakers: ["cm-chandrashekar"],
              abstract: "",
            },
            {
              title: "TBA",
              speakers: ["TBD"],
              abstract: "",
            },
          ],
        },
      ],
    },
  ],
  speakers: [
    {
      anchor: "rajeev-alur",
      name: "Rajeev Alur",
      affiliation: "University of Pennsylvania",
      image: "assets/rajeev-alur.jpg",
      website: "https://www.cis.upenn.edu/~alur/",
    },
    {
      anchor: "ashutosh-trivedi",
      name: "Ashutosh Trivedi",
      affiliation: "University of Colorado Boulder",
      image: "assets/ashutosh-trivedi.jpg",
      website: "http://ashutoshtrivedi.com/",
    },
    {
      anchor: "diptarka-chakraborty",
      name: "Diptarka Chakraborty",
      affiliation: "National University of Singapore",
      image: "assets/diptarka-chakraborty.jpg",
      website: "https://sites.google.com/view/diptarka",
    },
    {
      anchor: "chandra-chekuri",
      name: "Chandra Chekuri",
      affiliation: "University of Illinois Urbana-Champaign",
      image: "assets/chandra-chekuri.jpg",
      website: "https://chekuri.cs.illinois.edu/",
    },
    {
      anchor: "aditya-gopalan",
      name: "Aditya Gopalan",
      affiliation: "Indian Institute of Science, Bengaluru",
      image: "assets/aditya-gopalan.jpg",
      website: "https://ece.iisc.ac.in/~aditya/",
    },
    {
      anchor: "preeti-rao",
      name: "Preeti Rao",
      affiliation: "Indian Institute of Technology Bombay",
      image: "assets/preeti-rao.webp",
      website: "https://www.ee.iitb.ac.in/people/faculty/preeti-rao/",
    },
    {
      anchor: "devavrat-shah",
      name: "Devavrat Shah",
      affiliation: "Massachusetts Institute of Technology",
      image: "assets/devavrat-shah.jpg",
      website: "https://devavrat.mit.edu/",
    },
    {
      anchor: "cm-chandrashekar",
      name: "C M Chandrashekar",
      affiliation: "Institute of Mathematical Sciences / TIFR",
      image: "assets/cm-chandrashekar.jpg",
      website: "https://www.imsc.res.in/~chandru/",
    },
    {
      anchor: "benny-applebaum",
      name: "Benny Applebaum",
      affiliation: "Tel Aviv University",
      image: "assets/benny-applebaum.jpg",
      website: "https://bennyapplebaum.sites.tau.ac.il/",
    },
    {
      anchor: "srikanth-srinivasan",
      name: "Srikanth Srinivasan",
      affiliation: "University of Copenhagen",
      image: "assets/srikanth-srinivasan.jpg",
      website: "https://srikanth-srinivasan.bitbucket.io/",
    },
    {
      anchor: "rohit-gurjar",
      name: "Rohit Gurjar",
      affiliation: "Indian Institute of Technology Bombay",
      image: "assets/rohit-gurjar.jpg",
      website: "https://www.cse.iitb.ac.in/~rgurjar/",
    },
  ],
  sponsors: [
    {
      name: "The Professor R. Narasimhan Endowment",
      logo: "",
      logoDark: "",
      url: "https://www.tifr.res.in/endowment/prof-r-narasimhan-lecture-award.htm",
      subtitle:
        "Established by the family of Prof. R. Narasimhan and The Bharat Family Fund",
    },
    {
      name: "Tata Consultancy Services",
      logo: "assets/TCS-logo-black.svg",
      logoDark: "assets/TCS-logo-white.svg",
      url: "https://www.tcs.com/",
      subtitle: "",
    },
  ],
};
