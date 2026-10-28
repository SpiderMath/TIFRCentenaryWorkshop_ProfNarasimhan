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
              title:
                "Time Series As A Unit Square: Towards a Compute Efficient Foundation Model",
              speakers: ["devavrat-shah"],
              abstract:
                "A Time Series Foundation Model (TSFM) takes in-context time series input to produce a forecast for it. Generic TSFM achieves this by embedding input time series using encoding map and applying a decoding map to produce forecast, where encoding-decoding maps are learnt using pre-training data. The choice of architecture, pre-training data utilized determine the out-of-sample model performance. Existing TSFMs typically require a rich pre-training dataset with large architecture leading to compute intensive training as well as inference. In this work, we are motivated to develop a compute efficient architecture for TSFM without sacrificing performance. Towards that, we introduce an embedding of time series that maps them, in a lossless manner, to a unit square (i.e [0, 1]^2) or equivalently a 2D image: it's intuitive and simple, i.e. computationally straightforward; it's universal, i.e. does not depend on any training data and works for any time series. With this embedding, we introduce an architecture where time series foundation model naturally maps to traditional supervised learning problem. The architecture has flexibility, in addition, of combining any of the existing models to produce a TSFM that is computationally efficient without sacrificing performance. The model architecture also provides ability to tradeoff accuracy with compute cost of inference. We evaluate its performance in terms of forecasting accuracy as well as computational cost and compare with respect to an existing pre-trained TSFM to conclude that it achieves computational efficiency without sacrificing performance.",
              bio: "Devavrat Shah is an Andrew (1956) and Erna Viterbi Professor of Electrical Engineering and Computer Science at MIT. In 2013, he co-founded AI start-up Celect (part of Nike) to help retailers with allocation and fulfillment. In 2019, he is co-founder of Ikigai Labs.",
            },
            {
              title:
                "Trustworthy Reinforcement Learning: From Formal Specifications to Learning Algorithms",
              speakers: ["ashutosh-trivedi"],
              abstract:
                "Reinforcement learning provides a powerful framework for learning decision-making strategies from interaction, but specifying what an agent should learn is often as challenging as designing the learning algorithm itself. A scalar reward can be an inadequate description of objectives that involve sequences of events, long-term requirements, safety constraints, or other temporal properties.\nIn this talk, I will discuss how ideas from formal methods can help address this problem. Temporal logic, automata, and related specification formalisms provide precise ways to describe desired behavior, while reinforcement-learning algorithms provide mechanisms for learning how to achieve such objectives from experience. I will describe ways in which these viewpoints can be connected so that richer specifications can be incorporated into learning algorithms without losing the ability to reason about their behavior.\nI will also discuss some of our recent work on reinforcement learning with formally specified objectives and on obtaining statistical and formal guarantees for learned policies. More broadly, the talk will illustrate how classical ideas from algorithms, automata, and verification can contribute to the design of learning systems that are easier to specify, analyze, and trust.",
              bio: "Ashutosh Trivedi is an Associate Professor of Computer Science at the University of Colorado Boulder. His research lies at the intersection of formal methods, reinforcement learning, and trustworthy artificial intelligence, with applications to cyber-physical and safety-critical systems. His work develops mathematical foundations and algorithms for specifying, learning, and verifying the behavior of learning-enabled systems.",
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
              title: "Fair Clustering and Consensus",
              speakers: ["diptarka-chakraborty"],
              abstract:
                "Clustering is a fundamental task in data analysis, but the resulting clusters may not ensure fair representation of different population groups. In this talk, I will discuss a series of works investigating how to incorporate fairness into clustering while preserving the quality of the solution. We first consider the problem ofmodifying an existing clustering to ensure proportional representation of different groups while making minimal changes. We explore the computational challenges of this problem and develop efficient approximation algorithms, extending from two groups to arbitrarily many groups. Building on these results, we study how to combine multiple clusterings into a single fair consensus. Finally, we investigate how to achieve fair consensus efficiently in large-scale settings where clusterings arrive sequentially, and memory is limited.",
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
          publicLectureUrl: "public-lecture.html",
          abstract:
            "Recent advances in machine learning have led to novel AI-based solutions to challenging computational problems of societal importance. Yet, the state-of-the-art models do not provide reliable explanations of how they make decisions, and can make occasional mistakes on even simple problems. The resulting lack of assurance and trust are obstacles to their adoption in high stakes applications such as clinical decision making. In this talk, I will first explain the problem of forecasting impending cardiac arrest by monitoring ECG signals for in-hospital patients. Then I will discuss both exciting recent advances and remaining challenges in developing an AI-based solution that clinicians can trust and deploy.",
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
      image: "assets/rajeev-alur.webp",
      website: "https://www.cis.upenn.edu/~alur/",
    },
    {
      anchor: "ashutosh-trivedi",
      name: "Ashutosh Trivedi",
      affiliation: "University of Colorado Boulder",
      image: "assets/ashutosh-trivedi.webp",
      website: "http://ashutoshtrivedi.com/",
    },
    {
      anchor: "diptarka-chakraborty",
      name: "Diptarka Chakraborty",
      affiliation: "National University of Singapore",
      image: "assets/diptarka-chakraborty.webp",
      website: "https://sites.google.com/view/diptarka",
    },
    {
      anchor: "chandra-chekuri",
      name: "Chandra Chekuri",
      affiliation: "University of Illinois Urbana-Champaign",
      image: "assets/chandra-chekuri.webp",
      website: "https://chekuri.cs.illinois.edu/",
    },
    {
      anchor: "aditya-gopalan",
      name: "Aditya Gopalan",
      affiliation: "Indian Institute of Science, Bengaluru",
      image: "assets/aditya-gopalan.webp",
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
      image: "assets/devavrat-shah.webp",
      website: "https://devavrat.mit.edu/",
    },
    {
      anchor: "cm-chandrashekar",
      name: "C M Chandrashekar",
      affiliation: "Institute of Mathematical Sciences / TIFR",
      image: "assets/cm-chandrashekar.webp",
      website: "https://www.imsc.res.in/~chandru/",
    },
    {
      anchor: "benny-applebaum",
      name: "Benny Applebaum",
      affiliation: "Tel Aviv University",
      image: "assets/benny-applebaum.webp",
      website: "https://bennyapplebaum.sites.tau.ac.il/",
    },
    {
      anchor: "srikanth-srinivasan",
      name: "Srikanth Srinivasan",
      affiliation: "University of Copenhagen",
      image: "assets/srikanth-srinivasan.webp",
      website: "https://srikanth-srinivasan.bitbucket.io/",
    },
    {
      anchor: "rohit-gurjar",
      name: "Rohit Gurjar",
      affiliation: "Indian Institute of Technology Bombay",
      image: "assets/rohit-gurjar.webp",
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
