type TestimonialsProps = {
  language: 'en' | 'fr'
}

const testimonials = {
  en: [
    {
      name: 'Alicia M.',
      role: 'Real Estate Investor',
      quote: 'The process is transparent, the updates are consistent, and my returns are clear every month.',
    },
    {
      name: 'Daniel K.',
      role: 'Agricultural Portfolio Partner',
      quote: 'I appreciate how the team explains each opportunity and shares the risk strategy before investment.',
    },
    {
      name: 'Mina R.',
      role: 'Crypto Allocation Client',
      quote: 'The platform makes it easy to understand where my capital is working and why it is being allocated.',
    },
  ],
  fr: [
    {
      name: 'Alicia M.',
      role: 'Investisseuse immobilier',
      quote: 'Le processus est transparent, les mises à jour sont régulières et mes rendements sont clairs chaque mois.',
    },
    {
      name: 'Daniel K.',
      role: 'Partenaire de portefeuille agricole',
      quote: 'J’apprécie la manière dont l’équipe explique chaque opportunité et partage la stratégie de risque avant l’investissement.',
    },
    {
      name: 'Mina R.',
      role: 'Cliente allocation crypto',
      quote: 'La plateforme rend facile de comprendre où mon capital travaille et pourquoi il est alloué.',
    },
  ],
}

export default function Testimonials({ language }: TestimonialsProps) {
  const items = testimonials[language]

  return (
    <section className="section" id="testimonials">
      <div className="section-heading">
        <p className="eyebrow">{language === 'en' ? 'Testimonials' : 'Témoignages'}</p>
        <h2>{language === 'en' ? 'Trusted by investors seeking disciplined growth.' : 'Apprécié par des investisseurs qui recherchent une croissance disciplinée.'}</h2>
      </div>
      <div className="testimonial-grid">
        {items.map((item) => (
          <article key={item.name} className="testimonial-card">
            <p>“{item.quote}”</p>
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
