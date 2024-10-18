// components/HeroSection.js
import Image from 'next/image';
import { Montserrat, Open_Sans } from 'next/font/google'
import Link from 'next/link';
import { BsArrowUpRight } from "react-icons/bs";
import dynamic from 'next/dynamic';

const HomeAnime = dynamic(() => import('./HomeAnime'), { ssr: false });

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700'] });

const HeroSection = () => {
  return (
    <section className="relative h-[75vh] bg-gray-900 text-white flex items-center sm:m-4 sm:rounded-md">
      {/* Background image */}
      <div className="absolute inset-0 rounded-md">
        <Image
          src="/images/falls.jpg" // Use the path to your image in the public folder
          alt="Travel Adventure in Zimbabwe"
          layout="fill"
          objectFit="cover"
          className="opacity-100 sm:rounded-md" // Adjust opacity for the image
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-[500px] bg-white bg-opacity-5 backdrop-blur-md p-4 rounded-md sm:ml-8 md:ml-16 hero-div">
        <span className="bg-white rounded-full p-2 bg-opacity-20 block my-4 w-fit self-start hero-text-1">An exceptional travel agent</span>
        <h1 className={`text-4xl font-semibold mb-4 ${montserrat.className} hero-text-2`}>Explore Your Wildest Dreams In Zimbabwe</h1>
        <p className="text-lg mb-6 punchline">We strive to provide a memorable experience of a lifetime and a chance to discover your dream destination in Zimbabwe.</p>
        <Link href="/services" className="px-6 py-3 bg-white text-black font-semibold rounded-full self-start block hover:bg-opacity-80 active:scale-95 call-btn" id='call-btn-1'>
          Discover Our Packages <BsArrowUpRight className="inline-block"/>
        </Link>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0 sm:rounded-md"></div>
      < HomeAnime />
    </section>
  );
};

export default HeroSection;
