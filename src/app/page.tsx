import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import GithubRepos from '@/components/github/repos';
import About from '@/components/about';
import Links from '@/components/links';
import Image from 'next/image';
import developer from '../../public/images/developer.jpg';

export default async function Home() {
  return (
    <main className="lg:flex">
      <div className="w-full bg-cool bg-left">
        <div className="bg-white/40 py-8 px-4">
          <div className="w-full text-stone-800">
            <div className="lg:pr-4 mb-4">
              <div className="mb-4 flex">
                Hey there! 
                <div className="w-2 ml-2 mr-6 -mt-2 text-2xl animate-wave">👋</div>
                I&apos;m
              </div>
              <h1 className="mt-8 mb-4 text-6xl lg:md:text-8xl font-extrabold font-calibre text-sky-700">Obay Adam</h1>
              <p className="text-xl lg:md:text-2xl">I build web applications</p>
              <Links />
            </div>
          </div>
          <Image className="sm:inline-block lg:hidden w-full h-full mt-12 saturate-50 rounded-md" alt="Obay Adam" src={developer} />
          <GithubRepos />
          <About />
          <Footer />
        </div>
      </div>
      <div className="hidden lg:md:inline-block w-full">
        <div className="lg:md:fixed h-full">
          <Image className="object-cover w-full h-full saturate-50" alt='Obay Adam' src={developer} />
        </div>
      </div>
    </main>
  )
}
