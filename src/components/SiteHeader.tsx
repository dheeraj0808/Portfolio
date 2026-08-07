import Link from "next/link";
import { site } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand">
          Dheeraj <span>Singh</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/#work">Work</Link>
          <Link href="/#open-source">Open Source</Link>
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="header-actions">
          <a
            href="/Dheeraj_Singh_Resume.pdf"
            className="btn btn-ghost"
            style={{ padding: "0.55rem 1rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            href={site.github}
            className="btn btn-primary"
            style={{ padding: "0.55rem 1rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
