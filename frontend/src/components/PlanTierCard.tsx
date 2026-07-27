import { useState } from 'react'
import InvestmentModal from './InvestmentModal'

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
  const [isOpen, setIsOpen] = useState(false)
  return (
    <article className="plan-card">
      <div className="plan-card-top">
        <div>
          <h3>{title}</h3>
          <p className="plan-price">{price}</p>
        </div>
        <span className="plan-badge">High potential</span>
      </div>
      <p>{description}</p>
      <ul>
        {perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>
      <details className="plan-details">
        <summary>Learn more</summary>
        <p className="plan-learn-more">{learnMore}</p>
      </details>
      <div className="plan-actions">
        <button type="button" className="button button-outline" onClick={() => setIsOpen(true)}>
          Invest now
        </button>
        <a className="button" href="#contact">
          {investLabel}
        </a>
      </div>
      <InvestmentModal isOpen={isOpen} onClose={() => setIsOpen(false)} plan={title} />
    </article>
  )
}
