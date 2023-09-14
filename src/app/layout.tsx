import { calibre, sfmono } from '@/lib/fonts'
import './globals.css'
import type { Metadata } from 'next'
import developer from '../../public/images/developer.jpg';

export const metadata: Metadata = {
  title: 'Obay Adam',
  description: "Hi there! I'm a passionate software developer with a strong background in web development. Over the past 5 years, my journey as a developer has been filled with exciting challenges and rewarding experiences, and I'm always eager to take on new opportunities to grow both personally and professionally.",
  // TODO: Add icons
  icons: [],
  // TODO: Update keywords
  keywords: ['development', 'coding', 'developer', 'software developer', 'software engineer', 'obay', 'obiefy'],
  
  openGraph: {
    // type: 'website',
    title: 'Obay Adam',
    description: "Hi there! I'm a passionate software developer with a strong background in web development. Over the past 5 years, my journey as a developer has been filled with exciting challenges and rewarding experiences, and I'm always eager to take on new opportunities to grow both personally and professionally.",
    // TODO: Add image
    images: developer.src,
    url: 'https://obay.dev',
  },
  twitter: {
    // card: 'summary_large_image',
    title: 'Obay Adam',
    description: "Hi there! I'm a passionate software developer with a strong background in web development. Over the past 5 years, my journey as a developer has been filled with exciting challenges and rewarding experiences, and I'm always eager to take on new opportunities to grow both personally and professionally.",
    // url: 'https://obay.dev',
    images: developer.src,
    // domain: "obay.dev",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-sfmono ${calibre.variable} ${sfmono.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
