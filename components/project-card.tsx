import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  role: string
  impact: string
  githubUrl: string
  liveUrl?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  role,
  impact,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-1">Description</h4>
          <p>{description}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-1">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-1">Role</h4>
          <p>{role}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-1">Impact</h4>
          <p>{impact}</p>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t pt-4">
        <Button variant="outline" size="sm" asChild>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Repository
          </Link>
        </Button>
        {liveUrl && liveUrl !== "#" && (
          <Button size="sm" asChild>
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

