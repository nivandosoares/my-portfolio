// Portfolio data structure
export interface PortfolioData {
  personal: {
    name: string
    title: string
    email: string
    github: string
    linkedin: string
  }
  introduction: {
    summary: string[]
    highlights: string[]
  }
  technicalProfile: {
    languageProficiency: {
      title: string
      description: string
      data: Array<{ name: string; value: number }>
    }
    technicalDomains: {
      title: string
      description: string
      domains: Array<{ name: string; description: string }>
    }
    fullStackCapabilities: {
      title: string
      description: string
      sections: Array<{
        title: string
        skills: string[]
      }>
    }
  }
  projects: Array<{
    title: string
    description: string
    technologies: string[]
    role: string
    impact: string
    githubUrl: string
    liveUrl?: string
    categories: string[]
  }>
  contributions: Array<{
    title: string
    content: string
    highlights?: {
      title: string
      items: Array<{
        name: string
        description: string
        link?: {
          text: string
          url: string
        }
      }>
    }
    sections?: Array<{
      title: string
      description: string
      items: string[]
    }>
  }>
  contact: {
    title: string
    professionalInquiries: {
      title: string
    }
    collaborationInterests: {
      title: string
      description: string
      areas: string[]
      note: string
    }
  }
  navigation: Array<{
    name: string
    href: string
  }>
}

// Default portfolio data
const portfolioData: PortfolioData = {
  personal: {
    name: "Nivando Soares",
    title: "Frontend Engineer & Full Stack Developer",
    email: "sidvandoni@gmail.com",
    github: "github.com/nivandosoares",
    linkedin: "linkedin.com/in/nivandosoares",
  },
  introduction: {
    summary: [
      "Experienced frontend engineer and full-stack developer with a proven track record of building responsive web applications and scalable enterprise software solutions across diverse platforms.",
      "Proficient in 12 programming languages with 36+ public repositories, I bring a holistic approach to software development, emphasizing clean code, performance optimization, and innovative problem-solving. Notable projects include the Colaborar A+ Chrome Extension, which streamlines workflows for UNOPAR students, and low-level programming endeavors like MyOS (a custom operating system in C) and a CHIP-8 Emulator, showcasing my passion for systems programming and computer architecture."
    ],
    highlights: ["Colaborar A+ Chrome Extension", "MyOS", "CHIP-8 Emulator"],
  },
  technicalProfile: {
    languageProficiency: {
      title: "Language Proficiency",
      description: "Languages across different domains",
      data: [
        { name: "JavaScript", value: 13 },
        { name: "CSS", value: 4 },
        { name: "TypeScript", value: 4 },
        { name: "HTML", value: 3 },
        { name: "C/C++", value: 3 },
        { name: "Python", value: 2 },
        { name: "Java", value: 2 },
        { name: "C#", value: 1 },
      ],
    },
    technicalDomains: {
      title: "Technical Domains",
      description: "Areas of expertise and experience",
      domains: [
        { name: "Web Development", description: "Frontend and backend" },
        { name: "Systems Programming", description: "OS development, emulation" },
        { name: "Mobile Development", description: "Flutter, cross-platform, Java" },
        { name: "Desktop Applications", description: "C#, Java applications" },
        { name: "Automation", description: "Scripting, bots, workflow tools" },
      ],
    },
    fullStackCapabilities: {
      title: "Full-Stack Capabilities",
      description: "End-to-end development expertise",
      sections: [
        {
          title: "Frontend",
          skills: [
            "React, Next.js",
            "HTML5, CSS3",
            "JavaScript, TypeScript",
            "Responsive Design",
            "UI/UX Implementation",
          ],
        },
        {
          title: "Backend",
          skills: ["Node.js, Express", "RESTful APIs", "MongoDB, MySQL", "Authentication", "Server-side Rendering"],
        },
        {
          title: "Other Domains",
          skills: ["Systems Programming", "Mobile Development", "Desktop Applications", "Automation & Scripting"],
        },
      ],
    },
  },
  projects: [
    {
      title: "Colaborar A+ - UNOPAR Chrome Extension",
      description:
        "A Chrome extension designed to help UNOPAR students easily retrieve activities from the educational platform. Available on the Chrome Web Store.",
      technologies: ["JavaScript", "Chrome Extensions API", "Google Analytics", "Web Development"],
      role: "Chrome Extension Developer",
      impact:
        "Streamlines the process of retrieving educational activities, saving students time and improving their workflow. Tracks user engagement and feedback for continuous improvement.",
      githubUrl: "https://github.com/nivandosoares/unopar-chrome-extension",
      liveUrl:
        "https://chromewebstore.google.com/detail/colaborar-a+/aigpjgbdkakibodbblbjfnnbgaajkbpn?authuser=0&hl=pt-BR&pli=1",
      categories: ["all", "web"],
    },
    {
      title: "README Generator",
      description:
        "A Next.js application that helps developers generate comprehensive README files based on repository content. Features a clean UI with real-time preview and customizable templates.",
      technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Tranformers JS"],
      role: "Full Stack Developer",
      impact:
        "Streamlines documentation process, saving developers hours of work. Generates professional README files with consistent structure and formatting.",
      githubUrl: "https://github.com/nivandosoares/readme_generator",
      liveUrl: "https://readme-generator-red.vercel.app",
      categories: ["all", "web"],
    },
    {
      title: "PDF Analysis Dashboard",
      description:
        "A comprehensive C# application for analyzing and managing PDF documents. Features document statistics, content extraction, and batch processing capabilities with a modern UI.",
      technologies: ["C#", ".NET", "WPF", "PDF Processing", "Desktop Development"],
      role: "Desktop Application Developer",
      impact: "The project will provide powerful document analysis tools for business users.",
      githubUrl: "https://github.com/nivandosoares/PdfAnalysisApp",
      liveUrl: "#",
      categories: ["all", "desktop"],
    },
    {
      title: "MyOS",
      description:
        "A simple operating system developed from scratch in C. Implements basic kernel functionality, memory management, device drivers, and a simple shell interface.",
      technologies: ["C", "Assembly", "Operating Systems", "Low-level Programming"],
      role: "Systems Programmer",
      impact:
        "Demonstrates deep understanding of computer architecture and operating system principles. Educational project showcasing low-level system design and implementation.",
      githubUrl: "https://github.com/nivandosoares/myOS",
      liveUrl: "#",
      categories: ["all", "systems"],
    },
    {
      title: "Free ROMs - CRUD Application",
      description:
        "A complete CRUD application for classic game ROMs built with Node.js, Express, and MongoDB. Features user authentication, file uploads, and a responsive interface.",
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
      role: "Full Stack Developer",
      impact:
        "Provides a platform for preserving classic games with over 100 ROMs cataloged. Implements RESTful API design patterns and MVC architecture.",
      githubUrl: "https://github.com/nivandosoares/free-roms",
      liveUrl: "https://nodegames.onrender.com/",
      categories: ["all", "web"],
    },
    {
      title: "CHIP-8 Emulator - forked",
      description:
        "An implementation of the CHIP-8 virtual machine in C with SDL2. Features accurate emulation of the original system, custom debugging tools, and a modern interface.",
      technologies: ["C", "SDL2", "Emulation", "Computer Architecture"],
      role: "Systems Developer",
      impact:
        "Contributed by successfull implementing Save/Load state to the emulator",
        githubUrl: "https://github.com/nivandosoares/chip8_emulator_c",
      liveUrl: "#",
      categories: ["all", "systems"],
    },
    {
      title: "Flutter News App",
      description:
        "A cross-platform mobile application for news aggregation and reading. Features category filtering, bookmarking, and offline reading capabilities with a clean, intuitive interface.",
      technologies: ["Dart", "Flutter", "REST API", "Mobile Development", "Java"],
      role: "Mobile Developer",
      impact:
        "Provides a seamless news reading experience across different devices. Implements efficient state management and responsive UI design principles.",
      githubUrl: "https://github.com/nivandosoares/Flutter-NewsApp",
      liveUrl: "#",
      categories: ["all", "mobile"],
    },
    {
      title: "CaTinder",
      description:
        "A Tinder-like interface populated with cat images from the Cat API. Features swipe interactions, responsive design, and dynamic content loading.",
      technologies: ["HTML", "CSS", "JavaScript", "REST API", "Responsive Design"],
      role: "Frontend Developer",
      impact:
        "Demonstrates advanced CSS animations and JavaScript DOM manipulation. Implements efficient API integration with pagination and error handling.",
      githubUrl: "https://github.com/nivandosoares/caTinder",
      liveUrl: "https://catinder.vercel.app",
      categories: ["all", "web"],
    },
    {
      title: "COVID-19 Deaths Graph",
      description:
        "A tracking tool for COVID-19 deaths globally. Features interactive charts, country filtering, and time-series analysis.",
      technologies: ["JavaScript", "Chart.js", "REST API", "Frontend Development"],
      role: "Frontend Developer",
      impact:
        "Provides clear presentation of pandemic data for public awareness. Implements responsive design principles for cross-device compatibility.",
      githubUrl: "https://github.com/nivandosoares/covid19-deaths-graph",
      liveUrl: "https://covid19-deaths-graph.vercel.app",
      categories: ["all", "web"],
    },
    {
      title: "Blue Sky Automated Bot",
      description:
        "An automated Python bot that posts content periodically on the Blue Sky social network. Features scheduled posting, content generation, and error handling.",
      technologies: ["Python", "REST API", "Automation", "Social Media Integration"],
      role: "Backend Developer",
      impact:
        "Demonstrates API integration with social platforms and automated content delivery. Implements efficient scheduling and error handling mechanisms.",
      githubUrl: "https://github.com/nivandosoares/blue-sky-automated-quote-bot",
      liveUrl: "#",
      categories: ["all", "systems"],
    },
    {
      title: "REST API",
      description:
        "A RESTful API built with Node.js, Express, and MySQL. Features CRUD operations, authentication, and comprehensive documentation.",
      technologies: ["JavaScript", "Node.js", "Express.js", "MySQL", "JWT"],
      role: "Backend Developer",
      impact:
        "Provides a solid foundation for web applications with secure authentication. Implements best practices for API design and documentation.",
      githubUrl: "https://github.com/nivandosoares/rest-api",
      liveUrl: "https://restapi0.herokuapp.com/",
      categories: ["all", "web"],
    },
    {
      title: "Cinema Reservation System",
      description:
        "A Mobile application for managing cinema seat reservations and scheduling. Features a user-friendly interface and comprehensive reporting.",
      technologies: ["Java", "Mobile Development", "UX/UI design"],
      role: "Mobile Application Developer",
      impact:
        "Streamlines cinema management operations with an intuitive interface. Implements efficient database operations and business logic for cinema operations.",
      githubUrl: "https://github.com/nivandosoares/cinema",
      liveUrl: "#",
      categories: ["all", "mobile"],
    },
    {
      title: "Bundesapp",
      description:
        "A Flutter application for fetching and displaying data from REST APIs. Features a clean UI, data caching, and responsive design for different screen sizes.",
      technologies: ["Dart", "Flutter", "REST API", "Mobile Development"],
      role: "Mobile Developer",
      impact:
        "Demonstrates mobile UI design principles and efficient state management. Implements best practices for API integration and error handling in mobile applications.",
      githubUrl: "https://github.com/nivandosoares/bundesappv2",
      liveUrl: "#",
      categories: ["all", "mobile"],
    },
    {
      title: "Linux Essentials",
      description:
        "A collection of Bash scripts for Linux system administration and automation. Features system monitoring, backup solutions, and security hardening.",
      technologies: ["Bash", "Shell Scripting", "Linux", "System Administration"],
      role: "System Administrator",
      impact:
        "Provides practical solutions for common Linux administration tasks. Implements best practices for system security and performance optimization.",
      githubUrl: "https://github.com/nivandosoares/linux_essentials",
      liveUrl: "#",
      categories: ["all", "systems"],
    },
  ],
  contributions: [
    {
      title: "Systems & Low-Level Programming",
      content:
        "My work in systems programming demonstrates a deep understanding of computer architecture and low-level operations, with projects spanning operating system development, emulation, and system utilities.",
      highlights: {
        title: "Key Projects & Contributions:",
        items: [
          {
            name: "MyOS",
            description:
              "A simple operating system written from scratch in C, implementing basic kernel functionality, memory management, and a simple shell. This project demonstrates my understanding of operating system principles and low-level programming.",
          },
          {
            name: "CHIP-8 Emulator",
            description:
              "A forked implementation of the CHIP-8 virtual machine in C with SDL2, showcasing my ability to contribute in low-level programs and open source.",
            link: {
              text: "original source",
              url: "https://github.com/queso-fuego/chip8_emulator_c",
            },
          },
          {
            name: "Linux Essentials",
            description:
              "A collection of Bash scripts for system administration and automation, highlighting my practical knowledge of Linux systems and shell scripting.",
          },
        ],
      },
    },
    {
      title: "Full-Stack Web Development",
      content:
        "My web development experience spans the entire stack, from frontend user interfaces to backend services and databases, with a focus on creating responsive, accessible, and performant web applications.",
      sections: [
        {
          title: "Frontend Development",
          description:
            "I specialize in creating responsive, accessible web interfaces using modern JavaScript frameworks and CSS techniques. My projects demonstrate proficiency in:",
          items: [
            "React and Next.js for component-based UI development",
            "TypeScript for type-safe JavaScript development",
            "Advanced CSS techniques for responsive and animated interfaces",
            "Accessibility best practices for inclusive web experiences",
            "Performance optimization for fast-loading web applications",
          ],
        },
        {
          title: "Backend Development",
          description:
            "I've built robust server-side applications using various technologies and approaches, with expertise in:",
          items: [
            "Node.js and Express for API development",
            "MongoDB and MySQL for database design and management",
            "RESTful API design and implementation",
            "Authentication and authorization systems",
            "Server-side rendering and API integration",
          ],
        },
      ],
    },
    {
      title: "Cross-Platform & Desktop Development",
      content:
        "Beyond web development, I've worked on mobile and desktop applications using various frameworks and languages, demonstrating versatility across different platforms and environments.",
      sections: [
        {
          title: "Mobile Development",
          description: "I've built cross-platform mobile applications using Java and Flutter, focusing on:",
          items: [
            "Responsive UI design for different screen sizes",
            "Efficient state management and data handling",
            "API integration and offline capabilities",
            "Performance optimization for mobile devices",
          ],
        },
        {
          title: "Desktop Applications",
          description: "I've developed desktop applications using C# and Java, with experience in:",
          items: [
            "C# and .NET for Windows applications",
            "Java for cross-platform desktop software",
            "UI design for desktop environments",
            "Integration with system resources and services",
          ],
        },
      ],
    },
  ],
  contact: {
    title: "Contact Information",
    professionalInquiries: {
      title: "Professional Inquiries",
    },
    collaborationInterests: {
      title: "Collaboration Interests",
      description: "I'm open to collaboration in the following areas:",
      areas: [
        "Web Application Development",
        "Systems Programming",
        "Open Source Contributions",
        "Technical Writing and Documentation",
      ],
      note: 'Please include "Collaboration" in the subject line when contacting for project opportunities.',
    },
  },
  navigation: [
    { name: "Introduction", href: "#introduction" },
    { name: "Technical Profile", href: "#technical-profile" },
    { name: "Projects", href: "#projects" },
    { name: "Contributions", href: "#contributions" },
    { name: "Contact", href: "#contact" },
  ],
}

export default portfolioData

