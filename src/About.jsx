import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { FaReact, FaLaravel, FaJava } from "react-icons/fa";
import {
  SiSpringboot,
  SiJavascript,
  SiFlutter,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiFigma,
} from "react-icons/si";
import { useI18n } from "./i18n";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Java", icon: FaJava, color: "#E76F00" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const tabs = ["about", "skills"];

// Flips to the 2nd photo when scrolled into view (then back), and on hover.
function PhotoCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6 });
  const [hover, setHover] = useState(false);
  const [peek, setPeek] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const a = setTimeout(() => setPeek(true), 500);
    const b = setTimeout(() => setPeek(false), 2600);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [inView]);

  const face =
    "absolute inset-0 overflow-hidden rounded-3xl bg-gradient-to-b from-white/10 to-wine/40";
  const hidden = {
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  return (
    <div
      ref={ref}
      style={{ perspective: 1200 }}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHover(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHover(false)}
      onPointerUp={(e) => e.pointerType !== "mouse" && setHover((h) => !h)}
      className="aspect-[4/5] w-full max-w-sm"
    >
      <motion.div
        animate={{ rotateY: hover || peek ? 180 : 0 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        <div className={face} style={hidden}>
          <img
            src="/photos/back.jpg"
            alt=""
            onError={(e) => (e.currentTarget.style.display = "none")}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className={face}
          style={{ ...hidden, transform: "rotateY(180deg)" }}
        >
          <img
            src="/photos/front.jpg"
            alt=""
            onError={(e) => (e.currentTarget.style.display = "none")}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  const { t } = useI18n();
  const [tab, setTab] = useState("about");

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-32 md:px-12">
      <div className="mb-16 md:ml-[45%]">
        <h2 className="font-serif text-6xl font-light md:text-8xl">
          {t("about.title")}{" "}
          <span className="font-script">{t("about.accent")}</span>
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
              <button
                key={k}
                onClick={() => setTab(k)}
                className="relative rounded-xl px-6 py-3 text-xs uppercase tracking-[0.2em]"
              >
                {tab === k && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-xl bg-white/10"
                  />
                )}
                <span
                  className={`relative ${tab === k ? "text-cream" : "text-cream/55"}`}
                >
                  {t(`tab.${k}`)}
                </span>
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
              className="mt-10 max-w-2xl"
            >
              {tab === "about" ? (
                <div className="space-y-6 text-lg leading-8 tracking-wide text-cream/85">
                  {t("about.paragraphs").map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              ) : (
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {skills.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <motion.li
                        key={s.name}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.35 }}
                        whileHover={{ y: -4 }}
                        className="flex aspect-[6/5] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#0d0d0d] p-4 transition-colors hover:border-white/25"
                      >
                        <Icon size={44} color={s.color} />
                        <span className="text-sm tracking-wide text-cream/85">
                          {s.name}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
