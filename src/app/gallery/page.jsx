import { createClient } from '@/prismicio';
import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';
import Gallery from './Gallery';
import dynamic from 'next/dynamic';
import { BsArrowUpRight, BsEnvelope } from 'react-icons/bs';

const BasicAnimations = dynamic(() => import('@/components/BasicAnimations'), { ssr: false });

const specialOffers = [
      {
        title: 'Luxury Safari Getaway',
        image: '/images/bg-1.jpg', // Replace with actual image
        description: 'Enjoy a luxurious 5-day safari in Zimbabwe’s most serene destinations with all-inclusive accommodation.',
        timeline: 'Available until December 31, 2024',
      },
      {
        title: 'Family Adventure Package',
        image: '/images/bg-1.jpg',
        description: 'A special family deal offering an exciting blend of tours and activities for all ages. Book now for discounted rates.',
        timeline: 'Limited offer - book by October 15, 2024',
      },
      {
        title: 'Romantic Getaway in Victoria Falls',
        image: '/images/bg-1.jpg',
        description: 'A perfect romantic escape to Victoria Falls with a special couple’s tour and candlelit dinners.',
        timeline: 'Offer ends February 14, 2025',
      },
    ];

async function Media ({images}) {
    const client = createClient();
    //const images = await client.getAllByType("ordinary_image");

return (
  <main>
      <h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">Activities</h1>
      {/* the gallery Slide here down here */}
      <p className='font-light text-black text-center slide-in-bottom'>Have a look at some of our activities</p>
      <Gallery images={images}/>
      <div className="relative flex bg-main2 flex-col items-center text-center p-4 rounded-md justify-center m-4 text-black">
        <h1 className={`text-4xl font-semibold mb-4`}>Lets get in touch</h1>
        <p className="text-lg mb-6 slide-in-bottom"> You can begin your vacation too, now!</p>
        <Link href="/contact" className="px-6 py-3 bg-black text-white font-semibold rounded-full block hover:bg-opacity-80 active:scale-95 text-lg spin-btn">
          Book right now <BsArrowUpRight className="inline-block"/>
        </Link>
        <Link href="#" className="block font-bold text-lg p-2 my-4 slide-in-bottom">
          <BsEnvelope className="inline-block" /><span className="inline-block">email us</span>
        </Link>
      </div>
      <BasicAnimations />
  </main>
 )
}

export default Media;
