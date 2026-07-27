export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Diversify asset management company</p>
        <h1>Build lasting wealth through disciplined strategy.</h1>
        <p className="lead">
          We blend traditional capital preservation with modern market opportunities,
          giving clients a resilient path toward long-term growth.
        </p>
        <div className="hero-actions">
          <a className="button" href="#plans">
            View Investment Plans
          </a>
          <a className="button button-outline" href="#about">
            Learn More
          </a>
        </div>
      </div>
      <div className="hero-card" aria-label="Company performance overview">
        <div className="hero-card-top">
          <span>Portfolio Performance</span>
          <strong>+18.4% YTD</strong>
        </div>
        <ul>
          <li>Research-led allocations</li>
          <li>Secure, transparent reporting</li>
          <li>Professional advisory support</li>
        </ul>
      </div>
    </section>
  )
}
