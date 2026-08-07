import { site } from "@/data/site";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="eyebrow">Experience</p>
        <h2 className="h2">Where I work</h2>
        <div className="timeline">
          {site.experience.map((job) => (
            <article key={job.company}>
              <h3>
                {job.role} · {job.company}
              </h3>
              <p className="meta">
                {job.period} · {job.location}
              </p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
