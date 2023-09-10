import Image from "next/image";
import working from '../../public/working.jpg'
import Link from "next/link";

export default function Hero() {
  return (
    <div className="lg:flex md:flex">
      <div className="w-full lg:w-1/2 text-stone-800">
        <div className="lg:pr-4 lg:pt-8 mb-4">
          <p className="text-2xl mb-4">
            Hey! I'm <span className="font-semibold">Obay</span> 👋
          </p>
          <p className="leading-relaxed lg:leading-loose">
            I enjoy building web applications. My interest about coding started back in 2012, I created a very simple calculator using <Link className="font-medium link" href={'https://www.freepascal.org/'}>Pascal</Link> instructions. 
            Right after, I completed my B.S. in Software Engineering, since then my journey as a software developer has been filled with exciting challenges and rewarding experiences.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image className="rounded-md saturate-50" alt='Working' src={working} />
      </div>
    </div>
  );
}