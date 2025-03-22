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

// Mock certifications data
const certifications = [
  { title: "NDG Linux Essentials English 0323 cga", issuer: "Cisco Network Academy", date: "2023", hours: "70H" },
  { title: "JavaScript Basic Certification", issuer: "HackerRank", date: "2022" },
  { title: "Quality Assurance Developer Certification", issuer: "Freecodecamp.org", date: "2022", hours: "300H" },
  { title: "Bootcamp EDUZZ Full Stack Developer", issuer: "Digital Innovation One", date: "2021", hours: "95H" },
  { title: "Responsive Web Design", issuer: "Freecodecamp.org", date: "2021", hours: "300H" },
  { title: "GIT Essential Training", issuer: "Linkedin Learning", date: "2021", hours: "3H" },
  { title: "Become a Web Developer", issuer: "Linkedin Learning", date: "2021", hours: "22H" },
]

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
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      })

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
  // Document constants
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 15
  const contentWidth = pageWidth - margin * 2

  // Set font sizes
  const titleSize = 16
  const subtitleSize = 12
  const sectionTitleSize = 12
  const normalSize = 9
  const smallSize = 8

  // Spacing constants
  const lineHeight = 4.5
  const sectionSpacing = 5
  const paragraphSpacing = 3
  const bulletSpacing = 3.5

  // Track current position
  let yPos = margin

  // Add header
  doc.setFontSize(titleSize)
  doc.setFont("helvetica", "bold")
  doc.text(data.personal.name, pageWidth / 2, yPos, { align: "center" })
  yPos += lineHeight + 1

  doc.setFontSize(subtitleSize)
  doc.setFont("helvetica", "normal")
  doc.text(data.personal.title, pageWidth / 2, yPos, { align: "center" })
  yPos += lineHeight + 1

  // Add contact information
  doc.setFontSize(normalSize)
  doc.text(`Email: ${data.personal.email}`, pageWidth / 2, yPos, { align: "center" })
  yPos += lineHeight
  doc.text(`GitHub: ${data.personal.github}`, pageWidth / 2, yPos, { align: "center" })
  yPos += lineHeight
  doc.text(`LinkedIn: ${data.personal.linkedin}`, pageWidth / 2, yPos, { align: "center" })
  yPos += lineHeight + sectionSpacing

  // Professional Summary
  yPos = addSection(doc, "Professional Summary", yPos, sectionTitleSize)
  const summaryText = data.introduction.summary.join(" ")
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth)
  doc.setFontSize(normalSize)
  doc.setFont("helvetica", "normal")
  doc.text(splitSummary, margin, yPos)
  yPos += splitSummary.length * lineHeight + sectionSpacing

  // Professional Experience
  yPos = addSection(doc, "Professional Experience", yPos, sectionTitleSize)

  // Get projects that can serve as experience
  const experienceProjects = data.projects.slice(0, 4)

  // Experience entries from projects
  experienceProjects.forEach((project, index) => {
    // Check if we need a new page
    if (yPos > doc.internal.pageSize.getHeight() - 30) {
      doc.addPage()
      yPos = margin
    }

    doc.setFontSize(subtitleSize)
    doc.setFont("helvetica", "bold")
    doc.text(project.role, margin, yPos)
    yPos += lineHeight

    doc.setFontSize(normalSize)
    doc.setFont("helvetica", "italic")
    const titleWidth = doc.getTextWidth(project.title)
    doc.text(project.title, margin, yPos)

    // Period on the same line, right-aligned
    doc.setFont("helvetica", "normal")
    doc.text("2022 - Present", pageWidth - margin, yPos, { align: "right" })
    yPos += lineHeight + 1

    // Project description
    const responsibilities = project.description.split(". ").filter(Boolean)
    responsibilities.forEach((resp, i) => {
      // Check if we need a new page
      if (yPos > doc.internal.pageSize.getHeight() - 25) {
        doc.addPage()
        yPos = margin
      }

      const bulletText = `• ${resp}${resp.endsWith(".") ? "" : "."}`
      const splitBullet = doc.splitTextToSize(bulletText, contentWidth - 5)
      doc.text(splitBullet, margin + 3, yPos)
      yPos += splitBullet.length * lineHeight
    })

    // Add spacing between projects, but not after the last one
    if (index < experienceProjects.length - 1) {
      yPos += paragraphSpacing
    }
  })

  yPos += sectionSpacing

  // Technical Skills
  // Check if we need a new page
  if (yPos > doc.internal.pageSize.getHeight() - 60) {
    doc.addPage()
    yPos = margin
  }

  yPos = addSection(doc, "Technical Skills", yPos, sectionTitleSize)

  // Create a two-column layout for skills
  const columnWidth = contentWidth / 2 - 5
  let leftColYPos = yPos
  let rightColYPos = yPos

  // Frontend
  doc.setFontSize(subtitleSize - 1)
  doc.setFont("helvetica", "bold")
  doc.text("Frontend Development", margin, leftColYPos)
  leftColYPos += lineHeight + 1

  doc.setFontSize(normalSize)
  doc.setFont("helvetica", "normal")
  data.technicalProfile.fullStackCapabilities.sections[0].skills.forEach((skill) => {
    doc.text(`• ${skill}`, margin + 3, leftColYPos)
    leftColYPos += bulletSpacing
  })

  // Backend (right column)
  doc.setFontSize(subtitleSize - 1)
  doc.setFont("helvetica", "bold")
  doc.text("Backend Development", margin + columnWidth + 10, rightColYPos)
  rightColYPos += lineHeight + 1

  doc.setFontSize(normalSize)
  doc.setFont("helvetica", "normal")
  data.technicalProfile.fullStackCapabilities.sections[1].skills.forEach((skill) => {
    doc.text(`• ${skill}`, margin + columnWidth + 13, rightColYPos)
    rightColYPos += bulletSpacing
  })

  // Update yPos to the maximum of the two columns
  yPos = Math.max(leftColYPos, rightColYPos) + paragraphSpacing

  // Other Skills
  doc.setFontSize(subtitleSize - 1)
  doc.setFont("helvetica", "bold")
  doc.text("Other Technical Domains", margin, yPos)
  yPos += lineHeight + 1

  doc.setFontSize(normalSize)
  doc.setFont("helvetica", "normal")
  data.technicalProfile.fullStackCapabilities.sections[2].skills.forEach((skill) => {
    doc.text(`• ${skill}`, margin + 3, yPos)
    yPos += bulletSpacing
  })

  yPos += sectionSpacing

  // Education
  // Check if we need a new page
  if (yPos > doc.internal.pageSize.getHeight() - 50) {
    doc.addPage()
    yPos = margin
  }

  yPos = addSection(doc, "Education", yPos, sectionTitleSize)

  // Education entries (hardcoded for now)
  yPos = addEducation(
    doc,
    "UNOPAR (Universidade Norte do Paraná)",
    "Technologist - Development and System Analysis",
    "Current",
    "Pursuing the degree",
    yPos,
    margin,
    lineHeight,
  )
  yPos += paragraphSpacing

  yPos = addEducation(
    doc,
    "Instituto Federal de Educação, Ciência e Tecnologia da Bahia, Campus Irecê",
    "Technologist - Development and System Analysis",
    "2016-2019",
    "Incomplete",
    yPos,
    margin,
    lineHeight,
  )
  yPos += paragraphSpacing

  yPos = addEducation(doc, "Fundação Bradesco, Irecê", "High School", "2015", "Completed", yPos, margin, lineHeight)
  yPos += sectionSpacing

  // Certifications
  // Check if we need a new page
  if (yPos > doc.internal.pageSize.getHeight() - 40) {
    doc.addPage()
    yPos = margin
  }

  yPos = addSection(doc, "Certifications", yPos, sectionTitleSize)

  // Create a two-column layout for certifications
  let leftColY = yPos
  let rightColY = yPos
  let isLeftColumn = true

  for (let i = 0; i < certifications.length; i++) {
    const cert = certifications[i]
    const currentY = isLeftColumn ? leftColY : rightColY
    const currentX = isLeftColumn ? margin : margin + columnWidth + 10

    // Check if we need a new page
    if (currentY > doc.internal.pageSize.getHeight() - 25) {
      doc.addPage()
      leftColY = margin
      rightColY = margin
      isLeftColumn = true
      continue
    }

    doc.setFontSize(normalSize)
    doc.setFont("helvetica", "bold")
    doc.text(cert.title, currentX, currentY)

    doc.setFontSize(smallSize)
    doc.setFont("helvetica", "normal")
    const certText = `${cert.issuer} | ${cert.date}${cert.hours ? ` | ${cert.hours}` : ""}`
    doc.text(certText, currentX, currentY + lineHeight)

    // Update the column position
    if (isLeftColumn) {
      leftColY += lineHeight * 2 + 1
    } else {
      rightColY += lineHeight * 2 + 1
    }

    // Toggle column
    isLeftColumn = !isLeftColumn
  }

  // Add footer to all pages
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(smallSize)
    doc.setFont("helvetica", "normal")

    // Add page number
    doc.text(`Page ${i} of ${pageCount}`, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, { align: "center" })

    // Add generation date
    doc.text(`Generated on ${new Date().toLocaleDateString()}`, pageWidth / 2, doc.internal.pageSize.getHeight() - 5, {
      align: "center",
    })
  }
}

function addSection(doc: jsPDF, title: string, yPos: number, fontSize: number): number {
  doc.setFontSize(fontSize)
  doc.setFont("helvetica", "bold")
  doc.text(title, 15, yPos)
  yPos += 4

  // Add a horizontal line
  doc.setDrawColor(100, 100, 100)
  doc.line(15, yPos, doc.internal.pageSize.getWidth() - 15, yPos)

  return yPos + 4
}

function addEducation(
  doc: jsPDF,
  institution: string,
  degree: string,
  period: string,
  status: string,
  yPos: number,
  margin: number,
  lineHeight: number,
): number {
  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text(institution, margin, yPos)
  yPos += lineHeight

  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  doc.text(degree, margin, yPos)
  yPos += lineHeight

  doc.setFontSize(8)
  doc.setFont("helvetica", "italic")
  doc.text(`${period} | ${status}`, margin, yPos)

  return yPos + lineHeight
}

