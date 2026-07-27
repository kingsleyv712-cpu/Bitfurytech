type ContactFooterProps = {
  language: 'en' | 'fr'
}

export default function ContactFooter({ language }: ContactFooterProps) {
  return (
    <footer className="contact-footer" id="contact">
      <div>
        <p className="eyebrow">{language === 'en' ? 'Contact us' : 'Contactez-nous'}</p>
        <h2>{language === 'en' ? 'Let’s discuss growth opportunities.' : 'Discutons ensemble des opportunités de croissance.'}</h2>
      </div>
      <div className="contact-details">
        <a href="mailto:invest@bitfurytech.com">invest@bitfurytech.com</a>
        <a href="tel:+15551234567">+1 (555) 123-4567</a>
        <span>{language === 'en' ? 'Registered Office · London, UK' : 'Siège social · Londres, Royaume-Uni'}</span>
      </div>
    </footer>
  )
}
