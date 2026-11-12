import { createContext, useContext, useEffect, useState } from 'react'

const dict = {
  en: {
    'nav.home': 'Home', 'nav.about': 'About', 'nav.experience': 'Experience',
    'nav.works': 'Works', 'nav.contact': 'Contact',
    'hero.welcome': 'welcome to my', 'hero.portfolio': 'portfolio',
    'hero.roles': ['Software Engineer', 'Fullstack Developer', 'UI/UX Designer', 'Freelance Web'],
    'about.title': 'about', 'about.accent': 'me',
    'tab.about': 'About me', 'tab.skills': 'Skills',
    'about.paragraphs': [
      `I am a Fullstack developer, passionate about designing and developing digital solutions that address real-world problems.`,
      `I design and develop web and mobile applications end-to-end, from backend to user interface, including data structuring and API integration. I pay close attention to architecture, code quality, and UI/UX design, with the goal of creating experiences that are intuitive, performant, and reliable.`,
      `I enjoy understanding needs, exchanging ideas, and turning thoughts into concrete solutions. Beyond development, I am interested in communication, leadership, and teamwork. I believe that creating good products relies as much on technical skills as on the ability to collaborate, share a vision, and take initiative.`,
    ],
  },
  fr: {
    'nav.home': 'Accueil', 'nav.about': 'À propos', 'nav.experience': 'Expérience',
    'nav.works': 'Projets', 'nav.contact': 'Contact',
    'hero.welcome': 'bienvenue sur mon', 'hero.portfolio': 'portfolio',
    'hero.roles': ['Ingénierie logicielle', 'Développement Fullstack', 'Design UI/UX', 'Web freelance'],
    'about.title': 'à propos', 'about.accent': 'de moi',
    'tab.about': 'À propos', 'tab.skills': 'Compétences',
    'about.paragraphs': [
      `Je suis développeuse Fullstack, passionnée par la conception et le développement de solutions digitales qui répondent à des problèmes concrets.`,
      `Je conçois et développe des applications web et mobiles de bout en bout, du backend à l'interface utilisateur, en passant par la structuration des données et l'intégration des API. J'accorde une attention particulière à l'architecture, à la qualité du code et au design UI/UX, avec l'objectif de créer des expériences à la fois intuitives, performantes et fiables.`,
      `J'aime comprendre les besoins, échanger des idées et transformer les réflexions en solutions concrètes. Au-delà du développement, je m'intéresse à la communication, au leadership et au travail d'équipe. Je crois que la création de bons produits repose autant sur les compétences techniques que sur la capacité à collaborer, partager une vision et prendre des initiatives.`
     
    ],
  },
}

const Ctx = createContext()
export const useI18n = () => useContext(Ctx)

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('lang')
      if (saved) return saved
    } catch {}
    return navigator.language?.startsWith('fr') ? 'fr' : 'en'
  })
  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch {}
  }, [lang])
  const t = (key) => dict[lang][key]
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>
}
