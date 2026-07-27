type FAQProps = {
  language: 'en' | 'fr'
}

const faqs = {
  en: [
    {
      question: 'How do I get started?',
      answer: 'Choose a plan, complete onboarding, and our team will guide you to your first allocation.',
    },
    {
      question: 'Can I withdraw anytime?',
      answer: 'Terms vary by plan, but our advisory team outlines liquidity options before you invest.',
    },
    {
      question: 'Is the process transparent?',
      answer: 'Yes. You receive regular updates, reporting, and direct support from your advisor.',
    },
  ],
  fr: [
    {
      question: 'Comment puis-je commencer ?',
      answer: 'Choisissez un plan, terminez l’onboarding et notre équipe vous guidera vers votre première allocation.',
    },
    {
      question: 'Puis-je retirer à tout moment ?',
      answer: 'Les conditions varient selon le plan, mais notre équipe conseille les options de liquidité avant votre investissement.',
    },
    {
      question: 'Le processus est-il transparent ?',
      answer: 'Oui. Vous recevez des mises à jour régulières, des rapports et un support direct de votre conseiller.',
    },
  ],
}

export default function FAQ({ language }: FAQProps) {
  const items = faqs[language]

  return (
    <section className="section section-alt" id="faq">
      <div className="section-heading">
        <p className="eyebrow">{language === 'en' ? 'Frequently asked questions' : 'Questions fréquentes'}</p>
        <h2>{language === 'en' ? 'Everything you need to know before investing.' : 'Tout ce que vous devez savoir avant d’investir.'}</h2>
      </div>
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
