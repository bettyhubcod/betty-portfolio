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
    status: "completed",
    url: "",
    tech: ["Next.js", "Laravel", "PostgreSQL", "next-intl"],
    summary: {
      en: "Bilingual (FR/EN) website for an MMA club, with membership applications reviewed and validated by admins before they appear on the site.",
      fr: "Site bilingue (FR/EN) pour un club de MMA, avec des candidatures de membres vérifiées et validées par des admins avant d’apparaître sur le site.",
    },
  },
  {
    id: "lesupreme",
    title: "Le Suprême",
    status: "completed",
    url: "",
    tech: ["React", "Vite", "React Router", "Vercel"],
    summary: {
      en: "Responsive website for a café chain, built with React and deployed on Vercel, with dynamic filtering and a warm, premium look.",
      fr: "Site responsive pour une chaîne de cafés, développé avec React et déployé sur Vercel, avec filtrage dynamique et un style chaleureux et premium.",
    },
  },
  {
    id: "statdev",
    title: "StatDev",
    status: "ongoing",
    url: "",
    tech: ["Laravel", "React"],
    summary: {
      en: "A job market analytics tool that scrapes job listings to analyze what employers are looking for.",
      fr: "Un outil d’analyse du marché de l’emploi qui collecte des offres pour analyser ce que recherchent les employeurs.",
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
