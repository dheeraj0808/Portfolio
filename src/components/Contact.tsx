import { site } from "@/data/site";

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h2 className="h2">Need a backend owner?</h2>
        <div className="contact-panel">
          <div>
            <p className="lead lead--flush">
              Open to NestJS / Node roles — platforms, APIs, payments, and
              open-source collaborations.
            </p>
            <a className="mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${site.email}`}>
              Email me
            </a>
            <a
              className="btn btn-ghost"
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-ghost"
              href={site.npm}
              target="_blank"
              rel="noopener noreferrer"
            >
              NPM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
