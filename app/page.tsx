import { Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import TechnicalSkillChart from "@/components/technical-skill-chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Nivando Soares
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#introduction" className="text-sm font-medium hover:text-primary transition-colors">
              Introduction
            </Link>
            <Link href="#technical-profile" className="text-sm font-medium hover:text-primary transition-colors">
              Technical Profile
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contributions" className="text-sm font-medium hover:text-primary transition-colors">
              Contributions
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/nivandosoares" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FileText className="h-5 w-5" />
                <span className="sr-only">CV</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section id="introduction" className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">Nivando Soares</h1>
            <h2 className="text-2xl text-muted-foreground">Frontend Engineer & Full Stack Developer</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Active developer with expertise in frontend engineering and full-stack development, specializing in
                creating responsive web applications, building machine learning models, and developing enterprise
                software solutions.
              </p>
              <p>
                With a diverse technical portfolio spanning 12 programming languages and 36 public repositories, I bring
                a comprehensive approach to software development, focusing on clean code, performance optimization, and
                innovative problem-solving.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Profile Section */}
      <section id="technical-profile" className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Technical Profile</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Language Proficiency</CardTitle>
                <CardDescription>Languages across different domains</CardDescription>
              </CardHeader>
              <CardContent>
                <TechnicalSkillChart
                  data={[
                    { name: "JavaScript", value: 13 },
                    { name: "CSS", value: 4 },
                    { name: "TypeScript", value: 4 },
                    { name: "HTML", value: 3 },
                    { name: "C/C++", value: 3 },
                    { name: "Python", value: 2 },
                    { name: "Java", value: 2 },
                    { name: "C#", value: 1 },
                  ]}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Domains</CardTitle>
                <CardDescription>Areas of expertise and experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    <strong>Web Development</strong> - Frontend and backend
                  </li>
                  <li>
                    <strong>Systems Programming</strong> - OS development, emulation
                  </li>
                  <li>
                    <strong>Mobile Development</strong> - Flutter, cross-platform, Java
                  </li>
                  <li>
                    <strong>Data Visualization</strong> - Interactive charts, analytics
                  </li>
                  <li>
                    <strong>Desktop Applications</strong> - C#, Java applications
                  </li>
                  <li>
                    <strong>Automation</strong> - Scripting, bots, workflow tools
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Full-Stack Capabilities</CardTitle>
                <CardDescription>End-to-end development expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-background p-4 rounded-lg border">
                    <div className="text-sm text-muted-foreground mb-1">Frontend</div>
                    <ul className="list-disc pl-5 text-sm">
                      <li>React, Next.js</li>
                      <li>HTML5, CSS3</li>
                      <li>JavaScript, TypeScript</li>
                      <li>Responsive Design</li>
                      <li>UI/UX Implementation</li>
                    </ul>
                  </div>
                  <div className="bg-background p-4 rounded-lg border">
                    <div className="text-sm text-muted-foreground mb-1">Backend</div>
                    <ul className="list-disc pl-5 text-sm">
                      <li>Node.js, Express</li>
                      <li>RESTful APIs</li>
                      <li>MongoDB, MySQL</li>
                      <li>Authentication</li>
                      <li>Server-side Rendering</li>
                    </ul>
                  </div>
                  <div className="bg-background p-4 rounded-lg border">
                    <div className="text-sm text-muted-foreground mb-1">Other Domains</div>
                    <ul className="list-disc pl-5 text-sm">
                      <li>Systems Programming</li>
                      <li>Mobile Development</li>
                      <li>Desktop Applications</li>
                      <li>Automation & Scripting</li>
                      <li>Data Visualization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Research & Projects</h2>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="systems">Systems</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="desktop">Desktop</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 gap-6">
                <ProjectCard
                  title="README Generator"
                  description="A Next.js application that helps developers generate comprehensive README files based on repository content. Features a clean UI with real-time preview and customizable templates."
                  technologies={["TypeScript", "Next.js", "React", "Tailwind CSS", "OpenAI API"]}
                  role="Full Stack Developer"
                  impact="Streamlines documentation process, saving developers hours of work. Generates professional README files with consistent structure and formatting."
                  githubUrl="https://github.com/nivandosoares/readme_generator"
                  liveUrl="https://readme-generator-red.vercel.app"
                />

                <ProjectCard
                  title="PDF Analysis Dashboard"
                  description="A comprehensive C# application for analyzing and managing PDF documents. Features document statistics, content extraction, and batch processing capabilities with a modern UI."
                  technologies={["C#", ".NET", "WPF", "PDF Processing", "Data Visualization"]}
                  role="Desktop Application Developer"
                  impact="The project will provide powerful document analysis tools for business users."
                  githubUrl="https://github.com/nivandosoares/PdfAnalysisApp"
                  liveUrl="#"
                />

                <ProjectCard
                  title="MyOS"
                  description="A simple operating system developed from scratch in C. Implements basic kernel functionality, memory management, device drivers, and a simple shell interface."
                  technologies={["C", "Assembly", "Operating Systems", "Low-level Programming"]}
                  role="Systems Programmer"
                  impact="Demonstrates deep understanding of computer architecture and operating system principles. Educational project showcasing low-level system design and implementation."
                  githubUrl="https://github.com/nivandosoares/myOS"
                  liveUrl="#"
                />

                <ProjectCard
                  title="Free ROMs - CRUD Application"
                  description="A complete CRUD application for classic game ROMs built with Node.js, Express, and MongoDB. Features user authentication, file uploads, and a responsive interface."
                  technologies={["JavaScript", "Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"]}
                  role="Full Stack Developer"
                  impact="Provides a platform for preserving classic games with over 100 ROMs cataloged. Implements RESTful API design patterns and MVC architecture."
                  githubUrl="https://github.com/nivandosoares/free-roms"
                  liveUrl="https://nodegames.onrender.com/"
                />

                <ProjectCard
                  title="CHIP-8 Emulator"
                  description="An implementation of the CHIP-8 virtual machine in C with SDL2. Features accurate emulation of the original system, custom debugging tools, and a modern interface."
                  technologies={["C", "SDL2", "Emulation", "Computer Architecture"]}
                  role="Systems Developer"
                  impact="Demonstrates understanding of emulation techniques and computer architecture. Educational project showcasing low-level programming and hardware abstraction."
                  githubUrl="https://github.com/nivandosoares/chip8_emulator_c"
                  liveUrl="#"
                />

                <ProjectCard
                  title="Flutter News App"
                  description="A cross-platform mobile application for news aggregation and reading. Features category filtering, bookmarking, and offline reading capabilities with a clean, intuitive interface."
                  technologies={["Dart", "Flutter", "REST API", "Mobile Development", "Java"]}
                  role="Mobile Developer"
                  impact="Provides a seamless news reading experience across different devices. Implements efficient state management and responsive UI design principles."
                  githubUrl="https://github.com/nivandosoares/Flutter-NewsApp"
                  liveUrl="#"
                />

                <ProjectCard
                  title="CaTinder"
                  description="A Tinder-like interface populated with cat images from the Cat API. Features swipe interactions, responsive design, and dynamic content loading."
                  technologies={["HTML", "CSS", "JavaScript", "REST API", "Responsive Design"]}
                  role="Frontend Developer"
                  impact="Demonstrates advanced CSS animations and JavaScript DOM manipulation. Implements efficient API integration with pagination and error handling."
                  githubUrl="https://github.com/nivandosoares/caTinder"
                  liveUrl="https://catinder.vercel.app"
                />

                <ProjectCard
                  title="COVID-19 Deaths Graph"
                  description="A data visualization tool for tracking COVID-19 deaths globally. Features interactive charts, country filtering, and time-series analysis."
                  technologies={["JavaScript", "Chart.js", "REST API", "Data Visualization"]}
                  role="Frontend Developer"
                  impact="Provides clear visualization of pandemic data for public awareness. Implements responsive design principles for cross-device compatibility."
                  githubUrl="https://github.com/nivandosoares/covid19-deaths-graph"
                  liveUrl="https://covid19-deaths-graph.vercel.app"
                />

                <ProjectCard
                  title="Blue Sky Automated Bot"
                  description="An automated Python bot that posts content periodically on the Blue Sky social network. Features scheduled posting, content generation, and error handling."
                  technologies={["Python", "REST API", "Automation", "Social Media Integration"]}
                  role="Backend Developer"
                  impact="Demonstrates API integration with social platforms and automated content delivery. Implements efficient scheduling and error handling mechanisms."
                  githubUrl="https://github.com/nivandosoares/blue-sky-automated-quote-bot"
                  liveUrl="#"
                />

                <ProjectCard
                  title="REST API"
                  description="A RESTful API built with Node.js, Express, and MySQL. Features CRUD operations, authentication, and comprehensive documentation."
                  technologies={["JavaScript", "Node.js", "Express.js", "MySQL", "JWT"]}
                  role="Backend Developer"
                  impact="Provides a solid foundation for web applications with secure authentication. Implements best practices for API design and documentation."
                  githubUrl="https://github.com/nivandosoares/rest-api"
                  liveUrl="https://restapi0.herokuapp.com/"
                />
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-6">
              <div className="grid grid-cols-1 gap-6">
                <ProjectCard
                  title="README Generator"
                  description="A Next.js application that helps developers generate comprehensive README files based on repository content. Features a clean UI with real-time preview and customizable templates."
                  technologies={["TypeScript", "Next.js", "React", "Tailwind CSS", "OpenAI API"]}
                  role="Full Stack Developer"
                  impact="Streamlines documentation process, saving developers hours of work. Generates professional README files with consistent structure and formatting."
                  githubUrl="https://github.com/nivandosoares/readme_generator"
                  liveUrl="https://readme-generator-red.vercel.app"
                />

                <ProjectCard
                  title="Free ROMs - CRUD Application"
                  description="A complete CRUD application for classic game ROMs built with Node.js, Express, and MongoDB. Features user authentication, file uploads, and a responsive interface."
                  technologies={["JavaScript", "Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"]}
                  role="Full Stack Developer"
                  impact="Provides a platform for preserving classic games with over 100 ROMs cataloged. Implements RESTful API design patterns and MVC architecture."
                  githubUrl="https://github.com/nivandosoares/free-roms"
                  liveUrl="https://nodegames.onrender.com/"
                />

                <ProjectCard
                  title="CaTinder"
                  description="A Tinder-like interface populated with cat images from the Cat API. Features swipe interactions, responsive design, and dynamic content loading."
                  technologies={["HTML", "CSS", "JavaScript", "REST API", "Responsive Design"]}
                  role="Frontend Developer"
                  impact="Demonstrates advanced CSS animations and JavaScript DOM manipulation. Implements efficient API integration with pagination and error handling."
                  githubUrl="https://github.com/nivandosoares/caTinder"
                  liveUrl="https://catinder.vercel.app"
                />

                <ProjectCard
                  title="COVID-19 Deaths Graph"
                  description="A data visualization tool for tracking COVID-19 deaths globally. Features interactive charts, country filtering, and time-series analysis."
                  technologies={["JavaScript", "Chart.js", "REST API", "Data Visualization"]}
                  role="Frontend Developer"
                  impact="Provides clear visualization of pandemic data for public awareness. Implements responsive design principles for cross-device compatibility."
                  githubUrl="https://github.com/nivandosoares/covid19-deaths-graph"
                  liveUrl="https://covid19-deaths-graph.vercel.app"
                />

                <ProjectCard
                  title="REST API"
                  description="A RESTful API built with Node.js, Express, and MySQL. Features CRUD operations, authentication, and comprehensive documentation."
                  technologies={["JavaScript", "Node.js", "Express.js", "MySQL", "JWT"]}
                  role="Backend Developer"
                  impact="Provides a solid foundation for web applications with secure authentication. Implements best practices for API design and documentation."
                  githubUrl="https://github.com/nivandosoares/rest-api"
                  liveUrl="https://restapi0.herokuapp.com/"
                />
              </div>
            </TabsContent>

            <TabsContent value="systems" className="mt-6">
              <div className="grid grid-cols-1 gap-6">
                <ProjectCard
                  title="MyOS"
                  description="A simple operating system developed from scratch in C. Implements basic kernel functionality, memory management, device drivers, and a simple shell interface."
                  technologies={["C", "Assembly", "Operating Systems", "Low-level Programming"]}
                  role="Systems Programmer"
                  impact="Demonstrates deep understanding of computer architecture and operating system principles. Educational project showcasing low-level system design and implementation."
                  githubUrl="https://github.com/nivandosoares/myOS"
                  liveUrl="#"
                />

                <ProjectCard
                  title="CHIP-8 Emulator"
                  description="An implementation of the CHIP-8 virtual machine in C with SDL2. Features accurate emulation of the original system, custom debugging tools, and a modern interface."
                  technologies={["C", "SDL2", "Emulation", "Computer Architecture"]}
                  role="Systems Developer"
                  impact="Demonstrates understanding of emulation techniques and computer architecture. Educational project showcasing low-level programming and hardware abstraction."
                  githubUrl="https://github.com/nivandosoares/chip8_emulator_c"
                  liveUrl="#"
                />

                <ProjectCard
                  title="Linux Essentials"
                  description="A collection of Bash scripts for Linux system administration and automation. Features system monitoring, backup solutions, and security hardening."
                  technologies={["Bash", "Shell Scripting", "Linux", "System Administration"]}
                  role="System Administrator"
                  impact="Provides practical solutions for common Linux administration tasks. Implements best practices for system security and performance optimization."
                  githubUrl="https://github.com/nivandosoares/linux_essentials"
                  liveUrl="#"
                />

                <ProjectCard
                  title="Blue Sky Automated Bot"
                  description="An automated Python bot that posts content periodically on the Blue Sky social network. Features scheduled posting, content generation, and error handling."
                  technologies={["Python", "REST API", "Automation", "Social Media Integration"]}
                  role="Backend Developer"
                  impact="Demonstrates API integration with social platforms and automated content delivery. Implements efficient scheduling and error handling mechanisms."
                  githubUrl="https://github.com/nivandosoares/blue-sky-automated-quote-bot"
                  liveUrl="#"
                />
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-6">
              <div className="grid grid-cols-1 gap-6">
              <ProjectCard
                  title="Cinema Reservation System"
                  description="A Mobile application for managing cinema seat reservations and scheduling. Features a user-friendly interface and comprehensive reporting."
                  technologies={["Java", "Swing", "JDBC", "SQL", "Desktop Development"]}
                  role="Mobile Application Developer"
                  impact="Streamlines cinema management operations with an intuitive interface. Implements efficient database operations and business logic for cinema operations."
                  githubUrl="https://github.com/nivandosoares/cinema"
                  liveUrl="#"
                />
                <ProjectCard
                  title="Flutter News App"
                  description="A cross-platform mobile application for news aggregation and reading. Features category filtering, bookmarking, and offline reading capabilities with a clean, intuitive interface."
                  technologies={["Dart", "Flutter", "REST API", "Mobile Development", "Java"]}
                  role="Mobile Developer"
                  impact="Provides a seamless news reading experience across different devices. Implements efficient state management and responsive UI design principles."
                  githubUrl="https://github.com/nivandosoares/Flutter-NewsApp"
                  liveUrl="#"
                />

                <ProjectCard
                  title="Bundesapp"
                  description="A Flutter application for fetching and displaying data from REST APIs. Features a clean UI, data caching, and responsive design for different screen sizes."
                  technologies={["Dart", "Flutter", "REST API", "Mobile Development"]}
                  role="Mobile Developer"
                  impact="Demonstrates mobile UI design principles and efficient state management. Implements best practices for API integration and error handling in mobile applications."
                  githubUrl="https://github.com/nivandosoares/bundesappv2"
                  liveUrl="#"
                />
              </div>
            </TabsContent>

            <TabsContent value="desktop" className="mt-6">
              <div className="grid grid-cols-1 gap-6">
                <ProjectCard
                  title="PDF Analysis Dashboard"
                  description="A comprehensive C# application for analyzing and managing PDF documents.."
                  technologies={["C#", ".NET", "WPF", "PDF Processing", "Data Visualization"]}
                  role="Desktop Application Developer"
                  impact="The project will provide a powerful document analysis tools for business users."
                  githubUrl="https://github.com/nivandosoares/PdfAnalysisApp"
                  liveUrl="#"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contributions Section */}
      <section id="contributions" className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Technical Expertise & Contributions</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Systems & Low-Level Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    My work in systems programming demonstrates a deep understanding of computer architecture and
                    low-level operations, with projects spanning operating system development, emulation, and system
                    utilities.
                  </p>

                  <h3>Key Projects & Contributions:</h3>
                  <ul>
                    <li>
                      <strong>MyOS</strong> - A simple operating system written from scratch in C, implementing basic
                      kernel functionality, memory management, and a simple shell. This project demonstrates my
                      understanding of operating system principles and low-level programming.
                    </li>
                    <li>
                      <strong>CHIP-8 Emulator (Forked from <a href="https://github.com/queso-fuego/chip8_emulator_c">original source</a> )</strong> - An implementation of the CHIP-8 virtual machine in C with SDL2,
                      showcasing my ability to understand and emulate computer architectures at a fundamental level.
                    </li>
                    <li>
                      <strong>Linux Essentials</strong> - A collection of Bash scripts for system administration and
                      automation, highlighting my practical knowledge of Linux systems and shell scripting.
                    </li>
                  </ul>

                  <p>
                    These projects reflect my interest in understanding computing systems at their most fundamental
                    levels, from hardware interfaces to software abstractions, and my ability to work effectively with
                    low-level programming languages and concepts.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Full-Stack Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    My web development experience spans the entire stack, from frontend user interfaces to backend
                    services and databases, with a focus on creating responsive, accessible, and performant web
                    applications.
                  </p>

                  <h3>Frontend Development</h3>
                  <p>
                    I specialize in creating responsive, accessible web interfaces using modern JavaScript frameworks
                    and CSS techniques. My projects demonstrate proficiency in:
                  </p>
                  <ul>
                    <li>React and Next.js for component-based UI development</li>
                    <li>TypeScript for type-safe JavaScript development</li>
                    <li>Advanced CSS techniques for responsive and animated interfaces</li>
                    <li>Accessibility best practices for inclusive web experiences</li>
                    <li>Performance optimization for fast-loading web applications</li>
                  </ul>

                  <h3>Backend Development</h3>
                  <p>
                    I've built robust server-side applications using various technologies and approaches, with expertise
                    in:
                  </p>
                  <ul>
                    <li>Node.js and Express for API development</li>
                    <li>MongoDB and MySQL for database design and management</li>
                    <li>RESTful API design and implementation</li>
                    <li>Authentication and authorization systems</li>
                    <li>Server-side rendering and API integration</li>
                  </ul>

                  <p>
                    My full-stack projects demonstrate the ability to architect complete solutions from database design
                    to frontend implementation, with a focus on maintainability, scalability, and user experience.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cross-Platform & Desktop Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    Beyond web development, I've worked on mobile and desktop applications using various frameworks and
                    languages, demonstrating versatility across different platforms and environments.
                  </p>

                  <h3>Mobile Development</h3>
                  <p>I've built cross-platform mobile applications using Java abd Flutter, focusing on:</p>
                  <ul>
                    <li>Responsive UI design for different screen sizes</li>
                    <li>Efficient state management and data handling</li>
                    <li>API integration and offline capabilities</li>
                    <li>Performance optimization for mobile devices</li>
                  </ul>

                  <h3>Desktop Applications</h3>
                  <p>I've developed desktop applications using C# and Java, with experience in:</p>
                  <ul>
                    <li>C# and .NET for Windows applications</li>
                    <li>Java for cross-platform desktop software</li>
                    <li>UI design for desktop environments</li>
                    <li>Integration with system resources and services</li>
                  </ul>

                  <p>
                    These projects showcase my ability to adapt to different platforms and programming paradigms,
                    creating consistent user experiences across web, mobile, and desktop environments.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Professional Inquiries</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:contact@nivandosoares.dev" className="hover:text-primary transition-colors">
                        contact@nivandosoares.dev
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-5 w-5 text-primary" />
                      <a
                        href="https://github.com/nivandosoares"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        github.com/nivandosoares
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <a
                        href="https://linkedin.com/in/nivandosoares"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        linkedin.com/in/nivandosoares
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Collaboration Interests</h3>
                  <p className="text-muted-foreground">I'm open to collaboration in the following areas:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Web Application Development</li>
                    <li>Systems Programming</li>
                    <li>Open Source Contributions</li>
                    <li>Technical Writing and Documentation</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Please include "Collaboration" in the subject line when contacting for project opportunities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nivando Soares. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/nivandosoares" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/nivandosoares" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:contact@nivandosoares.dev">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

