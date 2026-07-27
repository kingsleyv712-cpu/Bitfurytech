type PlanTierCardProps = {
  title: string
  price: string
  description: string
  perks: string[]
  learnMore: string
  investLabel: string
}

export default function PlanTierCard({
  title,
  price,
  description,
  perks,
  learnMore,
  investLabel,
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
      <p className="plan-learn-more">{learnMore}</p>
      <div className="plan-actions">
        <a className="button button-outline" href="#about">
          Learn More
        </a>
        <a className="button" href="#contact">
          {investLabel}
        </a>
      </div>
    </article>
  )
}
