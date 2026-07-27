type PlanTierCardProps = {
  title: string
  price: string
  description: string
  perks: string[]
}

export default function PlanTierCard({
  title,
  price,
  description,
  perks,
}: PlanTierCardProps) {
  return (
    <article className="plan-card">
      <h3>{title}</h3>
      <p className="plan-price">{price}</p>
      <p>{description}</p>
      <ul>
        {perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>
      <a className="button button-outline" href="#top">
        Select Plan
      </a>
    </article>
  )
}
