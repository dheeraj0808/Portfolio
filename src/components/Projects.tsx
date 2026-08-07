import type { Project } from "@/lib/github";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section className="section" id="work">
      <div className="container">
        <p className="eyebrow">Selected work</p>
        <h2 className="h2">Proof that ships</h2>
        <p className="lead">
          Production platform first. Then a short list of backends that show auth,
          APIs, and data modeling — not every repo I have ever touched.
        </p>
        <div className="project-grid">
          {projects.map((project, index) => {
            const tags = [
              ...project.highlights,
              ...(project.language &&
              !project.highlights.some(
                (h) => h.toLowerCase() === project.language!.toLowerCase(),
              )
                ? [project.language]
                : []),
            ];

            return (
              <article
                key={project.name}
                className={`project-card${index === 0 ? " project-card--featured" : ""}`}
              >
                <div className="project-card__top">
                  <h3 className="h3">{project.name}</h3>
                  <span className="pill">{project.category}</span>
                </div>
                <p>{project.description}</p>
                {project.architecture && project.architecture.length > 0 && (
                  <ul className="arch-list">
                    {project.architecture.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
                {tags.length > 0 && (
                  <div className="tags">
                    {tags.map((h) => (
                      <span key={h} className="tag">
                        {h}
                      </span>
                    ))}
                  </div>
                )}
                <div className="project-card__links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live →
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.category === "Production" ? "Profile →" : "Source →"}
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
