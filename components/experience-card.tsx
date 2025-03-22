import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface RelatedProject {
  name: string
  url: string
}

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  responsibilities: string[]
  technologies: string[]
  relatedProjects?: RelatedProject[]
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  responsibilities,
  technologies,
  relatedProjects,
}: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-base font-medium">{company}</CardDescription>
          </div>
          <CardDescription className="text-sm">{period}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{description}</p>

        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Responsibilities</h4>
          <ul className="list-disc pl-5 space-y-1">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {relatedProjects && relatedProjects.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-2">Related Projects</h4>
            <ul className="space-y-1">
              {relatedProjects.map((project) => (
                <li key={project.name} className="flex items-center gap-1">
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  <Link
                    href={project.url}
                    className="text-sm hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

