const workshopData = {
    schedule: [
        {
            day: "Thursday, 10 December 2026",
            sessions: [
                {
                    time: "09:00 - 09:15",
                    title: "Welcome address",
                    isBreak: false
                },
                {
                    time: "09:15 - 12:00",
                    title: "Algorithms & Formal Methods",
                    isBreak: false,
                    talks: [
                        {
                            title: "Approximation Algorithms in Network Design",
                            speakers: ["chandra-chekuri"],
                            abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        },
                        {
                            title: "Stochastic Games and Quantitative Verification",
                            speakers: ["ashutosh-trivedi"],
                            abstract: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        },
                        {
                            title: "Algebraic Methods in Derandomization",
                            speakers: ["rohit-gurjar", "benny-applebaum"],
                            abstract: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra."
                        }
                    ]
                },
                {
                    time: "12:00 - 13:30",
                    title: "Lunch",
                    isBreak: true
                },
                {
                    time: "13:30 - 16:00",
                    title: "Commemorative session on Prof. Narasimhan",
                    isBreak: false
                },
                {
                    time: "16:00 - 17:30",
                    title: "Student poster session",
                    isBreak: false
                },
                {
                    time: "17:30 - 19:00",
                    title: "Public lecture: Trustworthy AI for Clinical Decision Making",
                    speakers: ["rajeev-alur"],
                    isBreak: false
                }
            ]
        },
        {
            day: "Friday, 11 December 2026",
            sessions: [
                {
                    time: "09:30 - 12:30",
                    title: "Complexity & Cryptography",
                    isBreak: false
                },
                {
                    time: "12:30 - 14:00",
                    title: "Lunch",
                    isBreak: true
                },
                {
                    time: "14:00 - 17:30",
                    title: "AI, ML & Quantum",
                    isBreak: false
                },
                {
                    time: "17:30 - 18:00",
                    title: "Closing session",
                    isBreak: false
                }
            ]
        }
    ],
    speakers: [
        {
            anchor: "rajeev-alur",
            name: "Rajeev Alur",
            affiliation: "University of Pennsylvania",
            image: "assets/rajeev-alur.jpg",
            website: "https://www.cis.upenn.edu/~alur/"
        },
        {
            anchor: "ashutosh-trivedi",
            name: "Ashutosh Trivedi",
            affiliation: "University of Colorado Boulder",
            image: "assets/ashutosh-trivedi.jpg",
            website: "http://ashutoshtrivedi.com/"
        },
        {
            anchor: "diptarka-chakraborty",
            name: "Diptarka Chakraborty",
            affiliation: "National University of Singapore",
            image: "assets/diptarka-chakraborty.jpg",
            website: "https://sites.google.com/view/diptarka"
        },
        {
            anchor: "chandra-chekuri",
            name: "Chandra Chekuri",
            affiliation: "University of Illinois Urbana-Champaign",
            image: "assets/chandra-chekuri.jpg",
            website: "https://chekuri.cs.illinois.edu/"
        },
        {
            anchor: "aditya-gopalan",
            name: "Aditya Gopalan",
            affiliation: "Indian Institute of Science, Bengaluru",
            image: "assets/aditya-gopalan.jpg",
            website: "https://ece.iisc.ac.in/~aditya/"
        },
        {
            anchor: "preeti-rao",
            name: "Preeti Rao",
            affiliation: "Indian Institute of Technology Bombay",
            image: "assets/preeti-rao.webp",
            website: "https://www.ee.iitb.ac.in/people/faculty/preeti-rao/"
        },
        {
            anchor: "devavrat-shah",
            name: "Devavrat Shah",
            affiliation: "Massachusetts Institute of Technology",
            image: "assets/devavrat-shah.jpg",
            website: "https://devavrat.mit.edu/"
        },
        {
            anchor: "cm-chandrashekar",
            name: "C M Chandrashekar",
            affiliation: "Institute of Mathematical Sciences / TIFR",
            image: "assets/cm-chandrashekar.jpg",
            website: ""
        },
        {
            anchor: "benny-applebaum",
            name: "Benny Applebaum",
            affiliation: "Tel Aviv University",
            image: "assets/benny-applebaum.jpg",
            website: "https://bennyapplebaum.sites.tau.ac.il/"
        },
        {
            anchor: "srikanth-srinivasan",
            name: "Srikanth Srinivasan",
            affiliation: "University of Copenhagen",
            image: "assets/srikanth-srinivasan.jpg",
            website: "https://srikanth-srinivasan.bitbucket.io/"
        },
        {
            anchor: "rohit-gurjar",
            name: "Rohit Gurjar",
            affiliation: "Indian Institute of Technology Bombay",
            image: "assets/rohit-gurjar.jpg",
            website: "https://www.cse.iitb.ac.in/~rgurjar/"
        }
    ]
};
