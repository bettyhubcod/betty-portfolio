import { useI18n } from './i18n'

// Content of the project modal: description, "Key Features" box, "View Project" button.
// Every part is optional: the box only shows what the project provides,
// and the button only appears when the project has a `url`.
export default function ProjectDetails({ project }) {
  const { t, lang } = useI18n()
  const { summary, features, impact, url } = project

  return (
    <>
      <p className="mt-6 text-lg leading-8 tracking-wide text-cream/90">{summary[lang]}</p>

      {(features || impact) && (
        <div className="mt-8 rounded-xl border-l-4 border-[#6b0f1f] bg-white/[0.06] px-6 py-5 text-[15px] leading-7 text-cream/85">
          {features && (
            <>
              <p className="font-medium text-cream">{t('works.features')}</p>
              <ul className="mt-1 list-disc pl-5 marker:text-cream/50">
                {features[lang].map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </>
          )}
          {impact && (
            <p className={features ? 'mt-4' : ''}>
              <span className="font-medium text-cream">{t('works.impact')} </span>
              {impact[lang]}
            </p>
          )}
        </div>
      )}

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-xl bg-gradient-to-r from-[#5e0a15] to-[#c2204f] px-9 py-3.5 text-lg font-normal tracking-wide text-cream shadow-lg shadow-black/40 transition hover:brightness-110"
        >
          {t('works.view')}
        </a>
      )}
    </>
  )
}
