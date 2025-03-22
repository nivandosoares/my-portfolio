"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import TechnicalSkillChart from "@/components/technical-skill-chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PdfButton from "@/components/pdf-button"
import portfolioData, { type PortfolioData } from "@/lib/portfolio-data"

export default function Home() {
  const [data, setData] = useState<PortfolioData>(portfolioData)

  // This effect could be used to fetch data from an API if needed
  useEffect(() => {
    // You could fetch data from an API here
    // For now, we're using the imported data
    setData(portfolioData)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            {data.personal.name}
          </Link>
          <nav className="hidden md:flex gap-8">
            {data.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href={`https://${data.personal.github}`} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <PdfButton portfolioData={data} />
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section id="introduction" className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">{data.personal.name}</h1>
            <h2 className="text-2xl text-muted-foreground">{data.personal.title}</h2>
            <div className="prose dark:prose-invert max-w-none">
              {data.introduction.summary.map((paragraph, index) => (
                <p key={index}>
                  {paragraph.includes(data.introduction.highlights[0]) ? (
                    <>
                      {paragraph.split(data.introduction.highlights[0])[0]}
                      <strong>{data.introduction.highlights[0]}</strong>
                      {paragraph.split(data.introduction.highlights[0])[1].split(data.introduction.highlights[1])[0]}
                      <strong>{data.introduction.highlights[1]}</strong>
                      {paragraph.split(data.introduction.highlights[1])[1].split(data.introduction.highlights[2])[0]}
                      <strong>{data.introduction.highlights[2]}</strong>
                      {paragraph.split(data.introduction.highlights[2])[1]}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
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
                <CardTitle>{data.technicalProfile.languageProficiency.title}</CardTitle>
                <CardDescription>{data.technicalProfile.languageProficiency.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <TechnicalSkillChart data={data.technicalProfile.languageProficiency.data} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{data.technicalProfile.technicalDomains.title}</CardTitle>
                <CardDescription>{data.technicalProfile.technicalDomains.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc pl-5">
                  {data.technicalProfile.technicalDomains.domains.map((domain, index) => (
                    <li key={index}>
                      <strong>{domain.name}</strong> - {domain.description}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>{data.technicalProfile.fullStackCapabilities.title}</CardTitle>
                <CardDescription>{data.technicalProfile.fullStackCapabilities.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {data.technicalProfile.fullStackCapabilities.sections.map((section, index) => (
                    <div key={index} className="bg-background p-4 rounded-lg border">
                      <div className="text-sm text-muted-foreground mb-1">{section.title}</div>
                      <ul className="list-disc pl-5 text-sm">
                        {section.skills.map((skill, skillIndex) => (
                          <li key={skillIndex}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
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

            {["all", "web", "systems", "mobile", "desktop"].map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 gap-6">
                  {data.projects
                    .filter((project) => project.categories.includes(category))
                    .map((project, index) => (
                      <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        role={project.role}
                        impact={project.impact}
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Contributions Section */}
      <section id="contributions" className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Technical Expertise & Contributions</h2>

          <div className="space-y-8">
            {data.contributions.map((contribution, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{contribution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>{contribution.content}</p>

                    {contribution.highlights && (
                      <>
                        <h3>{contribution.highlights.title}</h3>
                        <ul>
                          {contribution.highlights.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <strong>{item.name}</strong> - {item.description}
                              {item.link && (
                                <>
                                  {" "}
                                  (Forked from <a href={item.link.url}>{item.link.text}</a>)
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {contribution.sections &&
                      contribution.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h3>{section.title}</h3>
                          <p>{section.description}</p>
                          <ul>
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">{data.contact.title}</h2>

          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{data.contact.professionalInquiries.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href={`mailto:${data.personal.email}`} className="hover:text-primary transition-colors">
                        {data.personal.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-5 w-5 text-primary" />
                      <a
                        href={`https://${data.personal.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {data.personal.github}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <a
                        href={`https://${data.personal.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {data.personal.linkedin}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{data.contact.collaborationInterests.title}</h3>
                  <p className="text-muted-foreground">{data.contact.collaborationInterests.description}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {data.contact.collaborationInterests.areas.map((area, index) => (
                      <li key={index}>{area}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground">{data.contact.collaborationInterests.note}</p>
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
              © {new Date().getFullYear()} {data.personal.name}. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon" asChild>
                <Link href={`https://${data.personal.github}`} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={`https://${data.personal.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={`mailto:${data.personal.email}`}>
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

