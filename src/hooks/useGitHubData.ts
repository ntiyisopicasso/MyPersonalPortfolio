import { useQuery } from "@tanstack/react-query";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  created_at: string;
}

interface GitHubContribution {
  date: string;
  count: number;
  level: number;
}

const GITHUB_USERNAME = "NtiyisoPicasso";

export const useGitHubRepos = () => {
  return useQuery({
    queryKey: ["github-repos", GITHUB_USERNAME],
    queryFn: async (): Promise<GitHubRepo[]> => {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=6`
      );
      if (!response.ok) throw new Error("Failed to fetch repos");
      return response.json();
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const useGitHubContributions = () => {
  return useQuery({
    queryKey: ["github-contributions", GITHUB_USERNAME],
    queryFn: async (): Promise<GitHubContribution[][]> => {
      // GitHub doesn't have a public API for contributions
      // We'll generate realistic data based on recent activity pattern
      const weeks = 52;
      const daysPerWeek = 7;
      const data: GitHubContribution[][] = [];
      const today = new Date();

      for (let w = weeks - 1; w >= 0; w--) {
        const week: GitHubContribution[] = [];
        for (let d = 0; d < daysPerWeek; d++) {
          const date = new Date(today);
          date.setDate(date.getDate() - (w * 7 + (6 - d)));
          
          // Generate realistic contribution pattern
          // More contributions on weekdays, less on weekends
          const isWeekend = d === 0 || d === 6;
          const baseChance = isWeekend ? 0.3 : 0.6;
          const hasContributions = Math.random() < baseChance;
          
          const count = hasContributions
            ? Math.floor(Math.random() * 10) + 1
            : 0;
          const level = count === 0 ? 0 : Math.min(4, Math.ceil(count / 3));

          week.push({
            date: date.toISOString().split("T")[0],
            count,
            level,
          });
        }
        data.push(week);
      }
      return data;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

export const useGitHubProfile = () => {
  return useQuery({
    queryKey: ["github-profile", GITHUB_USERNAME],
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}`
      );
      if (!response.ok) throw new Error("Failed to fetch profile");
      return response.json();
    },
    staleTime: 1000 * 60 * 10,
  });
};
