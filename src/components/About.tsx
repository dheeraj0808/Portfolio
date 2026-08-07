import { site } from "@/data/site";

export function About({
  languages,
  publicRepos,
}: {
  languages: [string, number][];
  publicRepos: number;
}) {
  const max = Math.max(...languages.map(([, n]) => n), 1);

  return (
    <section className="section" id="about">
      <div className="container">
        <p className="eyebrow">About</p>
        <h2 className="h2">Backend-first. Production-minded.</h2>
        <div className="split">
          <div>
            {site.about.map((p) => (
              <p key={p.slice(0, 24)} className="lead lead--stack">
                {p}
              </p>
            ))}
            <p className="lead lead--stack">
              Public repos on GitHub:{" "}
              <strong className="text-ink">{publicRepos}</strong>
            </p>
            {languages.length > 0 && (
              <div className="lang-bars" aria-label="Languages across public repos">
                {languages.map(([lang, count]) => (
                  <div key={lang} className="lang-row">
                    <span className="lang-row__label">{lang}</span>
                    <div className="lang-track">
                      <div
                        className="lang-fill"
                        style={{ width: `${(count / max) * 100}%` }}
                      />
                    </div>
                    <span className="lang-row__count">{count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {Object.entries(site.skills).map(([group, items]) => (
              <div key={group} className="skill-block">
                <h4 className="label">{group}</h4>
                <p className="skill-block__body">{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
