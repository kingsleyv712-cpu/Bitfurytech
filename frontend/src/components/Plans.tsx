import PlanTierCard from './PlanTierCard'

const plans = [
  {
    title: 'Starter',
    price: '$500+',
    description: 'A simple entry point with steady diversification.',
    perks: ['Monthly insights', 'Risk overview', 'Email support'],
  },
  {
    title: 'Growth',
    price: '$5,000+',
    description: 'Balanced exposure across curated growth avenues.',
    perks: ['Priority advisory', 'Quarterly reviews', 'Portfolio access'],
  },
  {
    title: 'Premium',
    price: '$25,000+',
    description: 'Extended strategy design for high-value portfolios.',
    perks: ['Dedicated manager', 'Advanced reporting', 'Private briefings'],
  },
]

export default function Plans() {
  return (
    <section className="section" id="plans">
      <div className="section-heading">
        <p className="eyebrow">Investment plans</p>
        <h2>Choose a plan that matches your ambition.</h2>
      </div>
      <div className="plans-grid">
        {plans.map((plan) => (
          <PlanTierCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  )
}
