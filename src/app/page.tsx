import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import GithubRepos from '@/components/github/repos';

export const metadata = {
  title: "obay.dev();"
}

export default async function Home() {
  return (
    <main className="px-8 lg:px-24">
      <Navbar />
      <Hero />
      <GithubRepos />
      <Footer />
    </main>
  )
}
