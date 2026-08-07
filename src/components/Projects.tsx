import type { Project } from "@/lib/github";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section className="section" id="work">
      <div className="container">
        <p className="eyebrow">Selected work</p>
        <h2 className="h2">Featured projects</h2>
        <p className="lead">
          Production platform first — then selected backends and apps from{" "}
          github.com/dheeraj0808.
        </p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`project-card${index === 0 ? " project-card--featured" : ""}`}
            >
              <div className="project-card__top">
                <h3>{project.name}</h3>
                <span className="pill">{project.category}</span>
              </div>
              <p>{project.description}</p>
              {project.highlights.length > 0 && (
                <div className="tags">
                  {project.highlights.map((h) => (
                    <span key={h} className="tag">
                      {h}
                    </span>
                  ))}
                  {project.language && (
                    <span className="tag">{project.language}</span>
                  )}
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
                {project.url && project.category !== "Production" && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Source →
                  </a>
                )}
                {project.category === "Production" && project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
