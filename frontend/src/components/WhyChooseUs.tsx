const reasons = [
  'Independent research and transparent reporting',
  'Flexible investment plans tailored to your goals',
  'Dedicated relationship management and onboarding',
  'Structured risk controls across diversified assets',
]

export default function WhyChooseUs() {
  return (
    <section className="section section-alt" id="insights">
      <div className="section-heading">
        <p className="eyebrow">Why choose us</p>
        <h2>Confidence built on process and partnership.</h2>
      </div>
      <ul className="feature-list">
        {reasons.map((reason) => (
          <li key={reason}>{reason}</li>
        ))}
      </ul>
    </section>
  )
}
