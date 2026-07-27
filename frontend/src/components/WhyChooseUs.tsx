type WhyChooseUsProps = {
  language: 'en' | 'fr'
}

const reasons = {
  en: [
    'Independent research and transparent reporting',
    'Flexible investment plans tailored to your goals',
    'Dedicated relationship management and onboarding',
    'Structured risk controls across diversified assets',
  ],
  fr: [
    'Recherche indépendante et reporting transparent',
    'Plans d’investissement flexibles adaptés à vos objectifs',
    'Gestion de relation dédiée et accompagnement à l onboarding',
    'Controles de risque structurés sur des actifs diversifiés',
  ],
}

export default function WhyChooseUs({ language }: WhyChooseUsProps) {
  return (
    <section className="section section-alt" id="insights">
      <div className="section-heading">
        <p className="eyebrow">{language === 'en' ? 'Why choose us' : 'Pourquoi nous choisir'}</p>
        <h2>{language === 'en' ? 'Confidence built on process and partnership.' : 'La confiance construite sur le processus et le partenariat.'}</h2>
      </div>
      <ul className="feature-list">
        {reasons[language].map((reason) => (
          <li key={reason}>{reason}</li>
        ))}
      </ul>
    </section>
  )
}
