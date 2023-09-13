import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-12 text-sm text-center">
      Built with <Link className="link text-stone-500" href={'https://nextjs.org/'}>Next.js</Link>,{' '}
      <Link className="link text-stone-500" href={'https://tailwindcss.com/'}>TailwindCSS</Link>, and
      <Link className="link text-stone-500" href={'https://vercel.com/'}> Vercel</Link>  
    </div>
  );
}
