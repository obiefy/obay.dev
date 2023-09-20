import Image from "next/image";

import image1 from "../../../public/images/developer/1.jpg";
import image2 from "../../../public/images/developer/2.jpg";
import image3 from "../../../public/images/developer/3.jpeg";
import image4 from "../../../public/images/developer/4.jpg";
import image5 from "../../../public/images/developer/5.jpg";

export default function DeveloperGallery() {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-2">
      <Image
        className="image row-span-2 col-span-2"
        alt="Working at a library"
        src={image1}
        quality={80}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <Image
        className="image md:row-span-2"
        alt="Working from home :)"
        src={image2}
        quality={50}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <Image
        className="image"
        alt="Working from home :)"
        src={image3}
        quality={40}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <Image
        className="image"
        alt="Working from home :)"
        src={image4}
        quality={40}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <Image
        className="image object-left-bottom"
        alt="Working from home :)"
        src={image5}
        quality={40}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
}
