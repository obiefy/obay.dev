import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import GithubRepos from '@/components/github/repos';
import About from '@/components/about';
import Image from 'next/image';
import working from '../../public/images/working.jpg'

export const metadata = {
  title: "obay.dev();"
}

export default async function Home() {
  return (
    <main className="lg:flex">
      <div className="w-full bg-cool bg-left">
        <div className="bg-stone-100/30 py-8 px-4">
          <div className="w-full text-stone-800">
            <div className="lg:pr-4 mb-4">
              <div className="mb-4 flex">
                Hey there! 
                <div className="w-2 ml-2 mr-6 -mt-2 text-2xl animate-wave">👋</div>
                I&apos;m
              </div>
              <h1 className="mt-8 mb-4 text-8xl font-extrabold font-calibre text-sky-700">Obay Adam</h1>
              <div className="text-2xl">
                I build web applications
              </div>
            </div>
          </div>
          <GithubRepos />
          <About />
          <Footer />
        </div>
      </div>
      <div className="w-full">
        <div className="lg:fixed h-full">
          <Image className="object-cover w-full h-full saturate-50" alt='Working' src={working} />
        </div>
      </div>
    </main>
  )
}
