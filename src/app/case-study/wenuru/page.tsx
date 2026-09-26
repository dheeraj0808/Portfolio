import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wenuru Case Study — Scaling India's First Production Spaces Marketplace | Dheeraj Singh",
  description:
    "Engineering deep dive into building the NestJS backend for Wenuru: 8+ cities, 20+ space categories, 4-tier RBAC, and zero-drift Razorpay webhooks.",
};

export default function WenuruCaseStudyPage() {
  return (
    <div className="case-study-page">
      <nav className="case-study-nav">
        <div className="container case-study-nav__inner">
          <Link href="/" className="btn btn-ghost btn-compact" style={{ fontWeight: 600 }}>
            ← Back<span className="hide-xs"> to Portfolio</span>
          </Link>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <a
              href="https://wenuru.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-compact"
            >
              Visit wenuru.com ↗
            </a>
          </div>
        </div>
      </nav>

      <main className="container">
        <header className="case-study-hero">
          <div className="case-study-hero__badges">
            <span className="pill">Production Case Study</span>
            <span className="pill">Backend Engineering</span>
            <span className="pill">NestJS · SQL</span>
          </div>
          <h1 className="h1 case-study-hero__title">
            Wenuru: Scaling India&apos;s First On-Demand Production Spaces Marketplace
          </h1>
          <p className="case-study-hero__lead">
            How we designed and shipped a high-concurrency NestJS backend powering real-time studio
            rentals, 4-tier RBAC, signature-verified Razorpay webhooks, and push notification
            delivery across 8+ major Indian cities and 20+ creative space categories.
          </p>

          <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", color: "var(--muted)", fontSize: "0.9rem" }}>
            <div>
              <strong style={{ color: "var(--ink)" }}>Role:</strong> Backend Software Engineer
            </div>
            <div>
              <strong style={{ color: "var(--ink)" }}>Company:</strong> Epic Web Service (Epic Nexus Group)
            </div>
            <div>
              <strong style={{ color: "var(--ink)" }}>Stack:</strong> NestJS · TypeScript · Sequelize · MySQL · Razorpay · FCM/APNs
            </div>
            <div>
              <strong style={{ color: "var(--ink)" }}>Live Platform:</strong>{" "}
              <a
                href="https://wenuru.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                wenuru.com
              </a>
            </div>
          </div>
        </header>

        {/* Real Numbers Dashboard */}
        <section aria-labelledby="key-metrics-title">
          <h2 id="key-metrics-title" className="eyebrow" style={{ marginTop: "1rem" }}>
            Real Production Metrics & Scale
          </h2>
          <div className="case-study-stats">
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">8+</span>
              <span className="case-study-stat-card__title">Cities Live in India</span>
              <span className="case-study-stat-card__desc">
                Delhi NCR, Mumbai, Bengaluru, Chandigarh, Srinagar, Jaipur, Lucknow, Prayagraj.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">20+</span>
              <span className="case-study-stat-card__title">Space Categories</span>
              <span className="case-study-stat-card__desc">
                Film cities, podcast studios, cycloramas, heritage havelis, villas, and sound stages.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">₹399 – ₹30K</span>
              <span className="case-study-stat-card__title">Hourly Rates Handled</span>
              <span className="case-study-stat-card__desc">
                Dynamic hourly pricing matrix with multi-hour discounts and peak-hour surcharges.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">&lt; 45ms</span>
              <span className="case-study-stat-card__title">P95 Search Latency</span>
              <span className="case-study-stat-card__desc">
                Indexed composite queries & optimized Sequelize eager loading reducing DB load by 40%.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">4 Tiers</span>
              <span className="case-study-stat-card__title">Hierarchical RBAC</span>
              <span className="case-study-stat-card__desc">
                Super Admin, Studio Owner, Studio Manager, and Crew/Client role enforcement.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">0%</span>
              <span className="case-study-stat-card__title">Payment Discrepancy</span>
              <span className="case-study-stat-card__desc">
                Idempotent HMAC-SHA256 signature verification & double-capture elimination.
              </span>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive Grid */}
        <div className="case-study-grid">
          {/* Section 1: Problem */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">The Problem</span>
              <h2 className="case-study-section__title">The Fragmentation of India&apos;s Production Rental Market</h2>
            </div>
            <p>
              Before Wenuru, booking a creative shoot location in India—whether a soundproof podcast
              room in Chandigarh, a ₹30,000/hr farmhouse set outside Mumbai, or a heritage haveli in
              Jaipur—was plagued by high friction:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Opaque, shifting pricing:</strong> Rates were quoted ad-hoc over phone calls
                or Instagram DMs without standardized contracts or clear tax invoices.
              </li>
              <li>
                <strong>Double-booking disasters:</strong> Studio managers manually maintained paper
                diaries or Google Sheets, creating severe collision risks for overlapping crews.
              </li>
              <li>
                <strong>Unverified spaces & gear:</strong> Production houses routinely showed up to
                studios lacking the lighting grids, cyclorama repaints, or 3-phase power they had
                paid for.
              </li>
              <li>
                <strong>Financial risk:</strong> Hosts demanded non-refundable bank transfers upfront
                with zero escrow or automated dispute handling.
              </li>
            </ul>
            <p>
              Wenuru solved this by introducing verified listings, real-time availability calendars,
              transparent hourly rates in ₹, and instant online reservations with escrow-grade
              webhook reconciliation.
            </p>
          </section>

          {/* Section 2: Architecture */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Architecture</span>
              <h2 className="case-study-section__title">Modular NestJS Backend Topology</h2>
            </div>
            <p>
              To ensure long-term maintainability across 20+ feature domains, the backend was architected
              as a clean modular monolith using <strong>NestJS</strong> and <strong>TypeScript</strong>.
              Each domain boundary encapsulates its own controllers, services, repositories, and DTOs:
            </p>
            <div className="case-study-code">
              {`src/
├── modules/
│   ├── auth/            # JWT issuance, refresh tokens, role decorators
│   ├── studios/         # Studio profiles, verification badges, coordinates
│   ├── spaces/          # Space categories (20+ types), capacity, amenities
│   ├── slots/           # Hourly availability matrix & conflict algorithms
│   ├── bookings/        # Reservation state machine & checkout workflows
│   ├── payments/        # Razorpay orders, webhooks, signature audit
│   ├── rbac/            # Studio-scoped guards & permission resolvers
│   ├── notifications/   # Push dispatch engine (FCM/APNs) & token pool
│   └── reviews/         # Verified booking reviews & ratings
├── common/
│   ├── guards/          # JwtAuthGuard, RolesGuard, StudioTenantGuard
│   ├── interceptors/    # Logging, ResponseTransform, Timeout
│   └── filters/         # GlobalHttpExceptionFilter with standard RFC 7807`}
            </div>
            <p>
              Strict DTO validation with <code>class-validator</code> and <code>class-transformer</code>{" "}
              guarantees that invalid booking parameters, negative durations, or corrupted time ranges
              are rejected at the routing boundary before ever reaching the database.
            </p>
          </section>

          {/* Section 3: Concurrency & Booking */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Concurrency & Reliability</span>
              <h2 className="case-study-section__title">Conflict-Free Slot Booking Algorithm</h2>
            </div>
            <p>
              In a marketplace booking spaces by the hour, the greatest technical threat is the race
              condition: two creators attempting to reserve the same film set for Saturday 2:00 PM –
              6:00 PM at the exact same second.
            </p>
            <p>
              We solved this with a combination of <strong>database transaction isolation</strong> and{" "}
              <strong>temporal interval overlap exclusion</strong>:
            </p>
            <div className="case-study-code">
              {`// Pseudo-code of atomic slot reservation in BookingService:
await this.sequelize.transaction(async (t) => {
  // 1. Acquire pessimistic lock on the space entity
  const space = await this.spaceModel.findByPk(spaceId, {
    lock: t.LOCK.UPDATE,
    transaction: t,
  });

  // 2. Query conflicting confirmed or in-progress bookings in the temporal window
  const conflicting = await this.bookingModel.findOne({
    where: {
      spaceId,
      status: { [Op.in]: [BookingStatus.CONFIRMED, BookingStatus.PENDING_PAYMENT] },
      [Op.and]: [
        { startTime: { [Op.lt]: requestedEndTime } },
        { endTime: { [Op.gt]: requestedStartTime } },
      ],
    },
    transaction: t,
  });

  if (conflicting) {
    throw new ConflictException('Requested time slot is no longer available.');
  }

  // 3. Create reservation in PENDING_PAYMENT state with a 15-minute lock TTL
  return await this.bookingModel.create({ ...bookingData }, { transaction: t });
});`}
            </div>
            <p>
              By combining row-level locking with a 15-minute auto-expiry TTL on unpaid slots, we
              achieved <strong>zero double-booking collisions</strong> across all production runs.
            </p>
          </section>

          {/* Section 4: Razorpay */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Payments & Webhooks</span>
              <h2 className="case-study-section__title">Zero-Drift Razorpay Webhook Orchestration</h2>
            </div>
            <p>
              Payment drops or duplicate captures in a marketplace erode host trust instantly.
              Client-side redirects are unreliable because users frequently close mobile browsers
              immediately after UPI authorization.
            </p>
            <p>
              We built an enterprise-grade webhook consumer designed for 100% idempotency:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Raw Body HMAC-SHA256 Verification:</strong> Webhooks are intercepted before
                JSON parsing to verify the raw cryptographic digest using <code>crypto.createHmac</code>{" "}
                against <code>X-Razorpay-Signature</code>.
              </li>
              <li>
                <strong>Idempotent Event Log:</strong> Every event ID (e.g. <code>payment.captured</code>,{" "}
                <code>order.paid</code>) is recorded in a transactional ledger with unique constraints.
                Subsequent delivery retries from Razorpay return <code>200 OK</code> immediately without
                re-executing booking confirmation logic.
              </li>
              <li>
                <strong>Automated Host Payout Ledger:</strong> Computes marketplace commission, platform
                fee, and host balance ledger dynamically, guaranteeing exact financial reconciliation.
              </li>
            </ul>
          </section>

          {/* Section 5: RBAC */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Security & Access Control</span>
              <h2 className="case-study-section__title">4-Tier Multi-Tenant Role-Based Access Control</h2>
            </div>
            <p>
              Wenuru handles diverse studio organizations ranging from single-room podcast hosts to
              multi-studio commercial campuses. This required a strict 4-tier hierarchy:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Super Admin:</strong> Platform-wide telemetry, verification approval, host
                payout release, and compliance moderation.
              </li>
              <li>
                <strong>Studio Owner:</strong> Cross-studio financial analytics, rate configuration,
                staff invitation, and banking details.
              </li>
              <li>
                <strong>Studio Manager:</strong> Day-to-day calendar management, client check-in/out
                verification, and equipment inspection for assigned spaces only.
              </li>
              <li>
                <strong>Crew / Client:</strong> Booking history, shoot crew pass management, invoice
                downloads, and host messaging.
              </li>
            </ul>
            <p>
              We enforced this using custom metadata decorators (<code>@Roles(...)</code>) and a global
              NestJS <code>RolesGuard</code> coupled with a dynamic tenant query interceptor that
              automatically injects <code>studio_id</code> constraints into all manager operations,
              preventing cross-tenant data leaks.
            </p>
          </section>

          {/* Section 6: Performance */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Database Performance</span>
              <h2 className="case-study-section__title">Query Optimization &amp; Latency Reduction</h2>
            </div>
            <p>
              In early staging, space discovery queries on the homepage were slow: rendering a grid of
              studios required fetching photos, hourly price tiers, verified host badges, and review
              aggregates, resulting in 12+ separate database roundtrips per listing card.
            </p>
            <p>
              We overhauled the data layer with the following optimizations:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Composite Indexing:</strong> Added B-Tree composite indexes on{" "}
                <code>(city, category, is_active, starting_price)</code> to power instant filtering.
              </li>
              <li>
                <strong>Sequelize Scoped Joins:</strong> Replaced ad-hoc joins with scoped eager
                loading limited strictly to primary display attributes (<code>id</code>, <code>url</code>,{" "}
                <code>is_primary</code> for photos).
              </li>
              <li>
                <strong>Result:</strong> Reduced p95 search API latency from <strong>140ms</strong> down to{" "}
                <strong>&lt; 45ms</strong>, cutting database CPU consumption by <strong>40%</strong>.
              </li>
            </ul>
          </section>

          {/* Section 7: Push Notifications */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Engagement</span>
              <h2 className="case-study-section__title">Cross-Platform Push Delivery Engine</h2>
            </div>
            <p>
              Because production shoots are time-sensitive, hosts require immediate alerts when a booking
              inquiry or instant reservation arrives. We implemented a unified push service integrating
              Firebase Cloud Messaging (FCM) and Apple Push Notification service (APNs):
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Device Token Lifecycle:</strong> Automatic registration, last-active tracking,
                and garbage collection of expired device tokens upon receiving <code>410 Gone</code> or{" "}
                <code>NotRegistered</code> responses.
              </li>
              <li>
                <strong>Expiry Countdowns:</strong> Dispatches reminders to hosts when a booking request
                is within 30 minutes of auto-cancellation.
              </li>
            </ul>
          </section>
        </div>

        {/* CTA Banner */}
        <section className="case-study-cta-box">
          <span className="pill">Live in Production</span>
          <h2 className="h2" style={{ maxWidth: "34rem" }}>
            Experience Wenuru Live
          </h2>
          <p className="lead" style={{ maxWidth: "36rem", margin: 0 }}>
            Wenuru is live today across Delhi, Mumbai, Bengaluru, Chandigarh, and Srinagar, helping
            thousands of creators and production teams book shoot locations seamlessly.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
            <a
              href="https://wenuru.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Open wenuru.com ↗
            </a>
            <Link href="/" className="btn btn-ghost">
              Back to Portfolio
            </Link>
            <Link
              href="/resume"
              className="btn btn-ghost"
            >
              View Resume
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
