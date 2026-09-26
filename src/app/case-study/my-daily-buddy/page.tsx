import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Daily Buddy Case Study — React Native & Expo Mobile App | Dheeraj Singh",
  description:
    "Engineering deep dive into building My Daily Buddy: a cross-platform React Native / Expo mobile app with passwordless OTP auth, Smart Catch-Up recovery, and Razorpay subscriptions.",
};

export default function MyDailyBuddyCaseStudyPage() {
  return (
    <div className="case-study-page">
      <nav className="case-study-nav">
        <div className="container case-study-nav__inner">
          <Link href="/" className="btn btn-ghost btn-compact" style={{ fontWeight: 600 }}>
            ← Back<span className="hide-xs"> to Portfolio</span>
          </Link>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <a
              href="https://github.com/dheeraj0808/my_daily_buddy_mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-compact"
            >
              GitHub Source ↗
            </a>
          </div>
        </div>
      </nav>

      <main className="container">
        <header className="case-study-hero">
          <div className="case-study-hero__badges">
            <span className="pill">Mobile Engineering Case Study</span>
            <span className="pill">React Native · Expo SDK 54</span>
            <span className="pill">iOS &amp; Android</span>
          </div>
          <h1 className="h1 case-study-hero__title">
            My Daily Buddy: Engineering a Cross-Platform Habit &amp; Wellness Engine
          </h1>
          <p className="case-study-hero__lead">
            &ldquo;Your personal routine, habit, health and goal tracking companion.&rdquo; A solo-built
            cross-platform mobile application combining passwordless OTP authentication, streak gamification,
            an adaptive 7-day Smart Catch-Up recovery algorithm, calorie &amp; water logging, and tiered
            Razorpay subscriptions.
          </p>

          <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", color: "var(--muted)", fontSize: "0.9rem" }}>
            <div>
              <strong style={{ color: "var(--ink)" }}>Role:</strong> Solo Mobile &amp; Frontend Architect
            </div>
            <div>
              <strong style={{ color: "var(--ink)" }}>Platforms:</strong> Android (API 24–35) &amp; iOS (Universal Expo)
            </div>
            <div>
              <strong style={{ color: "var(--ink)" }}>Core Stack:</strong> React Native 0.81 · Expo SDK 54 · TypeScript · Expo Router · Razorpay
            </div>
            <div>
              <strong style={{ color: "var(--ink)" }}>Repository:</strong>{" "}
              <a
                href="https://github.com/dheeraj0808/my_daily_buddy_mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                github.com/dheeraj0808/my_daily_buddy_mobile
              </a>
            </div>
          </div>
        </header>

        {/* Key Technical Highlights */}
        <section aria-labelledby="key-specs-title">
          <h2 id="key-specs-title" className="eyebrow" style={{ marginTop: "1rem" }}>
            Technical Architecture &amp; Metrics
          </h2>
          <div className="case-study-stats">
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">100%</span>
              <span className="case-study-stat-card__title">Shared Codebase</span>
              <span className="case-study-stat-card__desc">
                Single TypeScript repository powering native Android, iOS, and responsive web builds.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">SDK 54</span>
              <span className="case-study-stat-card__title">Modern Expo Stack</span>
              <span className="case-study-stat-card__desc">
                React Native 0.81 with New Architecture enabled (TurboModules + Fabric rendering).
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">7-Day</span>
              <span className="case-study-stat-card__title">Smart Catch-Up Plan</span>
              <span className="case-study-stat-card__desc">
                Dynamic algorithm that turns missed habit days into progressive, achievable recovery targets.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">SecureStore</span>
              <span className="case-study-stat-card__title">Encrypted Storage</span>
              <span className="case-study-stat-card__desc">
                Hardware-backed Keychain / Keystore session persistence with passwordless email OTP.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">Razorpay</span>
              <span className="case-study-stat-card__title">Tiered Subscriptions</span>
              <span className="case-study-stat-card__desc">
                Free vs Premium entitlement gating with in-app upgrade checkout and signature audits.
              </span>
            </div>
            <div className="case-study-stat-card">
              <span className="case-study-stat-card__number">Deep-Linked</span>
              <span className="case-study-stat-card__title">Push Reminders</span>
              <span className="case-study-stat-card__desc">
                Scheduled notifications that resolve typed routes directly via Expo Router navigation.
              </span>
            </div>
          </div>
        </section>

        {/* Technical Deep Dives */}
        <div className="case-study-grid">
          {/* Section 1: Problem & Vision */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Product Vision</span>
              <h2 className="case-study-section__title">Overcoming Habit Abandonment &amp; App Fragmentation</h2>
            </div>
            <p>
              Most productivity apps force users into siloed tools: one app for habit streaks, another
              for water tracking, a third for to-do lists, and a fourth for calorie monitoring. When
              users inevitably break a 14-day streak, conventional apps punish them with a demoralizing
              &ldquo;0-day&rdquo; reset, which psychological studies show is the #1 driver of habit app abandonment.
            </p>
            <p>
              <strong>My Daily Buddy</strong> was designed to solve both problems:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Single Unified Dashboard:</strong> Daily habits, goals, task checklists, hydration
                meters, and nutrition intake consolidated into one fluid, glanceable view.
              </li>
              <li>
                <strong>Anti-Demoralization &ldquo;Smart Catch-Up&rdquo;:</strong> Instead of wiping progress
                when life gets busy, an intelligent 7-day rehabilitation planner breaks missed tasks into
                manageable micro-adjustments that users can review and accept.
              </li>
              <li>
                <strong>Frictionless Authentication:</strong> Zero password fatigue—fast email OTP verification
                stored securely in device hardware so users never get logged out unexpectedly.
              </li>
            </ul>
          </section>

          {/* Section 2: Code Structure */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Architecture</span>
              <h2 className="case-study-section__title">Feature-Sliced Structure &amp; Typed Routing</h2>
            </div>
            <p>
              The application is structured using a strict <strong>feature-driven modular architecture</strong>.
              Every major domain contains its own UI components, state management custom hooks, and API services:
            </p>
            <div className="case-study-code">
              {`src/
├── app/                      # Expo Router (file-based typed routes)
│   ├── (auth)/               # Login, Register, OTP Verification
│   ├── (tabs)/               # Bottom tab screens: Home, Habits, Goals, Health, Profile
│   └── modals/               # AddHabit, SmartCatchUp, SubscriptionUpgrade
├── features/
│   ├── habits/               # hooks/use-habits.ts, services/habits.api.ts, components/
│   ├── goals/                # hooks/use-goals.ts, services/goals.api.ts
│   ├── health/               # hooks/use-health.ts, components/WaterTracker, CalorieChart
│   ├── reminders/            # Notification scheduling & trigger builders
│   └── subscription/         # Razorpay checkout modal & tier entitlement guards
├── context/
│   └── AuthContext.tsx       # SecureStore token bootstrap & global session state
├── components/ui/            # Design system: Button, Card, Input, FilterChips, Modal
└── constants/
    ├── Colors.ts             # Light/Dark design tokens (#4F8EF7, #6366F1)
    └── Layout.ts             # 8/16/24px spacing grid`}
            </div>
            <p>
              Each feature encapsulates business logic inside custom React hooks (such as <code>useHabits()</code>,{" "}
              <code>useGoals()</code>, and <code>useHealth()</code>) providing optimistic local cache updates,
              offline resilience, and clean separation between UI rendering and network IO.
            </p>
          </section>

          {/* Section 3: Smart Catch-Up Algorithm */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Algorithm Design</span>
              <h2 className="case-study-section__title">The 7-Day &ldquo;Smart Catch-Up&rdquo; Recovery Engine</h2>
            </div>
            <p>
              When a user opens the app after missing 2 or more consecutive days, the app detects the
              broken streak and triggers the <strong>Smart Catch-Up</strong> engine rather than punishing them:
            </p>
            <div className="case-study-code">
              {`// Core logic for synthesizing an adaptive recovery schedule:
export function generateCatchUpPlan(habit: Habit, missedDays: number): RecoveryPlan {
  const baseTarget = habit.targetValue;
  const backlogDebt = missedDays * baseTarget;

  // Distribute backlog gradually across 7 recovery days with diminishing slope
  const dailyIncrement = Math.ceil((backlogDebt * 0.5) / 7);
  const adjustedDailyTarget = baseTarget + dailyIncrement;

  return {
    habitId: habit.id,
    missedDays,
    recommendedDailyTarget: adjustedDailyTarget,
    gracePeriodDays: 7,
    schedule: Array.from({ length: 7 }, (_, i) => ({
      dayNumber: i + 1,
      target: adjustedDailyTarget,
      isCompleted: false,
    })),
  };
}`}
            </div>
            <p>
              Users are presented with an interactive modal showing their recovery trajectory. They can
              accept the suggested plan, adjust the intensity, or choose a clean restart—giving them complete
              autonomy over their routine.
            </p>
          </section>

          {/* Section 4: Security & Storage */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Security &amp; Auth</span>
              <h2 className="case-study-section__title">Hardware-Backed Keychain Security with Expo SecureStore</h2>
            </div>
            <p>
              Traditional mobile apps store auth tokens in unencrypted <code>AsyncStorage</code>, making them
              vulnerable to extraction on compromised devices. In My Daily Buddy:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Hardware Encryption:</strong> JWT access tokens and refresh tokens are encrypted using
                iOS Keychain Services and Android Keystore via <code>expo-secure-store</code>.
              </li>
              <li>
                <strong>Passwordless Email OTP:</strong> Eliminates brute-force credential stuffing and password
                reuse vulnerabilities with 6-digit cryptographic verification codes.
              </li>
              <li>
                <strong>Axios Interceptor Token Rotation:</strong> When an access token expires, an Axios
                response interceptor intercepts the 401, issues a refresh request with exponential backoff,
                and retries the original failed call invisibly to the user.
              </li>
            </ul>
          </section>

          {/* Section 5: Health & Wellness */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">Health Tracking</span>
              <h2 className="case-study-section__title">Hydration, Nutrition &amp; Metric Computations</h2>
            </div>
            <p>
              The health module provides responsive, tactile tracking designed for rapid logging:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Water Tracker:</strong> Incremental one-tap logging (250ml / 500ml) with an animated
                liquid progress ring and weekly intake bar graph.
              </li>
              <li>
                <strong>Meal &amp; Calorie Log:</strong> Categorized logging across Breakfast, Lunch, Dinner,
                and Snacks with daily calorie progress bars and macronutrient indicators.
              </li>
              <li>
                <strong>BMI Calculator:</strong> Computes Body Mass Index dynamically from height and weight
                inputs, mapping results into color-coded clinical categories with contextual health advice.
              </li>
            </ul>
          </section>

          {/* Section 6: Design System */}
          <section className="case-study-section">
            <div className="case-study-section__header">
              <span className="pill">UI/UX Polish</span>
              <h2 className="case-study-section__title">Mobile-First Design System &amp; Haptic Gamification</h2>
            </div>
            <p>
              The interface follows modern mobile design ergonomics:
            </p>
            <ul className="case-study-list">
              <li>
                <strong>Visual Identity:</strong> Primary Blue (<code>#4F8EF7</code>) paired with an Indigo
                accent (<code>#6366F1</code>), elevated cards with subtle ambient shadows, and the Inter typeface.
              </li>
              <li>
                <strong>Tactile Feedback:</strong> Integrated <code>expo-haptics</code> on button presses,
                checkbox completion, and streak achievements to produce satisfying physical feedback.
              </li>
              <li>
                <strong>Dual Theme Support:</strong> Seamless Light and Dark mode transitions with persistent
                theme state stored in preferences.
              </li>
              <li>
                <strong>New Architecture Ready:</strong> Built on React Native 0.81 targeting Android API 24–35,
                leveraging the Fabric C++ renderer and TurboModules for 60fps animations.
              </li>
            </ul>
          </section>
        </div>

        {/* Call to Action */}
        <section className="case-study-cta-box">
          <span className="pill">Open Source on GitHub</span>
          <h2 className="h2" style={{ maxWidth: "34rem" }}>
            Explore the Codebase
          </h2>
          <p className="lead" style={{ maxWidth: "36rem", margin: 0 }}>
            Inspect the full React Native and Expo implementation, custom hooks, typed routes, and
            architectural patterns directly on GitHub.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
            <a
              href="https://github.com/dheeraj0808/my_daily_buddy_mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View GitHub Repository ↗
            </a>
            <Link href="/" className="btn btn-ghost">
              Back to Portfolio
            </Link>
            <Link href="/case-study/wenuru" className="btn btn-ghost">
              Wenuru Case Study →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
