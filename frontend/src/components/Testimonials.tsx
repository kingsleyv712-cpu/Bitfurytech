const testimonials = [
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
]

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="section-heading">
        <p className="eyebrow">Testimonials</p>
        <h2>Trusted by investors seeking disciplined growth.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
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
