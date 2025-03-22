import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  hours?: string
}

export default function CertificateCard({ title, issuer, date, hours }: CertificateCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{issuer}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">{date}</span>
          {hours && <span className="font-medium">{hours}</span>}
        </div>
      </CardContent>
    </Card>
  )
}

