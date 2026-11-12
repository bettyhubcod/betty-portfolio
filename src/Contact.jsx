import { useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { useI18n } from './i18n'

// 1) Create a free form at formspree.io and paste its ID here.
const ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
// 2) Check your profile links.
const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mame-betty-ndiaye-067310443', Icon: FaLinkedinIn },
  { label: 'GitHub', href: 'https://github.com/bettyhubcod', Icon: FaGithub },
]

const field =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm tracking-wide text-cream placeholder:text-cream/45 focus:border-rose/60 focus:outline-none'

export default function Contact() {
  const { t } = useI18n()
  const [state, setState] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setState('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      if (!res.ok) throw new Error('failed')
      form.reset()
      setState('sent')
    } catch {
      setState('error')
    }
  }

  return (
    <section id="contact" className="relative bg-[radial-gradient(ellipse_at_center,#2a070b_0%,transparent_70%)] px-6 pb-10 pt-32 md:px-12">
      <div className="mx-auto max-w-xl">
        <h2 className="mb-14 text-center font-serif text-5xl font-light md:text-6xl">
          {t('contact.title')}{' '}
          <span className="bg-gradient-to-r from-[#8b2540] to-rose bg-clip-text font-script text-transparent">{t('contact.accent')}</span>
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <input name="name" required placeholder={t('form.name')} className={field} />
          <input name="email" type="email" required placeholder={t('form.email')} className={field} />
          <textarea name="message" required rows={5} placeholder={t('form.message')} className={`${field} resize-y`} />
          <button
            type="submit"
            disabled={state === 'sending'}
            className="mt-4 w-full rounded-xl border border-white/30 px-5 py-4 text-xs uppercase tracking-[0.25em] transition-colors hover:bg-white/10 disabled:opacity-60"
          >
            {state === 'sending' ? t('form.sending') : t('form.send')}
          </button>
          <p role="status" className="min-h-6 text-center text-sm text-cream/70">
            {state === 'sent' && t('form.sent')}
            {state === 'error' && t('form.error')}
          </p>
        </form>
      </div>

      <div className="mt-12 flex justify-center gap-3 md:absolute md:bottom-1/3 md:left-12 md:mt-0 md:flex-col">
        {socials.map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
            className="flex size-14 items-center justify-center rounded-full bg-cream text-2xl text-ink transition-transform hover:scale-105">
            <Icon />
          </a>
        ))}
      </div>

      <p className="mt-16 border-t border-white/10 pt-6 text-center text-xs tracking-[0.2em] text-cream/40">© 2026 Betty Ndiaye</p>
    </section>
  )
}
