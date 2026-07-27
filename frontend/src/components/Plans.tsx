import PlanTierCard from './PlanTierCard'

const plans = [
  {
    title: 'Real Estate',
    price: '$5,000+',
    description: 'We acquire income-generating properties, optimize occupancy, and distribute rental income to investors.',
    perks: ['Property acquisition', 'Rental yield distribution', 'Risk-managed exits'],
    learnMore: 'Our real estate plan combines selective acquisition, active management, and long-term appreciation to deliver steady income and capital growth.',
    investLabel: 'Invest in Real Estate',
  },
  {
    title: 'Stocks',
    price: '$3,000+',
    description: 'Capital is allocated across diversified listed equities with balanced growth and defensive positioning.',
    perks: ['Blue-chip exposure', 'Dividend income', 'Quarterly reviews'],
    learnMore: 'The stocks strategy blends market research, sector diversification, and disciplined rebalancing to preserve capital while seeking strong returns.',
    investLabel: 'Invest in Stocks',
  },
  {
    title: 'Agriculture',
    price: '$2,500+',
    description: 'We partner on high-yield agricultural projects with measurable production and harvest-based returns.',
    perks: ['Farm operations', 'Harvest revenue sharing', 'Sustainable practices'],
    learnMore: 'Agriculture projects generate returns through operational efficiency, commodity management, and long-term supply partnerships.',
    investLabel: 'Invest in Agriculture',
  },
  {
    title: 'Cryptocurrency',
    price: '$1,000+',
    description: 'A structured digital asset allocation approach designed to capture growth while managing volatility.',
    perks: ['BTC and ETH exposure', 'Risk limits', 'Market monitoring'],
    learnMore: 'The crypto plan is managed through defined allocation bands, active monitoring, and liquidity controls to balance upside potential with risk.',
    investLabel: 'Invest in Crypto',
  },
]

export default function Plans() {
  return (
    <section className="section" id="plans">
      <div className="section-heading">
        <p className="eyebrow">Investment plans</p>
        <h2>Choose a plan built for sustainable returns.</h2>
      </div>
      <div className="plans-grid">
        {plans.map((plan) => (
          <PlanTierCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  )
}
