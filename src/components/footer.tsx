import Link from "next/link";

export default function Footer() {
  return (
    <div className="my-12 text-sm text-center">
      Built with <Link className="link" href={'https://nextjs.org/'}>Next.js</Link>, 
      <Link className="link" href={'https://tailwindcss.com/'}> TailwindCSS</Link>, and
      <Link className="link" href={'https://vercel.com/'}> Vercels</Link>  
    </div>
  );
}
