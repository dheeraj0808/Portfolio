import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vaidban Case Study — Ayurvedic Doctor Appointment Platform | Dheeraj Singh",
  description:
    "Full-stack case study on building the online consultation and clinic booking platform for Vaidban: 4-step booking wizard, dynamic wait times, and automated WhatsApp notifications.",
};

export default function VaidbanCaseStudyPage() {
  return (
    <div className="case-study-page">
      <nav className="case-study-nav">
        <div className="container case-study-nav__inner">
          <Link href="/" className="btn btn-ghost btn-compact" style={{ fontWeight: 600 }}>
            ← Back to Portfolio
          </Link>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <a
              href="https://appointment.vaidban.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-compact"
            >
              Visit appointment.vaidban.com ↗
            </a>
          </div>
        </div>
      </nav>

      <main className="container">
        <header className="case-study-hero">
          <div className="case-study-hero__badges">
            <span className="pill">Healthcare Full-Stack Case Study</span>
            <span className="pill">Next.js · Node.js · MySQL</span>
            <span className="pill">WhatsApp Business API</span>
          </div>
          <h1 className="h1 case-study-hero__title">
            Vaidban: Building a High-Volume Ayurvedic Doctor Consultation System
          </h1>
          <p className="case-study-hero__lead">
            An end-to-end appointment booking platform engineered for Vaidban, an established Ayurvedic
            healthcare brand (serving patients since 1992, trusted by over 5 Lakh+ individuals). Features
            a 4-step responsive booking wizard, dual consultation modalities, dynamic wait-time logic,
            a staff operations admin panel, and automated WhatsApp/email dispatch.
          </p>

          <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", color: "var(--muted)", fontSize: "0.9rem" }}>
            <div>
              <strong style={{ color: "var(--ink)" }}>Role:</strong> Solo Full-Stack Engineer (UI/UX, Backend, Database, Cloud Deployment)
            </div>
            <div>
              <strong style={{ color: "var(--ink)" }}>Core Stack:</strong> Next.js · Node.js · MySQL · WhatsApp API · Nodemailer · Nginx
            </div>
            <div>
              <strong style={{ color: "var(--ink)" }}>Live Platform:</strong>{" "}
              <a
                href="https://appointment.vaidban.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                appointment.vaidban.com
              </a>
            </div>
            <div>
              <strong style={{ color: "var(--ink)" }}>Client Reach:</strong> 5 Lakh+ Patients Served
            </div>
          </div>
        </header>

        {/* Real Numbers Dashboard */}
        <section aria-labelledby="key-specs-title">
          <h2 id="key-specs-title" className="eyebrow" style={{ marginTop: "1rem" }}>
            Platform Scale &amp; Operational Metrics
          </h2>
          <div className="case-study-stats">
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">5 Lakh+</span>
              <span className="case-study-stat-card__title">Patient Trust Base</span>
              <span className="case-study-stat-card__desc">
                Digitized appointment infrastructure for an Ayurvedic heritage brand established in 1992.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">4 Steps</span>
              <span className="case-study-stat-card__title">Frictionless Wizard</span>
              <span className="case-study-stat-card__desc">
                Patient Details → Expert Selection → Date &amp; Slot → Instant Confirmation.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">2 Modes</span>
              <span className="case-study-stat-card__title">Consultation Types</span>
              <span className="case-study-stat-card__desc">
                In-person clinic visits (2–3 hr queue) and tele-consultation voice calls (multi-day queue).
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">Instant</span>
              <span className="case-study-stat-card__title">WhatsApp Alerts</span>
              <span className="case-study-stat-card__desc">
                Automated booking confirmations and status updates cutting manual staff calls by ~70%.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">Admin</span>
              <span className="case-study-stat-card__title">Operations Portal</span>
              <span className="case-study-stat-card__desc">
                Real-time appointment schedule, doctor availability overrides, and patient history records.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">Zero</span>
              <span className="case-study-stat-card__title">Slot Double-Booking</span>
              <span className="case-study-stat-card__desc">
                Atomic slot reservation engine with doctor availability and vacation filters.
              </span>
            </div>
          </div>
        </section>

        {/* Technical Deep Dives */}
        <div className="case-study-grid">
          {/* Section 1: The Problem */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">The Problem</span>
              <h2 className="case-study-section__title">Overcoming Clinic Queues &amp; Tele-Health Scheduling Friction</h2>
            </div>
            <p>
              Vaidban receives high daily patient volume across northern India. Managing patient appointments
              through traditional telephone calls created persistent operational bottlenecks:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Clinic Overcrowding:</strong> Walk-in patients endured unmanaged waiting times of 3–5 hours
                without visibility into doctor queues.
              </li>
              <li>
                <strong>Staff Call Fatigue:</strong> Clinic coordinators spent hours manually confirming dates,
                writing down names, and making reminder phone calls.
              </li>
              <li>
                <strong>Differentiated Scheduling Needs:</strong> An in-person clinic visit requires immediate
                same-day slot scheduling, whereas remote Ayurvedic voice consultations require distributed doctor
                call queues across upcoming days.
              </li>
            </ul>
          </section>

          {/* Section 2: 4-Step Booking Wizard */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Frontend Engineering</span>
              <h2 className="case-study-section__title">4-Step High-Conversion Booking Wizard</h2>
            </div>
            <p>
              To ensure elderly patients and mobile users complete bookings effortlessly, we built an
              accessible, step-by-step wizard in <strong>Next.js</strong>:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Step 1 (Patient Details):</strong> Captures name, age, gender, state/country dropdowns,
                and mobile number with automated international dialing code formatting, plus an optional WhatsApp checkbox.
              </li>
              <li>
                <strong>Step 2 (Select Expert / Doctor):</strong> Displays doctor profiles, Ayurvedic specializations,
                consultation languages, and verified credentials.
              </li>
              <li>
                <strong>Step 3 (Select Date &amp; Mode):</strong> Calendar picker with real-time slot availability,
                clearly communicating expected wait times (2–3 hours for clinic visits vs scheduled slots for voice calls).
              </li>
              <li>
                <strong>Step 4 (Complete Booking):</strong> Review summary, patient login option for repeat visitors,
                and instant dispatch.
              </li>
            </ul>
          </section>

          {/* Section 3: WhatsApp Automation */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Automation</span>
              <h2 className="case-study-section__title">WhatsApp Business API &amp; Email Notification Pipeline</h2>
            </div>
            <p>
              WhatsApp is the primary communication channel for Indian consumers. We integrated third-party
              WhatsApp Business webhooks and Nodemailer:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Immediate Confirmation:</strong> As soon as a patient books, an automated WhatsApp
                message is dispatched containing booking reference ID, doctor name, clinic address, and queue instructions.
              </li>
              <li>
                <strong>Staff Operations Alerts:</strong> Clinic duty staff receive parallel notifications when
                high-priority consultations are registered.
              </li>
              <li>
                <strong>Status Updates:</strong> If an appointment is confirmed, rescheduled, or cancelled from
                the admin panel, the patient receives instant automated updates.
              </li>
            </ul>
          </section>

          {/* Section 4: Admin Panel */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Operations</span>
              <h2 className="case-study-section__title">Staff Management Portal &amp; Roster Control</h2>
            </div>
            <p>
              A protected administrative dashboard allows clinic staff to supervise all appointments in real time:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Live Calendar View:</strong> Filter appointments by doctor, consultation type, date range,
                or patient status (Pending, Confirmed, Completed, Cancelled).
              </li>
              <li>
                <strong>Roster &amp; Availability Overrides:</strong> Configure doctor clinic shifts, vacation days,
                and maximum daily patient capacities to prevent doctor burnout.
              </li>
              <li>
                <strong>Patient Records:</strong> Instant lookup of returning patients, past consultation history,
                and prescription notes.
              </li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <section className="case-study-cta-box">
          <span className="pill">Live in Production</span>
          <h2 className="h2" style={{ maxWidth: "34rem" }}>
            Experience the Booking Platform Live
          </h2>
          <p className="lead" style={{ maxWidth: "36rem", margin: 0 }}>
            Visit the live appointment booking system in production at appointment.vaidban.com.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
            <a
              href="https://appointment.vaidban.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Open appointment.vaidban.com ↗
            </a>
            <Link href="/" className="btn btn-ghost">
              Back to Portfolio
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
