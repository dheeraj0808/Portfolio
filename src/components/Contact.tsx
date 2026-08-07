import { site } from "@/data/site";

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h2 className="h2">Let&apos;s talk backends — or mobile experiments</h2>
        <div className="contact-panel">
          <div>
            <p className="lead" style={{ margin: 0 }}>
              Open to backend roles — NestJS platforms, APIs, payments, and open-source
              collaborations.
            </p>
            <a className="mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
