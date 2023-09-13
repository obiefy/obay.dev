import { calibre, sfmono } from '@/lib/fonts'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'obay.dev();',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-working font-sfmono ${calibre.variable} ${sfmono.variable}`}>
        <main className="bg-stone-200/90">{children}</main>
      </body>
    </html>
  )
}
