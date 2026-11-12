import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useI18n } from './i18n'

const skills = ['React', 'Laravel', 'Spring Boot', 'Java', 'JavaScript', 'Flutter', 'MySQL', 'Docker', 'Kubernetes', 'UI/UX Design']
const tabs = ['about', 'skills']

// Flips to the 2nd photo when scrolled into view (then back), and on hover.
function PhotoCard() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.6 })
  const [hover, setHover] = useState(false)
  const [peek, setPeek] = useState(false)

  useEffect(() => {
    if (!inView) return
    const a = setTimeout(() => setPeek(true), 500)
    const b = setTimeout(() => setPeek(false), 2600)
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [inView])

  const face = 'absolute inset-0 overflow-hidden rounded-3xl bg-gradient-to-b from-white/10 to-wine/40'
  const hidden = { backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }

  return (
    <div
      ref={ref}
      style={{ perspective: 1200 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="aspect-[4/5] w-full max-w-sm"
    >
      <motion.div
        animate={{ rotateY: hover || peek ? 180 : 0 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative h-full w-full"
      >
        <div className={face} style={hidden}>
          <img src="/photos/back.jpg" alt="" onError={(e) => (e.currentTarget.style.display = 'none')} className="h-full w-full object-cover" />
        </div>
        <div className={face} style={{ ...hidden, transform: 'rotateY(180deg)' }}>
          <img src="/photos/front.jpg" alt="" onError={(e) => (e.currentTarget.style.display = 'none')} className="h-full w-full object-cover" />
        </div>
      </motion.div>
    </div>
  )
}

export default function About() {
  const { t } = useI18n()
  const [tab, setTab] = useState('about')

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-32 md:px-12">
      <div className="mb-16 md:ml-[45%]">
        <h2 className="font-serif text-6xl font-light md:text-8xl">
          {t('about.title')} <span className="font-script">{t('about.accent')}</span>
        </h2>
        <div className="mt-4 h-px bg-gradient-to-r from-white/25 via-white/10 to-transparent" />
      </div>

      <div className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <div className="aspect-[4/5] w-full max-w-sm md:mt-30">
          <PhotoCard />
        </div>

        <div>
          <div className="inline-flex rounded-2xl border border-white/10 bg-white/[0.03] p-1.5">
            {tabs.map((k) => (
              <button key={k} onClick={() => setTab(k)} className="relative rounded-xl px-6 py-3 text-xs uppercase tracking-[0.2em]">
                {tab === k && <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-xl bg-white/10" />}
                <span className={`relative ${tab === k ? 'text-cream' : 'text-cream/55'}`}>{t(`tab.${k}`)}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-10 max-w-xl"
            >
              {tab === 'about' ? (
                <div className="space-y-6 text-lg leading-8 tracking-wide text-cream/85">
                  {t('about.paragraphs').map((p) => <p key={p}>{p}</p>)}
                </div>
              ) : (
                <ul className="flex flex-wrap gap-3">
                  {skills.map((s) => (
                    <li key={s} className="rounded-full border border-white/15 px-5 py-2.5 text-sm tracking-wider">{s}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
