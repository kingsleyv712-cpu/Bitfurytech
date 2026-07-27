import { useState } from 'react'

type SupportPanelProps = {
  language: 'en' | 'fr'
}

const copy = {
  en: {
    eyebrow: 'Customer support',
    title: 'Need help before or after you invest?',
    description: 'Submit a support request and our team will follow up with guidance for your investment journey.',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    button: 'Send support request',
    success: 'Support request received. Our team will follow up shortly.',
    error: 'Please complete all fields before submitting.',
  },
  fr: {
    eyebrow: 'Assistance client',
    title: 'Besoin d’aide avant ou après votre investissement ?',
    description: 'Envoyez une demande d’assistance et notre équipe vous apportera un accompagnement pour votre parcours d’investissement.',
    name: 'Nom',
    email: 'Courriel',
    subject: 'Objet',
    message: 'Message',
    button: 'Envoyer la demande',
    success: 'Demande d’assistance reçue. Notre équipe vous répondra bientôt.',
    error: 'Veuillez remplir tous les champs avant de soumettre.',
  },
}

export default function SupportPanel({ language }: SupportPanelProps) {
  const t = copy[language]
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    const missing = Object.values(form).some((value) => value.trim() === '')
    if (missing) {
      setStatus(t.error)
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Unable to send request')
      }
      setStatus(t.success)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to send request')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section section-alt" id="support">
      <div className="section-heading">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.title}</h2>
      </div>
      <div className="support-card">
        <p>{t.description}</p>
        <form className="support-form" onSubmit={handleSubmit}>
          <input placeholder={t.name} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
          <input type="email" placeholder={t.email} value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
          <input placeholder={t.subject} value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} />
          <textarea placeholder={t.message} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
          <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? '...' : t.button}
          </button>
        </form>
        {status && <p className="success-text">{status}</p>}
      </div>
    </section>
  )
}
