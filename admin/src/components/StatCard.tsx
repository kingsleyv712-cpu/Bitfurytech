type StatCardProps = {
  title: string
  value: string
  detail: string
}

export default function StatCard({ title, value, detail }: StatCardProps) {
  return (
    <article className="stat-card">
      <p>{title}</p>
      <strong>{value}</strong>
      <span>{detail}</span>
    </article>
  )
}
