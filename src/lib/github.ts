import { Repo } from "@/types";

export const getRepos = async (): Promise<Repo[]> => {
  return [await getRepo('obiefy/api-response'), await getRepo('obiefy/sudanese-oss'), await getRepo('obiefy/tookan-client')];
}

export const getRepo = async (name: string): Promise<Repo> => {
  const res = await fetch(`https://api.github.com/repos/${name}`, {
    next: {
      revalidate: 10,
    }
  });
  const repo = await res.json();

  return {
    name: repo.full_name,
    url: repo.html_url,
    description: repo.description,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
  };
} 