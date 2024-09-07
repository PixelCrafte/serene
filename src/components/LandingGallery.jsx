'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

const activities = [
  {
    title: 'Bungee Jumping at Victoria Falls',
    image: '/images/bg-1.jpg',
    description: 'Experience the thrill of a lifetime by bungee jumping from one of the world’s most spectacular locations.',
    link: '/gallery',
  },
  {
    title: 'White Water Rafting',
    image: '/images/sunset.jpg',
    description: 'Ride the rapids on the mighty Zambezi River for an exhilarating adventure.',
    link: '/gallery',
  },
  {
    title: 'Victoria Falls Helicopter Tours',
    image: '/images/zebras.jpg',
    description: 'Get a bird’s eye view of the majestic Victoria Falls with our helicopter tours.',
    link: '/gallery',
  },
  {
    title: 'Devil\'s Pool Adventure',
    image: '/images/bg-1.jpg',
    description: 'Swim on the edge of the world’s largest waterfall in the famous Devil’s Pool.',
    link: '/gallery',
  },
];
const ActivitiesSection = () => {

  return (
    <section className="overflow-x-scroll flex flex-row">

{    activities.map((item, index) => (
    
    <article key={'activity-'+index} className="flex flex-col md:flex-row items-center md:items-start justify-between px-8 bg-white py-2 flex-shrink-0 flex-grow-0 w-screen">
      {/* Left side - Text content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12 flex flex-col items-center justify-center">
        {/* Small link to about page */}
        <Link href="/about" className="text-black font-semibold text-sm hover:text-main2 mb-4 block border rounded-full w-fit px-2 py-1">
          gallery
        </Link>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {item.title}
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 mb-6">
            {item.description}
        </p>
      </div>
        {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Image
          src={item.image} // Replace with your image path
          alt="Serene Destination"
          width={350}
          height={500}
          className="object-cover rounded-lg shadow-lg block"
        />
      </div>
    </article>
))}    
</section>
  );
};

export default ActivitiesSection;
