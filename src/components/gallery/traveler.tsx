import Image from 'next/image';

import image1 from '../../../public/images/traveler/1.jpeg';
import image2 from '../../../public/images/traveler/2.jpeg';
import image3 from '../../../public/images/traveler/3.jpeg';
import image4 from '../../../public/images/traveler/4.png';
import image5 from '../../../public/images/traveler/5.jpg';
import image6 from '../../../public/images/traveler/6.png';
import image7 from '../../../public/images/traveler/7.png';

export default function TravelerGallery() {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2">
      <Image className="col-span-2 row-span-2 image" alt="Paragliding for the first time in Oludeniz, Fethiye" src={image1}/>
      <Image className="md:row-span-2 image" alt="Backpacking in Turkey" src={image5}/>
      <Image className="md:row-span-2 image" alt="Skiing on the top of Uludag mountain in Bursa, Turkey" src={image2}/>
      <Image className="image" alt="Cycling in the princes island in Istanbul" src={image3}/>
      <Image className="image" alt="Backpacking in Fethiye" src={image4}/>
      <Image className="image" alt="FIFA World Cup Qatar 2022, England vs Senegal" src={image6}/>
      <Image className="image" alt="Tomb of Amyntas, Fethiye" src={image7}/> 
    </div>
  );
}