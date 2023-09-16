import { Analytics } from '@vercel/analytics/react';

import { calibre, sfmono } from '@/lib/fonts'
import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import developer from '../../public/images/developer/1.jpg';

export const metadata: Metadata = {
  title: 'Obay Adam',
  description: "I'm a passionate software developer and I build web applications.",
  icons: [],
  keywords: ['development', 'coding', 'developer', 'software developer', 'software engineer', 'obay', 'obiefy'],
  
  openGraph: {
    type: 'website',
    title: 'Obay Adam',
    description: "I'm a passionate software developer and I build web applications.",
    images: developer.src,
    url: 'https://obay.dev',
  },
  twitter: {
    title: 'Obay Adam',
    description: "I'm a passionate software developer and I build web applications.",
    images: developer.src,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-sfmono bg-slate-200 text-sm text-slate-900 ${calibre.variable} ${sfmono.variable}`}>
        <main className="max-w-2xl px-4 mb-8 mx-auto">

          <nav className="flex justify-between w-full mb-8 py-8">
            <Link href={'/'} className="link">
              <div className={``}>
                <span className="text-sky-700">obay</span>.<span className="text-sky-700">dev</span>();
              </div>
            </Link>
            <div className="flex">
              <Link className="flex mr-4 text-sky-700 link" href="https://www.linkedin.com/in/obayadam">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
                LinkedIn
              </Link>
              <Link className="flex link text-black" href="https://github.com/obiefy">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
                GitHub
              </Link>
            </div>
          </nav>

          <div>{children}</div>

          <div className="mt-12 text-center">
            Built wisth <Link className="link text-sky-700" href={'https://nextjs.org/'}>Next.js</Link>,{' '}
            <Link className="link text-sky-700" href={'https://tailwindcss.com/'}>TailwindCSS</Link>, and
            <Link className="link text-sky-700" href={'https://vercel.com/'}> Vercel</Link>. 
          </div>

        </main>

        <Analytics />
      </body>
    </html>
  )
}
