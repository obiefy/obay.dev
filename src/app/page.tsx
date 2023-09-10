import { getRepos } from '@/lib/github'
import RepoCard from '@/components/github/repo';

export default async function Home() {
  const repos = await getRepos();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {repos.map((repo) => <RepoCard key={repo.name} repo={repo} />)}
      </div>
    </main>
  )
}
