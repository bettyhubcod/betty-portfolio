import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from './i18n'

const links = ['home', 'about', 'experience', 'works']

export default function Header() {
  const { t, lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const toggleLang = () => setLang(lang === 'en' ? 'fr' : 'en')

  // Lock page scroll while the mobile menu is open; close it with Escape.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const langButton = (
    <button
      onClick={toggleLang}
      aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}
      className="px-2 py-2 text-xs uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-cream"
    >
      <span className={lang === 'fr' ? 'text-cream' : ''}>FR</span>
      {' / '}
      <span className={lang === 'en' ? 'text-cream' : ''}>EN</span>
    </button>
  )

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/60 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-12">
          <a href="#home" onClick={() => setOpen(false)} className="text-lg lowercase tracking-[0.2em] md:text-xl md:tracking-[0.25em]">
            bettyndiaye
          </a>

          {/* Desktop */}
          <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.2em] text-cream/70 md:flex">
            {links.map((l) => (
              <a key={l} href={`#${l}`} className="transition-colors hover:text-cream">{t(`nav.${l}`)}</a>
            ))}
            {langButton}
            <a href="#contact" className="rounded-xl border border-white/30 px-5 py-2.5 text-cream transition-colors hover:bg-white/10">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-1 md:hidden">
            {langButton}
            <button
              onClick={() => setOpen(!open)}
              aria-label={lang === 'fr' ? (open ? 'Fermer le menu' : 'Ouvrir le menu') : open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="relative size-10"
            >
              <span className={`absolute left-2 right-2 h-px bg-cream transition-all duration-300 ${open ? 'top-1/2 rotate-45' : 'top-3.5'}`} />
              <span className={`absolute left-2 right-2 h-px bg-cream transition-all duration-300 ${open ? 'top-1/2 -rotate-45' : 'top-6'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header>: its backdrop-filter would otherwise trap this fixed panel. */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-20 z-40 flex flex-col items-center justify-center gap-8 bg-ink/95 backdrop-blur-md md:hidden"
          >
            {links.map((l) => (
              <a key={l} href={`#${l}`} onClick={() => setOpen(false)} className="font-serif text-4xl font-light">
                {t(`nav.${l}`)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-xl border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.25em]"
            >
              {t('nav.contact')}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}