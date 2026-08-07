import { projectCopy, site } from "@/data/site";

export type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  homepage: string | null;
  topics: string[];
  pushed_at: string;
  fork: boolean;
};

export type Project = {
  name: string;
  description: string;
  url: string;
  liveUrl?: string;
  language: string | null;
  stars: number;
  category: string;
  highlights: string[];
  pushedAt: string;
};

const HEADERS = {
  Accept: "application/vnd.github+json",
  "User-Agent": "dheeraj-portfolio",
};

export async function fetchGithubProfile() {
  const res = await fetch("https://api.github.com/users/dheeraj0808", {
    headers: HEADERS,
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
}

export async function fetchGithubRepos(): Promise<GithubRepo[]> {
  const res = await fetch(
    "https://api.github.com/users/dheeraj0808/repos?per_page=100&sort=updated",
    {
      headers: HEADERS,
      next: { revalidate: 3600 },
    },
  );
  if (!res.ok) return [];
  return res.json();
}

export async function getShowcaseProjects(): Promise<Project[]> {
  const repos = await fetchGithubRepos();
  const byName = new Map(repos.map((r) => [r.name, r]));

  const projects: Project[] = [...site.featured];

  for (const name of site.showcase) {
    const repo = byName.get(name);
    const copy = projectCopy[name];
    if (!repo && !copy) continue;

    const live =
      name === "Spotify-Backend"
        ? "https://spotify-backend-3ouf.onrender.com/"
        : repo?.homepage || undefined;

    projects.push({
      name,
      description:
        copy?.blurb ||
        repo?.description ||
        "Project from github.com/dheeraj0808",
      url: repo?.html_url || `https://github.com/dheeraj0808/${name}`,
      liveUrl: live || undefined,
      language: repo?.language ?? null,
      stars: repo?.stargazers_count ?? 0,
      category: copy?.category || "Other",
      highlights: copy?.highlights || [],
      pushedAt: repo?.pushed_at || "",
    });
  }

  if (projects.length === site.featured.length) {
    for (const name of site.showcase) {
      const copy = projectCopy[name];
      if (!copy) continue;
      projects.push({
        name,
        description: copy.blurb,
        url: `https://github.com/dheeraj0808/${name}`,
        liveUrl:
          name === "Spotify-Backend"
            ? "https://spotify-backend-3ouf.onrender.com/"
            : undefined,
        language: null,
        stars: 0,
        category: copy.category,
        highlights: copy.highlights,
        pushedAt: "",
      });
    }
  }

  return projects;
}

export async function getLanguageStats(repos: GithubRepo[]) {
  const counts: Record<string, number> = {};
  for (const r of repos) {
    if (r.fork || !r.language) continue;
    counts[r.language] = (counts[r.language] || 0) + 1;
  }
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
}
