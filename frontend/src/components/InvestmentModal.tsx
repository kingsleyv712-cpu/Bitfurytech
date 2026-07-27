import { useEffect, useState } from 'react'

type InvestmentModalProps = {
  isOpen: boolean
  onClose: () => void
  plan: string
}

export default function InvestmentModal({ isOpen, onClose, plan }: InvestmentModalProps) {
  const [amount, setAmount] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false)
      setAmount('')
      setStatusMessage('')
      setIsSubmitting(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')

    try {
      const response = await fetch('/api/investments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, amount: Number(amount) }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit investment request')
      }

      setSubmitted(true)
      setStatusMessage(`Submitted: ${data.message}`)
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Unable to submit request')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-card">
        <h3>Invest in {plan}</h3>
        <p>Submit your intended amount and the platform will register the request directly with the backend.</p>
        <form onSubmit={handleSubmit} className="investment-form">
          <input
            type="number"
            min="1"
            placeholder="Enter amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          />
          <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit investment'}
          </button>
        </form>
        {statusMessage && <p className={submitted ? 'success-text' : 'error-text'}>{statusMessage}</p>}
        <button type="button" className="button button-outline modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
