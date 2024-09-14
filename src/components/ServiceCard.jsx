import Image from "next/image"
const ServiceCard = ({title, description, details, image, index}) => {
  return (
    <article
        className={`relative bg-white shadow-lg rounded-lg overflow-hidden ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col-reverse md:flex-row items-center`}
    >
      <a id={title}></a>
        {/* Text Content */}
        <div className="p-8 md:w-1/2">
        <h3 className="text-2xl font-semibold text-black mb-4">{title}</h3>
        <p className="text-black slide-in-bottom text-sm font-light">{description}</p>
        <ul className='text-xs list-disc'>
            {details.map((item, index)=> <li key={title+index}>{item}</li>)}
        </ul>
        </div>
        
        {/* Image */}
        <div className="w-full md:w-1/2 h-[400px]">
        <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            width={500}
            height={500}
        />
        </div>

        {/* Floating Bubbles */}
        <div className="absolute top-6 left-6 w-12 h-12 bg-main2 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-main2 rounded-full opacity-50 animate-pulse"></div>
    </article>
  )
}

export default ServiceCard


