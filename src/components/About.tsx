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
        <h2 className="h2">Backend-first, still shipping UI</h2>
        <div className="split">
          <div>
            {site.about.map((p) => (
              <p key={p.slice(0, 24)} className="lead" style={{ marginBottom: "1rem" }}>
                {p}
              </p>
            ))}
            <p className="lead">
              Public repos on GitHub: <strong style={{ color: "var(--ink)" }}>{publicRepos}</strong>
            </p>
            {languages.length > 0 && (
              <div className="lang-bars" aria-label="Languages across public repos">
                {languages.map(([lang, count]) => (
                  <div key={lang} className="lang-row">
                    <span>{lang}</span>
                    <div className="lang-track">
                      <div
                        className="lang-fill"
                        style={{ width: `${(count / max) * 100}%` }}
                      />
                    </div>
                    <span>{count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {Object.entries(site.skills).map(([group, items]) => (
              <div key={group} className="skill-block">
                <h4>{group}</h4>
                <p>{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
