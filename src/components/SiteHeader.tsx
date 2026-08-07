"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#systems", label: "Systems" },
  { href: "/#open-source", label: "Open Source" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          Dheeraj <span>Singh</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a
            href="/Dheeraj_Singh_Resume.pdf"
            className="btn btn-ghost btn-compact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            href={site.github}
            className="btn btn-primary btn-compact hide-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div
        id="mobile-nav"
        className={`mobile-nav${open ? " mobile-nav--open" : ""}`}
      >
        <div className="container mobile-nav__inner">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
