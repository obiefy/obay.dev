import Image from 'next/image';

import image1 from '../../../public/images/developer/1.jpg';
import image2 from '../../../public/images/developer/2.jpg';
import image3 from '../../../public/images/developer/3.jpeg';
import image4 from '../../../public/images/developer/4.jpg';
import image5 from '../../../public/images/developer/5.jpg';

export default function DeveloperGallery() {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-2">
      <Image className="image row-span-2 col-span-2" alt='Working' src={image1}/>
      <Image className="image md:row-span-2" alt='Working' src={image2}/>
      <Image className="image" alt='Working' src={image3}/>
      <Image className="image" alt='Working' src={image4}/>
      <Image className="image object-left-bottom" alt='Working' src={image5}/>
    </div>
  );
}