import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from './i18n'

export default function Hero() {
  const { t } = useI18n()
  const roles = t('hero.roles')
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="glow glow-c" />

      <div className="relative text-center">
        <span className="absolute -top-6 right-0 font-serif text-2xl md:-right-10 md:text-4xl">2026</span>
        <h1>
          <span className="block font-serif text-5xl font-light md:text-8xl">{t('hero.welcome')}</span>
          <span className="-mt-2 block font-script text-7xl md:-mt-6 md:text-[10rem]">{t('hero.portfolio')}</span>
        </h1>
      </div>

      <div className="absolute bottom-16 left-0 right-0 h-8 text-center text-lg md:text-xl">
        <AnimatePresence mode="wait">
          <motion.span
            key={`${i}-${roles[i]}`}
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            ( {roles[i]} )
          </motion.span>
        </AnimatePresence>
      </div>
    </section>
  )
}
