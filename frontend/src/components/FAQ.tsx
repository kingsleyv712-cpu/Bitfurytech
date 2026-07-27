const faqs = [
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
]

export default function FAQ() {
  return (
    <section className="section section-alt" id="faq">
      <div className="section-heading">
        <p className="eyebrow">Frequently asked questions</p>
        <h2>Everything you need to know before investing.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
