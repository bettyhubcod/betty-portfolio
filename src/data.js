// Edit statuses, links and texts here. Add a cover image in public/projects/<id>.jpg (optional).
export const experience = [
  {
    id: "freelance",
    status: "current",
    role: {
      en: "Freelance Web Developer & UI/UX Designer",
      fr: "Développement web & design UI/UX en freelance",
    },
    org: { en: "Freelance", fr: "Freelance" },
    place: "Dakar, Senegal",
    mode: { en: "Client projects", fr: "Projets clients" },
    tags: ["React", "Laravel", "Next.js", "UI/UX Design"],
  },
  {
    id: "isi",
    status: "completed",
    role: {
      en: " Bachelor`s Degree in Software Engineering",
      fr: "Licence professionnelle en génie logiciel",
    },
    org: {
      en: "ISI, Institut Supérieur d’Informatique",
      fr: "ISI, Institut Supérieur d’Informatique",
    },
    place: "Dakar, Senegal",
    mode: { en: "Third year", fr: "3e année" },
    tags: ["Java", "Spring Boot", "Laravel", "React", "Docker", "Kubernetes"],
  },
];

export const projects = [
  {
    id: "mma",
    title: "MMA Los Leones",
    image: "/projects/mma.jpg",
    status: "completed",
    url: "https://www.leonesmma.com/",
    tech: ["Next.js", "Laravel", "PostgreSQL"],
    summary: {
      en: "Bilingual (FR/EN) website for an MMA club, with membership requests including a payment system, reviewed and approved by admins before appearing on the site.",
      fr: "Site bilingue (FR/EN) pour un club de MMA, avec des demandes d’adhésion comprenant un systeme de paiement examinées et validées par des admins avant qu’elles n’apparaissent sur le site.",
    },
    features: {
      en: [
        "public page presenting the MMA club",
        "membership form with payment",
        "admin section to approve or reject requests",
        "CRUD for articles and fighters",
      ],
      fr: [
        "page publique qui presente le club mma",
        "formulaire d’adhésion avec paiement",
        "partie admin pour valider ou refuser les demandes ",
        "Crud des articles et des fighters",
      ],
    },
    impact: {
      en: "Your impact sentence.",
      fr: "ce systeme a permis au client de pouvoir suivre son club , ses fighters et avoir une meilleure visibilité.",
    },
  },
  {
    id: "lesupreme",
    title: "Le Suprême",
    image: "/projects/lesupreme.jpg",
    status: "completed",
    url: "https://le-supreme-website.vercel.app/",
    tech: ["React"],
    summary: {
      en: "Responsive website for a café chain, built with React and deployed on Vercel, with dynamic filtering and a warm, premium look.",
      fr: "Site responsive pour une chaîne de cafés, développé avec React et déployé sur Vercel, avec filtrage dynamique et un style chaleureux et premium.",
    },
    features: {
      en: [
        "public page presenting the MMA club",
        "membership form with payment",
        "admin section to approve or reject requests",
        "CRUD for articles and fighters",
      ],
      fr: [
        "page publique qui presente le club mma",
        "formulaire d’adhésion avec paiement",
        "partie admin pour valider ou refuser les demandes ",
        "Crud des articles et des fighters",
      ],
    },
    impact: {
      en: "the system allowed the client to track their club, their fighters, and gain better visibility.",
      fr: "ce systeme a permis au client de pouvoir suivre son club , ses fighters et avoir une meilleure visibilité.",
    },
  },

  {
    id: "bantogg",
    title: "Bantogg",
    image: "/projects/bantogg.jpg",
    status: "ongoing",
    url: "https://ban-togg-front.vercel.app/",
    tech: ["React", "Laravel", "postgreSQL"],
    summary: {
      en: "Web application to solve a daily problem, `what should we eat today?`, the app suggests meal ideas based on the ingredients you have at home, but also the suggestions depend on what you have already eaten during the week, to avoid eating the same thing all the time.",
      fr: "Application web pour resoudre un probleme de tout les jours , `on mange quoi aujourd'hui ?` , l'application propose des idees de plats selon les ingredients que vous avez chez vous , mais egalement les propositions dependent de ce que vous avez deja mangé dans la semaine , pour eviter de manger toujours la meme chose.",
    },
    features: {
      en: [
       "filter recipes based on the ingredients you have at home",
       "suggest recipes based on what you have already eaten during the week",
       "videos on how to prepare the recipes",
       "to do: add more recipes in the database and improve the UI/UX"
      ],
      fr: [
       "filter les recettes selon les ingredients que vous avez chez vous",
       "propose des recettes selon ce que vous avez deja mangé dans la semaine",
       "videos sur la preparation des recettes",
       "a faire : rajouter plus de recette en BD et ameliorer l'UI/UX"
      ],
    },
    impact: {
      en: "this application aims to save users time and help them discover new recipes based on the ingredients they have at home.",
      fr: "cette application a pour but de faire gagner du temps auc utilisateurs et de faire decouvrir de nouvelles recettes selon les ingredients qu'ils ont chez eux.",
    },
  },

  {
    id: "stagetrack",
    title: "StageTrack",
    status: "ongoing",
    url: "",
    tech: ["Spring Boot", "Java", "JPA / Hibernate"],
    summary: {
      en: "An internship journal: interns log their daily notes and the app generates their PDF report, on top of a Spring Boot REST API.",
      fr: "Un journal de stage : les stagiaires saisissent leurs notes quotidiennes et l’application génère leur rapport PDF, sur une API REST Spring Boot.",
    },
  },
];
