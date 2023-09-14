import Image from "next/image";
import traveler from '../../public/images/traveler.png'
import Link from "next/link";

export default function Hero() {
  return (
    <div className="lg:flex md:flex">
      <div className="w-full lg:w-1/2 text-stone-800">
        <div className="lg:pr-4 mb-4">
          <div className="mb-4 flex">
            Hey there! 
            <div className="w-2 ml-2 mr-6 -mt-2 text-2xl animate-wave">👋</div>
            I&apos;m
          </div>
          <h1 className="mt-8 mb-4 text-9xl font-extrabold font-calibre text-sky-700">Obay Adam</h1>
          <div className="text-2xl">
            I build web applications
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image className="rounded-md saturate-50" alt='Working' src={traveler} />
      </div>
    </div>
  );
}