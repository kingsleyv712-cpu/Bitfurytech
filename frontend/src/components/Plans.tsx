import PlanTierCard from './PlanTierCard'

type PlansProps = {
  language: 'en' | 'fr'
}

const plans = {
  en: [
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
  ],
  fr: [
    {
      title: 'Immobilier',
      price: '$5,000+',
      description: 'Nous acquérons des propriétés génératrices de revenus, optimisons le taux d’occupation et distribuons les loyers aux investisseurs.',
      perks: ['Acquisition de biens', 'Distribution de rendements locatifs', 'Sorties maîtrisées'],
      learnMore: 'Notre plan immobilier combine acquisition sélective, gestion active et appréciation à long terme pour générer un revenu régulier et une croissance du capital.',
      investLabel: 'Investir dans l’immobilier',
    },
    {
      title: 'Actions',
      price: '$3,000+',
      description: 'Le capital est alloué à des actions cotées diversifiées avec une croissance équilibrée et une position défensive.',
      perks: ['Exposition blue-chip', 'Revenus de dividendes', 'Analyses trimestrielles'],
      learnMore: 'La stratégie actions associe recherche de marché, diversification sectorielle et rééquilibrage discipliné pour préserver le capital tout en recherchant de solides rendements.',
      investLabel: 'Investir dans les actions',
    },
    {
      title: 'Agriculture',
      price: '$2,500+',
      description: 'Nous collaborons à des projets agricoles à haut rendement avec des retours mesurables basés sur la production et la récolte.',
      perks: ['Opérations agricoles', 'Partage des revenus de récolte', 'Pratiques durables'],
      learnMore: 'Les projets agricoles génèrent des rendements grâce à l’efficacité opérationnelle, la gestion des matières premières et des partenariats d’approvisionnement à long terme.',
      investLabel: 'Investir dans l’agriculture',
    },
    {
      title: 'Cryptomonnaies',
      price: '$1,000+',
      description: 'Une approche structurée d’allocation d’actifs numériques conçue pour capturer la croissance tout en gérant la volatilité.',
      perks: ['Exposition BTC et ETH', 'Limites de risque', 'Suivi du marché'],
      learnMore: 'Le plan crypto est géré via des bandes d’allocation définies, un suivi actif et des contrôles de liquidité pour équilibrer potentiel de hausse et risque.',
      investLabel: 'Investir dans les cryptomonnaies',
    },
  ],
}

export default function Plans({ language }: PlansProps) {
  const items = plans[language]

  return (
    <section className="section" id="plans">
      <div className="section-heading">
        <p className="eyebrow">{language === 'en' ? 'Investment plans' : 'Plans d’investissement'}</p>
        <h2>{language === 'en' ? 'Choose a plan built for sustainable returns.' : 'Choisissez un plan pensé pour des rendements durables.'}</h2>
      </div>
      <div className="plans-grid">
        {items.map((plan) => (
          <PlanTierCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  )
}
