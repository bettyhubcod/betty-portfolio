import { useI18n } from './i18n'

const links = ['home', 'about', 'experience', 'works']

export default function Header() {
  const { t, lang, setLang } = useI18n()
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/60 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <a href="#home" className="text-xl lowercase tracking-[0.25em]">bettyndiaye</a>
        <nav className="flex items-center gap-5 text-xs uppercase tracking-[0.2em] text-cream/70 md:gap-7">
          {links.map((l) => (
            <a key={l} href={`#${l}`} className="hidden transition-colors hover:text-cream md:inline">
              {t(`nav.${l}`)}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}
            className="transition-colors hover:text-cream"
          >
            <span className={lang === 'fr' ? 'text-cream' : ''}>FR</span>
            {' / '}
            <span className={lang === 'en' ? 'text-cream' : ''}>EN</span>
          </button>
          <a href="#contact" className="rounded-xl border border-white/30 px-5 py-2.5 text-cream transition-colors hover:bg-white/10">
            {t('nav.contact')}
          </a>
        </nav>
      </div>
    </header>
  )
}
