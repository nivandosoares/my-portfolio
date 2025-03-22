"use client"

import { useState } from "react"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import type { PortfolioData } from "@/lib/portfolio-data"
import { jsPDF } from "jspdf"
import "jspdf-autotable"

interface PdfButtonProps {
  portfolioData: PortfolioData
}

export default function PdfButton({ portfolioData }: PdfButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  const handleGeneratePdf = async () => {
    try {
      setIsGenerating(true)
      toast({
        title: "Generating PDF",
        description: "Please wait while we prepare your CV...",
      })

      // Create a new PDF document
      const doc = new jsPDF()

      // Generate PDF content directly in the browser
      generatePDF(doc, portfolioData)

      // Save the PDF
      doc.save(`${portfolioData.personal.name.replace(/\s+/g, "-").toLowerCase()}-cv.pdf`)

      toast({
        title: "PDF Generated",
        description: "Your CV has been downloaded successfully.",
        variant: "success",
      })
    } catch (error) {
      console.error("Error generating PDF:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate PDF. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleGeneratePdf} disabled={isGenerating}>
      <FileText className="h-5 w-5" />
      <span className="sr-only">Download CV</span>
    </Button>
  )
}

function generatePDF(doc: jsPDF, data: PortfolioData) {
  // Set font sizes
  const titleSize = 18
  const subtitleSize = 14
  const normalSize = 10
  const smallSize = 8

  // Add header
  doc.setFontSize(titleSize)
  doc.setFont("helvetica", "bold")
  doc.text(data.personal.name, doc.internal.pageSize.getWidth() / 2, 20, { align: "center" })

  doc.setFontSize(subtitleSize)
  doc.setFont("helvetica", "normal")
  doc.text(data.personal.title, doc.internal.pageSize.getWidth() / 2, 28, { align: "center" })

  // Add contact information
  doc.setFontSize(normalSize)
  doc.text(`Email: ${data.personal.email}`, doc.internal.pageSize.getWidth() / 2, 38, { align: "center" })
  doc.text(`GitHub: ${data.personal.github}`, doc.internal.pageSize.getWidth() / 2, 44, { align: "center" })
  doc.text(`LinkedIn: ${data.personal.linkedin}`, doc.internal.pageSize.getWidth() / 2, 50, { align: "center" })

  // Professional Summary
  addSection(doc, "Professional Summary", 60)
  const summaryText = data.introduction.summary.join(" ")
  const splitSummary = doc.splitTextToSize(summaryText, 170)
  doc.setFontSize(normalSize)
  doc.setFont("helvetica", "normal")
  doc.text(splitSummary, 20, 70)

  // Professional Experience
  let yPos = 70 + splitSummary.length * 7
  yPos = addSection(doc, "Professional Experience", yPos)

  // Get projects that can serve as experience
  const experienceProjects = data.projects.slice(0, 4)

  // Experience entries from projects
  experienceProjects.forEach((project, index) => {
    if (yPos > 250) {
      doc.addPage()
      yPos = 20
    }

    doc.setFontSize(subtitleSize - 2)
    doc.setFont("helvetica", "bold")
    doc.text(project.role, 20, yPos)
    yPos += 6

    doc.setFontSize(normalSize)
    doc.setFont("helvetica", "italic")
    doc.text(project.title, 20, yPos)
    doc.setFont("helvetica", "normal")
    doc.text("2022 - Present", 170, yPos, { align: "right" })
    yPos += 8

    // Project description
    const responsibilities = project.description.split(". ").filter(Boolean)
    responsibilities.forEach((resp) => {
      const bulletText = `• ${resp}`
      const splitBullet = doc.splitTextToSize(bulletText, 160)
      doc.text(splitBullet, 25, yPos)
      yPos += splitBullet.length * 6
    })

    yPos += 5
  })

  // Add a new page for skills and education
  doc.addPage()
  yPos = 20

  // Technical Skills
  yPos = addSection(doc, "Technical Skills", yPos)

  // Frontend
  doc.setFontSize(subtitleSize - 2)
  doc.setFont("helvetica", "bold")
  doc.text("Frontend Development", 20, yPos)
  yPos += 8

  doc.setFontSize(normalSize)
  doc.setFont("helvetica", "normal")
  data.technicalProfile.fullStackCapabilities.sections[0].skills.forEach((skill) => {
    doc.text(`• ${skill}`, 25, yPos)
    yPos += 6
  })
  yPos += 5

  // Backend
  doc.setFontSize(subtitleSize - 2)
  doc.setFont("helvetica", "bold")
  doc.text("Backend Development", 20, yPos)
  yPos += 8

  doc.setFontSize(normalSize)
  doc.setFont("helvetica", "normal")
  data.technicalProfile.fullStackCapabilities.sections[1].skills.forEach((skill) => {
    doc.text(`• ${skill}`, 25, yPos)
    yPos += 6
  })
  yPos += 5

  // Other Skills
  doc.setFontSize(subtitleSize - 2)
  doc.setFont("helvetica", "bold")
  doc.text("Other Technical Domains", 20, yPos)
  yPos += 8

  doc.setFontSize(normalSize)
  doc.setFont("helvetica", "normal")
  data.technicalProfile.fullStackCapabilities.sections[2].skills.forEach((skill) => {
    doc.text(`• ${skill}`, 25, yPos)
    yPos += 6
  })
  yPos += 10

  // Education
  yPos = addSection(doc, "Education", yPos)

  // Education entries (hardcoded for now)
  addEducation(
    doc,
    "UNOPAR (Universidade Norte do Paraná)",
    "Technologist - Development and System Analysis",
    "Current",
    "Pursuing the degree",
    yPos,
  )
  yPos += 20

  addEducation(
    doc,
    "Instituto Federal de Educação, Ciência e Tecnologia da Bahia, Campus Irecê",
    "Technologist - Development and System Analysis",
    "2016-2019",
    "Incomplete",
    yPos,
  )
  yPos += 20

  addEducation(doc, "Fundação Bradesco, Irecê", "High School", "2015", "Completed", yPos)
  yPos += 20

  // Certifications
  if (yPos > 230) {
    doc.addPage()
    yPos = 20
  }

  yPos = addSection(doc, "Certifications", yPos)

  // Certification list
  const certifications = [
    { title: "NDG Linux Essentials English 0323 cga", issuer: "Cisco Network Academy", date: "2023", hours: "70H" },
    { title: "JavaScript Basic Certification", issuer: "HackerRank", date: "2022" },
    { title: "Quality Assurance Developer Certification", issuer: "Freecodecamp.org", date: "2022", hours: "300H" },
    { title: "Bootcamp EDUZZ Full Stack Developer", issuer: "Digital Innovation One", date: "2021", hours: "95H" },
    { title: "Responsive Web Design", issuer: "Freecodecamp.org", date: "2021", hours: "300H" },
    { title: "GIT Essential Training", issuer: "Linkedin Learning", date: "2021", hours: "3H" },
    { title: "Become a Web Developer", issuer: "Linkedin Learning", date: "2021", hours: "22H" },
  ]

  certifications.forEach((cert) => {
    if (yPos > 270) {
      doc.addPage()
      yPos = 20
    }

    doc.setFontSize(normalSize)
    doc.setFont("helvetica", "bold")
    doc.text(cert.title, 20, yPos)
    yPos += 6

    doc.setFontSize(smallSize)
    doc.setFont("helvetica", "normal")
    const certText = `${cert.issuer} | ${cert.date}${cert.hours ? ` | ${cert.hours}` : ""}`
    doc.text(certText, 25, yPos)
    yPos += 10
  })

  // Add footer to all pages
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(smallSize)
    doc.setFont("helvetica", "normal")
    doc.text(
      `Page ${i} of ${pageCount}`,
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: "center" },
    )
    doc.text(
      `Generated on ${new Date().toLocaleDateString()}`,
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 5,
      { align: "center" },
    )
  }
}

function addSection(doc: jsPDF, title: string, yPos: number): number {
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text(title, 20, yPos)
  yPos += 5

  // Add a horizontal line
  doc.line(20, yPos, 190, yPos)

  return yPos + 10
}

function addEducation(doc: jsPDF, institution: string, degree: string, period: string, status: string, yPos: number) {
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text(institution, 20, yPos)
  yPos += 6

  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text(degree, 20, yPos)
  yPos += 6

  doc.setFontSize(9)
  doc.setFont("helvetica", "italic")
  doc.text(`${period} | ${status}`, 20, yPos)
}

