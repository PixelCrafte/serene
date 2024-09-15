import ServicesHeroSection from "./SevicesHeroSection";
import ServiceCard from "@/components/ServiceCard";
import services from "@/content/services";
import SpecialOffersSection from "./SpecialOffersSection";
import dynamic from "next/dynamic";
import BasicAnimations from "@/components/BasicAnimations";
import Link from "next/link";
import { BsArrowUpRight, BsEnvelope } from "react-icons/bs";
import { createClient } from '@/prismicio';
const HomeAnime = dynamic(() => import('@/components/HomeAnime'), {ssr:false})

/*const specialOffers = [
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
*/
const page = async () => {
  const client = createClient();
  const specialOffers = await client.getAllByType('special_offers');
  return (
    <main className='overflow-hidden w-full'>
      <ServicesHeroSection />
      <h1 className='text-3xl font-bold text-center my-8'>Our Services</h1>
      <section className="flex flex-col gap-4 p-2">
        {services.map((serv, index)=> <ServiceCard key={'services-map-'+{index}} {...serv} index={index}/>)}
      </section>
      <SpecialOffersSection specialOffers={specialOffers}/>
      <div className="relative flex bg-main2 flex-col items-center text-center p-4 rounded-md justify-center m-4 text-black">
        <h1 className={`text-4xl font-semibold mb-4`}>Lets get in touch</h1>
        <p className="text-lg mb-6 slide-in-bottom">Begin your vacation now!</p>
        <Link href="/contact" className="px-6 py-3 bg-black text-white font-semibold rounded-full block hover:bg-opacity-80 active:scale-95 text-lg spin-btn">
          Book right now <BsArrowUpRight className="inline-block"/>
        </Link>
        <Link href="#" className="block font-bold text-lg p-2 my-4 slide-in-bottom">
          <BsEnvelope className="inline-block" /> <span className="inline-block">email us</span>
        </Link>
      </div>
      < HomeAnime />
      <BasicAnimations />
    </main>
)
}

export default page
