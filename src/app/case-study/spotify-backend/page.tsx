import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spotify-Backend Case Study — Music Streaming REST API Architecture | Dheeraj Singh",
  description:
    "Technical case study on architecting a production-style music streaming REST API with Node.js, Express, cloud MySQL, RBAC auth, and ImageKit media pipeline.",
};

export default function SpotifyBackendCaseStudyPage() {
  return (
    <div className="case-study-page">
      <nav className="case-study-nav">
        <div className="container case-study-nav__inner">
          <Link href="/" className="btn btn-ghost btn-compact" style={{ fontWeight: 600 }}>
            ← Back to Portfolio
          </Link>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <a
              href="https://spotify-backend-3ouf.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-compact"
            >
              Live Demo API ↗
            </a>
            <a
              href="https://github.com/dheeraj0808/Spotify-Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-compact"
            >
              GitHub Source ↗
            </a>
          </div>
        </div>
      </nav>

      <main className="container">
        <header className="case-study-hero">
          <div className="case-study-hero__badges">
            <span className="pill">Backend Engineering Case Study</span>
            <span className="pill">Node.js · Express · MySQL</span>
            <span className="pill">REST API Architecture</span>
          </div>
          <h1 className="h1 case-study-hero__title">
            Spotify-Backend: Architecting a Production-Grade Music Streaming REST API
          </h1>
          <p className="case-study-hero__lead">
            A production-ready audio streaming and media catalog service built with Node.js, Express,
            cloud MySQL, and Sequelize. Engineered with 4-tier RBAC authorization, passwordless OTP
            recovery, relational junction tables for collaborative playlists, and an ImageKit CDN media pipeline.
          </p>

          <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", color: "var(--muted)", fontSize: "0.9rem" }}>
            <div>
              <strong style={{ color: "var(--ink)" }}>Role:</strong> Backend Architect &amp; API Developer
            </div>
            <div>
              <strong style={{ color: "var(--ink)" }}>Core Stack:</strong> Node.js · Express.js · MySQL · Sequelize · ImageKit · Nodemailer · JWT
            </div>
            <div>
              <strong style={{ color: "var(--ink)" }}>Live Deployment:</strong>{" "}
              <a
                href="https://spotify-backend-3ouf.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                spotify-backend-3ouf.onrender.com
              </a>
            </div>
            <div>
              <strong style={{ color: "var(--ink)" }}>Repository:</strong>{" "}
              <a
                href="https://github.com/dheeraj0808/Spotify-Backend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                github.com/dheeraj0808/Spotify-Backend
              </a>
            </div>
          </div>
        </header>

        {/* Key Metrics */}
        <section aria-labelledby="key-specs-title">
          <h2 id="key-specs-title" className="eyebrow" style={{ marginTop: "1rem" }}>
            System Architecture &amp; Reliability Metrics
          </h2>
          <div className="case-study-stats">
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">&lt; 50ms</span>
              <span className="case-study-stat-card__title">P95 Query Latency</span>
              <span className="case-study-stat-card__desc">
                Composite indexes on track search, artist catalog joins, and user playlist lookups.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">4 Roles</span>
              <span className="case-study-stat-card__title">Multi-Tier RBAC</span>
              <span className="case-study-stat-card__desc">
                Admin, Artist, Verified Creator, and Listener roles enforced via JWT authorization middleware.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">ImageKit</span>
              <span className="case-study-stat-card__title">CDN Ingestion Pipeline</span>
              <span className="case-study-stat-card__desc">
                Direct stream piping avoiding local container disk bloat with global audio caching.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">10-Min</span>
              <span className="case-study-stat-card__title">Email OTP Recovery</span>
              <span className="case-study-stat-card__desc">
                Bcrypt-hashed temporary reset codes with rate-limited dispatch via Nodemailer.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">Rate-Limited</span>
              <span className="case-study-stat-card__title">Abuse Prevention</span>
              <span className="case-study-stat-card__desc">
                Sliding-window IP rate limiting on authentication and search endpoints.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">30+ Routes</span>
              <span className="case-study-stat-card__title">Postman Tested</span>
              <span className="case-study-stat-card__desc">
                Complete production API collection with automated tests and pre-request scripts.
              </span>
            </div>
          </div>
        </section>

        {/* Technical Deep Dives */}
        <div className="case-study-grid">
          {/* Section 1: Data Modeling */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Data Modeling</span>
              <h2 className="case-study-section__title">Relational Schema &amp; Junction Tables for Collaborative Playlists</h2>
            </div>
            <p>
              Audio streaming platforms require highly relational database models: an artist has multiple
              albums, an album contains multiple songs, and users can build custom playlists that
              reference arbitrary songs with custom ordering and collaborative editors:
            </p>
            <div className="case-study-code">
              {`// Relational domain model configuration:
User.hasMany(Playlist, { foreignKey: 'userId', onDelete: 'CASCADE' });
Playlist.belongsTo(User, { foreignKey: 'userId' });

// Many-to-Many association for Playlists and Tracks:
Playlist.belongsToMany(Track, {
  through: PlaylistTrack,
  foreignKey: 'playlistId',
  otherKey: 'trackId',
});
Track.belongsToMany(Playlist, {
  through: PlaylistTrack,
  foreignKey: 'trackId',
  otherKey: 'playlistId',
});

// User Favorites & Likes:
User.belongsToMany(Track, {
  through: 'UserFavorites',
  foreignKey: 'userId',
  otherKey: 'trackId',
});`}
            </div>
            <p>
              By structuring <code>PlaylistTrack</code> with composite keys <code>(playlistId, trackId)</code>{" "}
              and an <code>order_index</code> column, track re-ordering is an indexed <code>O(1)</code> operation
              without requiring expensive table rewrites.
            </p>
          </section>

          {/* Section 2: Auth & RBAC */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Security &amp; Authorization</span>
              <h2 className="case-study-section__title">4-Tier Role-Based Access Control (RBAC)</h2>
            </div>
            <p>
              Endpoints must strictly enforce permissions: an artist can upload tracks and edit album
              metadata for their own catalog, but only platform Admins can feature playlists or modify
              genre taxonomies, while Listeners can only modify their personal libraries.
            </p>
            <ul className="case-study-list">
              <li>
                <strong>JWT Bearer Guard:</strong> Authenticates incoming requests, decodes user identity,
                and verifies signature against environment secrets.
              </li>
              <li>
                <strong>Role Authorization Middleware:</strong> Middleware factory (<code>authorize(&apos;ADMIN&apos;, &apos;ARTIST&apos;)</code>)
                inspects claims and rejects unauthorized calls with HTTP 403 Forbidden before executing controller logic.
              </li>
              <li>
                <strong>Ownership Validation:</strong> Ensures artists can only mutate tracks where{" "}
                <code>artistId === req.user.id</code>, preventing cross-tenant catalog tampering.
              </li>
            </ul>
          </section>

          {/* Section 3: Media Pipeline */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Media Pipeline</span>
              <h2 className="case-study-section__title">Streaming Ingestion with Multer &amp; ImageKit CDN</h2>
            </div>
            <p>
              Uploading multi-megabyte audio files and high-resolution album artwork directly to the app
              server quickly exhausts ephemeral disk storage in cloud container environments like Render.
            </p>
            <p>
              We resolved this by using a memory-buffered <strong>Multer</strong> pipeline that streams
              incoming audio binaries directly to <strong>ImageKit CDN</strong>:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Zero Local Disk Consumption:</strong> Files are buffered in memory streams and
                dispatched immediately to ImageKit via API, maintaining clean container state.
              </li>
              <li>
                <strong>Automated Transcoding &amp; Caching:</strong> ImageKit serves audio files through
                global edge nodes, providing range-request support for instant scrubbing without latency.
              </li>
              <li>
                <strong>Optimized Artwork Variants:</strong> Image transformations generate thumbnail
                and high-res cover variants dynamically via CDN query params.
              </li>
            </ul>
          </section>

          {/* Section 4: Passwordless OTP Recovery */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Resilience</span>
              <h2 className="case-study-section__title">Passwordless Email OTP Verification &amp; Rate Limiting</h2>
            </div>
            <p>
              Account recovery was built to resist brute-force abuse:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Secure Numeric OTP:</strong> Generates a random 6-digit cryptographic OTP,
                hashed using <code>bcrypt</code> before database persistence with a strict 10-minute TTL.
              </li>
              <li>
                <strong>Automated Email Dispatch:</strong> Delivered through <code>Nodemailer</code> with
                custom HTML templates.
              </li>
              <li>
                <strong>Sliding-Window Rate Limiting:</strong> Enforces a maximum of 5 OTP requests per hour
                per IP address using <code>express-rate-limit</code>, neutralizing spam and denial-of-service attempts.
              </li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <section className="case-study-cta-box">
          <span className="pill">Live Demo &amp; Code</span>
          <h2 className="h2" style={{ maxWidth: "34rem" }}>
            Explore the API &amp; Postman Collection
          </h2>
          <p className="lead" style={{ maxWidth: "36rem", margin: 0 }}>
            Inspect the complete Express controller code, Sequelize migrations, and Postman test suites
            directly on GitHub.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
            <a
              href="https://github.com/dheeraj0808/Spotify-Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View GitHub Repository ↗
            </a>
            <a
              href="https://spotify-backend-3ouf.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Live API Endpoint ↗
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
