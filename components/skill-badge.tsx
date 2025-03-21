interface SkillBadgeProps {
  name: string
  level: number
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="inline-flex flex-col">
      <div className="bg-primary/10 text-primary rounded-full px-4 py-2 font-medium">{name}</div>
      <div className="w-full h-1 bg-muted mt-1 rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

