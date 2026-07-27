type TradeReviewSectionProps = {
  language: 'en' | 'fr'
}

const copy = {
  en: {
    eyebrow: 'Trade view review',
    title: 'A market perspective that keeps your strategy grounded.',
    body: 'Our trade view review highlights where capital is being allocated, how we evaluate opportunity, and where discipline matters most in shifting markets.',
    stat: 'Weekly market briefings',
  },
  fr: {
    eyebrow: 'Analyse de vue commerciale',
    title: 'Une perspective de marché qui maintient votre stratégie solide.',
    body: 'Notre revue de vue commerciale met en lumière où le capital est alloué, comment nous évaluons les opportunités et où la discipline compte le plus dans un marché en mouvement.',
    stat: 'Briefings de marché hebdomadaires',
  },
}

export default function TradeReviewSection({ language }: TradeReviewSectionProps) {
  const t = copy[language]

  return (
    <section className="section" id="insights">
      <div className="section-heading">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.title}</h2>
      </div>
      <div className="trade-review-card">
        <p>{t.body}</p>
        <strong>{t.stat}</strong>
      </div>
    </section>
  )
}
