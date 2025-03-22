import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface EducationCardProps {
  institution: string
  degree: string
  period: string
  status: string
}

export default function EducationCard({ institution, degree, period, status }: EducationCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{institution}</CardTitle>
        <CardDescription>{degree}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">{period}</span>
          <span className="font-medium">{status}</span>
        </div>
      </CardContent>
    </Card>
  )
}

