const highlights = [
  { value: '24/7', label: 'Client support' },
  { value: '$85M+', label: 'Assets guided' },
  { value: '98%', label: 'Client retention' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <p className="eyebrow">About Bitfurytech</p>
        <h2>Trusted guidance for ambitious investors.</h2>
      </div>
      <div className="about-grid">
        <div>
          <p>
            Bitfurytech helps clients navigate global markets with clarity, discipline,
            and a strong focus on capital preservation. Our team brings together market
            insight, tailored portfolio design, and consistent communication.
          </p>
          <p className="about-copy">
            We operate by sourcing opportunities, managing risk, and distributing returns to investors through transparent reporting and structured cash flow models.
          </p>
          <a className="button button-outline" href="/certificate.pdf" target="_blank" rel="noreferrer">
            View registration certificate
          </a>
        </div>
        <div className="stats-grid">
          {highlights.map((item) => (
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
