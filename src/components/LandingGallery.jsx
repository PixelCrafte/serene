import Image from 'next/image';
import Link from 'next/link';
import { GiMountains, GiWaterfall, GiWaveSurfer } from 'react-icons/gi';
import { FaHelicopter } from 'react-icons/fa';

const activities = [
  {
    title: 'Bungee Jumping at Victoria Falls',
    image: '/images/bungee.jpg',
    description: 'Experience the thrill of a lifetime by bungee jumping from one of the world’s most spectacular locations.',
    link: '/gallery',
    icon: <GiMountains size={50} className="text-main1 text-3xl" />
  },
  {
    title: 'White Water Rafting',
    image: '/images/falls.jpg',
    description: 'Ride the rapids on the mighty Zambezi River for an exhilarating adventure.',
    link: '/gallery',
    icon: <GiWaterfall size={50} className="text-main1" />
  },
  {
    title: 'Victoria Falls Helicopter Tours',
    image: '/images/falls.jpg',
    description: 'Get a bird’s eye view of the majestic Victoria Falls with our helicopter tours.',
    link: '/gallery',
    icon: <FaHelicopter size={50} className="text-main1" />
  },
  {
    title: 'Devil\'s Pool Adventure',
    image: '/images/pool.jpg',
    description: 'Swim on the edge of the world’s largest waterfall in the famous Devil’s Pool.',
    link: '/gallery',
    icon: <GiWaveSurfer size={50} className="text-main1" />
  },
];

const ActivitiesSection = () => {
  return (
    <section className="flex w-[400vw] panel-container gap-1">
      {activities.map((item, index) => (
        <article key={'activity-' + index} className="flex flex-col md:flex-row items-center md:items-start justify-between bg-main2 py-6 md:py-12 px-4 md:px-8 flex-shrink-0 flex-grow-0 w-screen panel h-screen shadow-lg">
          {/* Left side - Image */}
          <div className="w-full md:w-2/3 flex items-center justify-center md:h-full">
            <div className="md:w-[70%] md:h-[500px] w-[90%] mt-16 flex items-center overflow-hidden rounded-lg shadow-2xl border-4 border-yellow-400">
              <Image
                src={item.image}
                width={800}
                height={600}
                alt={item.title}
                className="object-cover rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-center h-full text-center md:text-left space-y-4 md:space-y-6">
            {/* Icon */}
            <div className="flex items-center justify-center text-main1 text-center">
              {item.icon}
            </div>

            {/* Link to gallery */}
            <Link href={item.link} className="text-main1 font-semibold hover:text-white transition-colors duration-300 mb-4 border border-main1 rounded-full w-fit px-3 py-1">
              Explore Gallery
            </Link>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">
              {item.title}
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed max-w-md">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ActivitiesSection;
