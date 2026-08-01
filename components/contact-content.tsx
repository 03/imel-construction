'use client'

import {useState} from 'react'
import {Clock, Mail, MapPin, Phone, Send} from 'lucide-react'
import {useLanguage} from '@/components/language-provider'
import {contactDetails} from '@/lib/i18n'

const fieldClasses =
  'w-full border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'

export function ContactContent() {
  const { t } = useLanguage()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: t.contact.typeOptions[0],
    suburb: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function update(key: keyof typeof form, value: string) {
    setForm((previous) => ({ ...previous, [key]: value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading');
    setErrorMessage('');

    // const subject = `Project enquiry — ${form.type} — ${form.name || 'Website'}`
    const body = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      type: form.type,
      suburb: form.suburb,
      message: form.message,
    }
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
    //

    // window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
    //   subject,
    // )}&body=${encodeURIComponent(body)}`

  }

  if (status === 'success') {
    return (
        <div className="rounded-md border border-green-200 bg-green-50 p-6 text-center text-green-800">
          <h3 className="font-semibold">{t.contact.sendReply.heading}</h3>
          <p className="mt-1 text-sm">{t.contact.sendReply.message}</p>
        </div>
    );
  }

  const details = [
    { Icon: MapPin, label: t.contact.addressLabel, value: t.contact.addressValue },
    { Icon: Phone, label: t.contact.phoneLabel, value: contactDetails.phone, href: contactDetails.phoneHref },
    {
      Icon: Mail,
      label: t.contact.emailLabel,
      value: contactDetails.email,
      href: `mailto:${contactDetails.email}`,
    },
    { Icon: Clock, label: t.contact.hoursLabel, value: t.contact.hoursValue },
  ]

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.contact.eyebrow}</p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {t.contact.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{t.contact.intro}</p>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-2xl leading-tight tracking-tight">{t.contact.detailsTitle}</h2>
            <ul className="mt-8 flex flex-col">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 border-t border-border py-5 last:border-b">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="mt-1 block text-base transition-colors hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base leading-relaxed">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <dl className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {t.contact.acnLabel}
                </dt>
                <dd className="mt-1 font-mono text-sm">{contactDetails.acn}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {t.contact.licenceLabel}
                </dt>
                <dd className="mt-1 font-mono text-sm">{contactDetails.licence}</dd>
              </div>
            </dl>

            {/*<p className="mt-8 border-l-2 border-accent bg-background px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              {t.contact.placeholderNote}
            </p>*/}

            <div className="mt-10 border-t border-border pt-8">
              <h3 className="font-serif text-xl leading-tight tracking-tight">{t.contact.serviceAreaTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.contact.serviceAreaBody}</p>
            </div>
          </div>

          <div className="border border-border bg-background p-7 md:p-10">
            <h2 className="font-serif text-2xl leading-tight tracking-tight">{t.contact.formTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.contact.formNote}</p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.14em]">
                  {t.contact.fields.name}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(event) => update('name', event.target.value)}
                  className={fieldClasses}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.14em]">
                  {t.contact.fields.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => update('email', event.target.value)}
                  className={fieldClasses}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.14em]">
                  {t.contact.fields.phone}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(event) => update('phone', event.target.value)}
                  className={fieldClasses}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="suburb" className="text-xs font-semibold uppercase tracking-[0.14em]">
                  {t.contact.fields.suburb}
                </label>
                <input
                  id="suburb"
                  name="suburb"
                  value={form.suburb}
                  onChange={(event) => update('suburb', event.target.value)}
                  className={fieldClasses}
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="type" className="text-xs font-semibold uppercase tracking-[0.14em]">
                  {t.contact.fields.type}
                </label>
                <select
                  id="type"
                  name="type"
                  value={form.type}
                  onChange={(event) => update('type', event.target.value)}
                  className={fieldClasses}
                >
                  {t.contact.typeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.14em]">
                  {t.contact.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder={t.contact.messagePlaceholder}
                  value={form.message}
                  onChange={(event) => update('message', event.target.value)}
                  className={`${fieldClasses} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent sm:col-span-2 sm:justify-self-start"
              >
                {t.contact.submit}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
