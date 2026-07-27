type CompanyVideoSectionProps = {
  language: 'en' | 'fr'
}

const copy = {
  en: {
    eyebrow: 'Company media',
    title: 'See how Bitfurytech builds value across markets.',
    card1Title: 'Our operating model',
    card1Body: 'We combine market research, risk controls, and portfolio management to support long-term investor value.',
    card2Title: 'Board and leadership',
    card2Body: 'Our leadership team oversees strategy, compliance, and capital deployment across all investment verticals.',
  },
  fr: {
    eyebrow: 'Médias de l’entreprise',
    title: 'Découvrez comment Bitfurytech crée de la valeur sur les marchés.',
    card1Title: 'Notre modèle opérationnel',
    card1Body: 'Nous combinons recherche de marché, contrôles de risque et gestion de portefeuille pour soutenir la valeur à long terme des investisseurs.',
    card2Title: 'Conseil d’administration et direction',
    card2Body: 'Notre équipe dirigeante supervise la stratégie, la conformité et le déploiement du capital sur toutes les verticales d’investissement.',
  },
}

export default function CompanyVideoSection({ language }: CompanyVideoSectionProps) {
  const t = copy[language]

  return (
    <section className="section" id="media">
      <div className="section-heading">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.title}</h2>
      </div>
      <div className="media-grid">
        <div className="media-card">
          <h3>{t.card1Title}</h3>
          <p>{t.card1Body}</p>
        </div>
        <div className="media-card">
          <h3>{t.card2Title}</h3>
          <p>{t.card2Body}</p>
        </div>
      </div>
    </section>
  )
}
