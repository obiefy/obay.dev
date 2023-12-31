import RepoCard from '@/components/github/repo';
import { getRepos } from '@/lib/github';
import DeveloperGallery from '@/components/gallery/developer';
import TravelerGallery from '@/components/gallery/traveler';

export default async function Home() {
  
  const repos = await getRepos();

  return (
    <div className="">
      <div className="flex">
        Hey there!
        <div className="w-2 ml-2 mr-6 -mt-2 text-2xl animate-wave">👋</div>
        I'm
      </div>
      <h1 className="mt-8 text-6xl lg:md:text-8xl font-extrabold font-calibre text-sky-700">Obay Adam</h1>
      <p className="">I'm a passionate software developer and I build web applications.</p>

      <div className="mt-8">
        <DeveloperGallery />
      </div>
      <p className="mt-8">My coding journey started back in 2012 when I took on the challenge of creating a basic calculator using Pascal instructions during high school. That was just the beginning!</p>
      <p className="mt-2">I went on to earn my B.S. in Software Engineering, and ever since, my path as a software developer has been an exhilarating ride filled with exciting challenges and deeply rewarding experiences.</p>
      
      <p className="mt-2">Besides my regular work on company projects, I find joy in contributing to open-source projects. Feel free to check out my open-source contributions</p>
      <div className="mt-8 grid md:grid-cols-2 gap-2">
        {repos.map((repo) => <RepoCard key={repo.name} repo={repo} />)}
      </div>
      
      <p className="mt-8">Beyond coding, I'm all about exploring new places, meeting fascinating people, and immersing myself in different cultures. When I'm not diving into lines of code or jet-setting to new destinations, you'll likely find me out for a run or on the football field. These activities keep me grounded and ready for the next coding adventure.</p>
      <div className="mt-8">
        <TravelerGallery />
      </div>

      <p className="mt-8">Thanks for stopping by my digital corner. Let's connect and team up to create something truly amazing! 😊🚀</p>
      
      
    </div>
  )
}
