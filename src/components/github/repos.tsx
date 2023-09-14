import { getRepos } from "@/lib/github";
import RepoCard from '@/components/github/repo';
import Code from "@/components/code";

export default async function Repos () {
  const repos = await getRepos();

  return(
    <div className="mt-16">
      <div className="flex mb-8 text-stone-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-stone-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
        </svg>
        <Code className="ml-2 text-2xl font-medium" method="openSource"/>
      </div>
      <div className="my-4 grid lg:grid-cols-2 gap-3 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        {repos.map((repo) => <RepoCard key={repo.name} repo={repo} />)}
      </div>
    </div>
  );
}