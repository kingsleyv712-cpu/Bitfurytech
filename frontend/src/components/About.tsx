type AboutProps = {
  language: 'en' | 'fr'
}

const highlights = {
  en: [
    { value: '24/7', label: 'Client support' },
    { value: '$85M+', label: 'Assets guided' },
    { value: '98%', label: 'Client retention' },
  ],
  fr: [
    { value: '24/7', label: 'Support client' },
    { value: '$85M+', label: 'Actifs accompagnés' },
    { value: '98%', label: 'Rétention client' },
  ],
}

const copy = {
  en: {
    eyebrow: 'About Bitfurytech',
    title: 'Trusted guidance for ambitious investors.',
    intro: 'Bitfurytech helps clients navigate global markets with clarity, discipline, and a strong focus on capital preservation. Our team brings together market insight, tailored portfolio design, and consistent communication.',
    detail: 'We operate by sourcing opportunities, managing risk, and distributing returns to investors through transparent reporting and structured cash flow models.',
    button: 'View registration certificate',
  },
  fr: {
    eyebrow: 'À propos de Bitfurytech',
    title: 'Un accompagnement de confiance pour des investisseurs ambitieux.',
    intro: 'Bitfurytech aide ses clients à naviguer dans les marchés mondiaux avec clarté, discipline et un fort accent sur la préservation du capital. Notre équipe associe analyse de marché, conception de portefeuilles sur mesure et communication régulière.',
    detail: 'Nous identifions les opportunités, gérons les risques et distribuons les rendements aux investisseurs via des rapports transparents et des modèles de flux de trésorerie structurés.',
    button: 'Voir le certificat d’enregistrement',
  },
}

export default function About({ language }: AboutProps) {
  const t = copy[language]

  return (
    <section className="section" id="about">
      <div className="section-heading">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.title}</h2>
      </div>
      <div className="about-grid">
        <div>
          <p>{t.intro}</p>
          <p className="about-copy">{t.detail}</p>
          <a
            className="button button-outline"
            href="/registration-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.button}
          </a>
        </div>
        <div className="stats-grid">
          {highlights[language].map((item) => (
            <div key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
