import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume | Dheeraj Singh",
  description: "Resume — Dheeraj Singh, Backend-Focused Software Engineer at Epic Web Service",
};

/** Resume route opens / downloads the real PDF resume file. */
export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-toolbar">
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" style={{ fontWeight: 600 }}>
            ← Portfolio
          </Link>
          <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <a
              className="btn btn-primary"
              href="/Dheeraj_Singh_Resume.pdf"
              download="Dheeraj_Singh_Resume.pdf"
              style={{ padding: "0.55rem 1rem" }}
            >
              Download PDF
            </a>
            <a
              className="btn btn-ghost"
              href="/Dheeraj_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "0.55rem 1rem" }}
            >
              Open in new tab
            </a>
          </div>
        </div>
      </div>

      <div className="resume-viewer container">
        <p className="resume-viewer__note">
          {site.name} — {site.title} @ {site.company}
        </p>
        <iframe
          title="Dheeraj Singh Resume"
          src="/Dheeraj_Singh_Resume.pdf#view=FitH"
          className="resume-frame"
        />
      </div>
    </div>
  );
}
