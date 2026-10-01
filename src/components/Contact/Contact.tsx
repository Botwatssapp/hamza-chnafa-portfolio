import { useId, useMemo, useState, type FormEvent } from 'react'
import { useInView } from '../../hooks/useInView'
import { useLanguage } from '../../i18n/LanguageProvider'
import { ContactIllustration } from './ContactIllustration'
import './Contact.css'

export const CONTACT_LINKS = {
  email: 'chnafahamza33@gmail.com',
  github: '',
  linkedin: 'https://www.linkedin.com/in/hamza-chnafa-889410284',
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const CONTACT_SUBJECT = 'New Portfolio Contact Message'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FormStatus = 'idle' | 'success' | 'error'
type FieldName = 'name' | 'email' | 'message'
type FormValues = Record<FieldName, string>
type FormErrors = Partial<Record<FieldName, string>>

type Web3FormsResult = {
  success?: boolean
}

const INITIAL_VALUES: FormValues = {
  name: '',
  email: '',
  message: '',
}

function validate(values: FormValues, messages: {
  nameRequired: string
  emailInvalid: string
  messageRequired: string
}): FormErrors {
  const errors: FormErrors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (!name) errors.name = messages.nameRequired
  if (!email || !EMAIL_PATTERN.test(email)) errors.email = messages.emailInvalid
  if (!message) errors.message = messages.messageRequired

  return errors
}

export function Contact() {
  const { t } = useLanguage()
  const { ref, inView } = useInView<HTMLElement>(0.14)
  const formId = useId()
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [submitting, setSubmitting] = useState(false)

  const methods = useMemo(
    () => [
      { id: 'email' as const, label: t.contact.emailMethod, href: CONTACT_LINKS.email },
      { id: 'github' as const, label: t.contact.githubMethod, href: CONTACT_LINKS.github },
      { id: 'linkedin' as const, label: t.contact.linkedinMethod, href: CONTACT_LINKS.linkedin },
    ],
    [t],
  )

  const nameErrorId = `${formId}-name-error`
  const emailErrorId = `${formId}-email-error`
  const messageErrorId = `${formId}-message-error`
  const formStatusId = `${formId}-status`

  function updateField(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setStatus('idle')
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current }
        delete next[field]
        return next
      })
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (submitting) return

    const nextErrors = validate(values, {
      nameRequired: t.contact.nameRequired,
      emailInvalid: t.contact.emailInvalid,
      messageRequired: t.contact.messageRequired,
    })

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    setSubmitting(true)
    setStatus('idle')

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fbff3352-6ee4-4a6f-bc45-350f73361e3f',
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          subject: CONTACT_SUBJECT,
        }),
      })

      let result: Web3FormsResult = {}
      try {
        result = (await response.json()) as Web3FormsResult
      } catch {
        result = {}
      }

      if (!response.ok || result.success !== true) {
        setStatus('error')
        return
      }

      setValues(INITIAL_VALUES)
      setErrors({})
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className={`contact${inView ? ' is-inview' : ''}`}
      aria-labelledby="contact-heading"
    >
      <div className="contact-inner">
        <header className="contact-intro">
          <p className="contact-eyebrow">{t.contact.eyebrow}</p>
          <h2 id="contact-heading" className="contact-heading">
            {t.contact.heading}
          </h2>
          <p className="contact-description">{t.contact.description}</p>
        </header>

        <div className="contact-visual">
          <ContactIllustration alt={t.contact.illustrationAlt} />
        </div>

        <div className="contact-main">
          <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="contact-field">
              <label className="contact-label" htmlFor={`${formId}-name`}>
                {t.contact.nameLabel}
              </label>
              <input
                id={`${formId}-name`}
                className="contact-input"
                type="text"
                name="name"
                autoComplete="name"
                placeholder={t.contact.namePlaceholder}
                value={values.name}
                onChange={(event) => updateField('name', event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? nameErrorId : undefined}
              />
              {errors.name ? (
                <p id={nameErrorId} className="contact-error" role="alert">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor={`${formId}-email`}>
                {t.contact.emailLabel}
              </label>
              <input
                id={`${formId}-email`}
                className="contact-input"
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                placeholder={t.contact.emailPlaceholder}
                value={values.email}
                onChange={(event) => updateField('email', event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? emailErrorId : undefined}
              />
              {errors.email ? (
                <p id={emailErrorId} className="contact-error" role="alert">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor={`${formId}-message`}>
                {t.contact.messageLabel}
              </label>
              <textarea
                id={`${formId}-message`}
                className="contact-textarea"
                name="message"
                rows={6}
                placeholder={t.contact.messagePlaceholder}
                value={values.message}
                onChange={(event) => updateField('message', event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? messageErrorId : undefined}
              />
              {errors.message ? (
                <p id={messageErrorId} className="contact-error" role="alert">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              className="contact-submit"
              type="submit"
              disabled={submitting}
              aria-busy={submitting}
            >
              {submitting ? t.contact.sending : t.contact.submit}
            </button>

            {status === 'success' ? (
              <p id={formStatusId} className="contact-success" role="status">
                {t.contact.success}
              </p>
            ) : null}

            {status === 'error' ? (
              <p id={formStatusId} className="contact-error" role="alert">
                {t.contact.sendError}
              </p>
            ) : null}
          </form>

          <ul className="contact-methods">
            {methods.map((method) => (
              <li key={method.id} className="contact-method">
                <span className="contact-method-label">{method.label}</span>
                {method.href ? (
                  <a
                    className="contact-method-link"
                    href={
                      method.id === 'email' && !method.href.startsWith('mailto:')
                        ? `mailto:${method.href}`
                        : method.href
                    }
                    {...(method.id === 'email'
                      ? {}
                      : { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {method.href.replace(/^mailto:/, '')}
                  </a>
                ) : (
                  <span className="contact-method-pending">{t.contact.comingSoon}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
