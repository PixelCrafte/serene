import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';

const ActivitiesSection = ({activities}) => {
  return (
    <section className="flex w-[400vw] panel-container gap-1">
      {activities.map((item, index) => (
        <article key={'activity-' + index} className="flex flex-col md:flex-row items-center md:items-start justify-between bg-main2 py-6 md:py-12 px-4 md:px-8 flex-shrink-0 flex-grow-0 w-screen panel h-screen shadow-lg">
          {/* Left side - Image */}
          <div className="w-full md:w-2/3 flex items-center justify-center md:h-full">
            <div className="md:w-[70%] md:h-[500px] w-[90%] mt-16 flex items-center overflow-hidden rounded-lg shadow-2xl border-4 border-yellow-400">
              <PrismicNextImage
                field={item.data.image}
                className="object-cover rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-center h-full text-center md:text-left space-y-4 md:space-y-6">
            {/* Icon */}

            {/* Link to gallery  */}
            <Link href='/blogandactivities' className="text-main1 font-semibold hover:text-white transition-colors duration-300 mb-4 border border-main1 rounded-full w-fit px-3 py-1">
              Explore Activities
            </Link>
	   
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">
              {item.data.title}
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed max-w-md">
              {item.data.activity_description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ActivitiesSection;
