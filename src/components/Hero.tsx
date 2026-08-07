import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">Software Engineer @ {site.company}</p>
          <h1>
            {site.name.split(" ")[0]}
            <br />
            <em>{site.name.split(" ").slice(1).join(" ")}</em>
          </h1>
          <p className="hero__role">{site.title}</p>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            {site.tagline}
          </p>
          <div className="hero__cta">
            <a href="#work" className="btn btn-primary">
              View selected work
            </a>
            <Link href="/resume" className="btn btn-ghost">
              View resume
            </Link>
          </div>
          <div className="hero__meta">
            <span>{site.location}</span>
            <span>Open to opportunities</span>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              github.com/{site.handle}
            </a>
          </div>
        </div>
        <div className="portrait">
          <div className="portrait__frame">
            <Image
              src="/profile.jpg"
              alt={site.name}
              width={760}
              height={760}
              priority
            />
          </div>
          <div className="portrait__badge">
            <strong>Focus</strong>
            NestJS · RBAC · Razorpay · NPM packages
          </div>
        </div>
      </div>
    </section>
  );
}
