import ServicesHeroSection from "./SevicesHeroSection";
import ServiceCard from "@/components/ServiceCard";
import services from "@/content/services";
import SpecialOffersSection from "./SpecialOffersSection";
import dynamic from "next/dynamic";
import BasicAnimations from "@/components/BasicAnimations";
import Link from "next/link";
import { BsArrowUpRight, BsEnvelope } from "react-icons/bs";
import { createClient } from '@/prismicio';
import { revalidateTag } from "next/cache";

export const metadata = {
  title: 'Serene Safaris | Services - Tours, Transfers, and Accommodations',
  description: 'Explore the wide range of services offered by Serene Safaris, including guided tours, airport transfers, luxury accommodations, and thrilling activities in Victoria Falls, Zimbabwe.',
  keywords: ['Victoria Falls tours', 'Zimbabwe safari services', 'Serene Safaris transfers', 'Victoria Falls accommodations', 'adventure activities', 'airport transfers', 'guided tours'],
  url: 'https://www.serenesafaris.co.zw/services',
  canonical: 'https://www.serenesafaris.co.zw/services',
  openGraph: {
    title: 'Serene Safaris | Services - Tours, Transfers, and Accommodations',
    description: 'Discover Serene Safaris’ comprehensive services, from guided tours and airport transfers to luxury accommodations and thrilling activities in Victoria Falls.',
    url: 'https://www.serenesafaris.co.zw/services',
    siteName: 'Serene Safaris',
    image: '/images/serenesafaris-1.jpg',  // Add a relevant image
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serene Safaris | Services - Tours, Transfers, and Accommodations',
    description: 'Explore a wide range of services, including guided tours, airport transfers, and accommodations in Victoria Falls with Serene Safaris.',
  },
};


const HomeAnime = dynamic(() => import('@/components/HomeAnime'), {ssr:false})

const page = async () => {
  const client = createClient();
  const specialOffers = await client.getAllByType('special_offers');
  revalidateTag("prismic");
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
        <Link href="tel:+263772563395" className="px-6 py-3 bg-black text-white font-semibold rounded-full block hover:bg-opacity-80 active:scale-95 text-lg spin-btn">
          Call Us <BsArrowUpRight className="inline-block"/>
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
