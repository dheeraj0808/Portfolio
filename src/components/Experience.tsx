import { site } from "@/data/site";

export function Experience() {
  return (
    <>
      <section className="section" id="experience">
        <div className="container">
          <p className="eyebrow">Experience</p>
          <h2 className="h2">Where I&apos;ve worked</h2>
          <div className="timeline">
            {site.experience.map((job) => (
              <article key={job.company}>
                <h3>{job.company}</h3>
                <p className="meta">
                  {job.employmentType}
                  {job.tenure ? ` · ${job.tenure}` : ""}
                  {" · "}
                  {job.location}
                </p>
                <div className="role-stack">
                  {job.roles.map((role) => (
                    <div key={`${job.company}-${role.role}`} className="role-block">
                      <h4>{role.role}</h4>
                      <p className="meta">{role.period}</p>
                      {role.skills?.length > 0 && (
                        <div className="tags" style={{ marginBottom: "0.5rem" }}>
                          {role.skills.map((skill) => (
                            <span key={skill} className="tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                      <ul>
                        {role.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="container">
          <p className="eyebrow">Education</p>
          <h2 className="h2">Academic background</h2>
          <div className="timeline">
            {site.education.map((edu) => (
              <article key={edu.school}>
                <h3>{edu.school}</h3>
                <p className="meta">
                  {edu.period}
                  {edu.location ? ` · ${edu.location}` : ""}
                </p>
                <p style={{ color: "var(--muted)", marginBottom: "0.35rem" }}>
                  {edu.degree}
                </p>
                {edu.grade && (
                  <p style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>
                    Grade: {edu.grade}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
