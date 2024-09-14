import Image from 'next/image';
import Link from 'next/link';

const activities = [
  {
    title: 'Bungee Jumping at Victoria Falls',
    image: '/images/bungee.jpg',
    description: 'Experience the thrill of a lifetime by bungee jumping from one of the world’s most spectacular locations.',
    link: '/gallery',
  },
  {
    title: 'White Water Rafting',
    image: '/images/falls.jpg',
    description: 'Ride the rapids on the mighty Zambezi River for an exhilarating adventure.',
    link: '/gallery',
  },
  {
    title: 'Victoria Falls Helicopter Tours',
    image: '/images/falls.jpg',
    description: 'Get a bird’s eye view of the majestic Victoria Falls with our helicopter tours.',
    link: '/gallery',
  },
  {
    title: 'Devil\'s Pool Adventure',
    image: '/images/pool.jpg',
    description: 'Swim on the edge of the world’s largest waterfall in the famous Devil’s Pool.',
    link: '/gallery',
  },
];
const ActivitiesSection = () => {

  return (
    <section className="flex w-[400vw] panel-container gap-1">

{    activities.map((item, index) => (
    
    <article key={'activity-'+index} className="flex flex-col md:flex-row items-center md:items-start justify-between pt-20 pb-8 bg-main2 py-2 flex-shrink-0 flex-grow-0 w-screen panel h-screen">
      {/* Left side - Text content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12 flex flex-col items-center justify-center h-full">
        {/* Small link to about page */}
        <Link href="/about" className="text-black font-semibold hover:text-main2 mb-4 block border border-white rounded-full w-fit px-2 py-1">
          gallery
        </Link>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {item.title}
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 mb-6 text-center p-2">
            {item.description}
        </p>
      </div>
        {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
      <div className='w-[400px] h-[500px] flex items-center'>
        <Image
          src={item.image} // Replace with your image path
          width={400}
          height={600}
          alt="Serene Destination"
          objectFill='cover'
          className="object-cover rounded-lg shadow-lg block"
        />
      </div>
      </div>
    </article>
))}    
</section>
  );
};

export default ActivitiesSection;
