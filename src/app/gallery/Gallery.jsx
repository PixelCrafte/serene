import ImageFull from './ImageFull';

const Gallery = () => {
  const images = [
    {
      src: 'bg-1.jpg',
      description: 'no description yet so this will have to work for now',
    },
    {
      src: 'boat.jpg',
      description: 'no description yet so this will have to work for now',
    },
    {
      src: 'culture.jpg',
      description: 'no description yet so this will have to work for now',
    },
    {
      src: 'zebras.jpg',
      description: 'no description yet so this will have to work for now',
    },
    {
      src: 'worship.jpg',
      description: 'no description yet so this will have to work for now',
    },
    {
      src: 'sunset.jpg',
      description: 'no description yet so this will have to work for now',
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden bg-gray-200 group">
            <img
              src={'/images/' + image.src}
              className="w-full h-full object-cover hover:scale-110 rounded-lg scale-x-left"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center group-hover:-translate-y-4 transition-transform duration-200">
              {image.description}
            </div>
            <ImageFull {...image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
