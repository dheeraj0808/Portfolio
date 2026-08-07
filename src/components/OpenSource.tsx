import { site } from "@/data/site";

export function OpenSource() {
  return (
    <section className="section" id="open-source">
      <div className="container">
        <p className="eyebrow">Open source · npm @{site.npmHandle}</p>
        <h2 className="h2">India-focused NPM packages</h2>
        <p className="lead">
          Four zero-dependency packages published as{" "}
          <a
            href={site.npm}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", fontWeight: 600 }}
          >
            dheeraj08
          </a>
          {" "}
          — with MIT licensing, semantic versioning, and matching GitHub repos as
          proof.
        </p>
        <div className="project-grid">
          {site.packages.map((pkg) => (
            <article key={pkg.name} className="project-card">
              <div className="project-card__top">
                <h3>{pkg.name}</h3>
                <span className="pill">v{pkg.version}</span>
              </div>
              <p>{pkg.description}</p>
              <div className="tags">
                <span className="tag">Zero dependency</span>
                <span className="tag">MIT</span>
                <span className="tag">npm</span>
              </div>
              <div className="project-card__links">
                <a href={pkg.npm} target="_blank" rel="noopener noreferrer">
                  npm →
                </a>
                <a href={pkg.github} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
