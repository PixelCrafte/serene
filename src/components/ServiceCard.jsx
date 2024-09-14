import Image from "next/image";
import { GiMountains, GiWaterfall, GiHelicopter, GiWaveSurfer } from 'react-icons/gi'; // Example icons

const ServiceCard = ({ title, description, details, image, index }) => {
  // Sample icons for different services
  const icons = {
    "Bungee Jumping": <GiMountains size={40} className="text-yellow-400" />,
    "White Water Rafting": <GiWaveSurfer size={40} className="text-yellow-400" />,
    "Helicopter Tours": <GiHelicopter size={40} className="text-yellow-400" />,
    "Devil's Pool Adventure": <GiWaterfall size={40} className="text-yellow-400" />,
  };

  return (
    <article
      className={`relative bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex flex-col-reverse md:flex-row items-center`}
    >
      <a id={title}></a>
      
      {/* Text Content */}
      <div className="p-8 md:w-1/2 flex flex-col justify-center space-y-4">
        <div className="flex items-center space-x-3">
          {/* Icon (if available) */}
          {icons[title]}
          
          {/* Title */}
          <h3 className="text-4xl font-bold text-gray-800">{title}</h3>
        </div>

        <p className="text-lg text-gray-700 slide-in-bottom leading-relaxed">
          {description}
        </p>

        <ul className="text-sm list-disc pl-5 space-y-1 text-gray-600">
          {details.map((item, index) => (
            <li key={title + index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 h-[400px] relative">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-tr-2xl rounded-bl-2xl"
          width={500}
          height={500}
        />
        {/* Wave effect */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>

      {/* Floating Circular Bubbles */}
      <div className="absolute top-6 left-6 w-12 h-12 bg-yellow-400 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-6 right-6 w-16 h-16 bg-yellow-400 rounded-full opacity-50 animate-pulse"></div>
    </article>
  );
};

export default ServiceCard;
