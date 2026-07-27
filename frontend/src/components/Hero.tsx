type HeroProps = {
  language: 'en' | 'fr'
}

const copy = {
  en: {
    eyebrow: 'Diversify asset management company',
    title: 'Build lasting wealth through disciplined strategy.',
    lead: 'We blend traditional capital preservation with modern market opportunities, giving clients a resilient path toward long-term growth.',
    primary: 'View Investment Plans',
    secondary: 'Learn More',
    cardTitle: 'Portfolio Performance',
    bullet1: 'Research-led allocations',
    bullet2: 'Secure, transparent reporting',
    bullet3: 'Professional advisory support',
  },
  fr: {
    eyebrow: 'Société de gestion d’actifs diversifiée',
    title: 'Construisez une richesse durable grâce à une stratégie disciplinée.',
    lead: 'Nous combinons la préservation du capital avec des opportunités de marché modernes pour offrir à nos clients une voie résiliente vers une croissance durable.',
    primary: 'Voir les plans d’investissement',
    secondary: 'En savoir plus',
    cardTitle: 'Performance du portefeuille',
    bullet1: 'Allocations guidées par la recherche',
    bullet2: 'Rapports sécurisés et transparents',
    bullet3: 'Soutien conseil professionnel',
  },
}

export default function Hero({ language }: HeroProps) {
  const t = copy[language]

  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p className="lead">{t.lead}</p>
        <div className="hero-actions">
          <a className="button" href="#plans">
            {t.primary}
          </a>
          <a className="button button-outline" href="#about">
            {t.secondary}
          </a>
        </div>
      </div>
      <div className="hero-card" aria-label="Company performance overview">
        <div className="hero-card-top">
          <span>{t.cardTitle}</span>
          <strong>+18.4% YTD</strong>
        </div>
        <ul>
          <li>{t.bullet1}</li>
          <li>{t.bullet2}</li>
          <li>{t.bullet3}</li>
        </ul>
      </div>
    </section>
  )
}
