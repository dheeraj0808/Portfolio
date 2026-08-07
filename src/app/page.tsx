import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Systems } from "@/components/Systems";
import { Projects } from "@/components/Projects";
import { OpenSource } from "@/components/OpenSource";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { site } from "@/data/site";
import {
  fetchGithubProfile,
  fetchGithubRepos,
  getLanguageStats,
  getShowcaseProjects,
} from "@/lib/github";

export default async function HomePage() {
  const [projects, profile, repos] = await Promise.all([
    getShowcaseProjects(),
    fetchGithubProfile(),
    fetchGithubRepos(),
  ]);
  const languages = await getLanguageStats(repos);
  const publicRepos = profile?.public_repos ?? repos.length;

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Systems />
        <Projects projects={projects} />
        <OpenSource />
        <About languages={languages} publicRepos={publicRepos} />
        <Experience />
        <Contact />
      </main>
      <footer className="footer container">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <a href={site.github} target="_blank" rel="noopener noreferrer">
          github.com/{site.handle}
        </a>
      </footer>
    </>
  );
}
