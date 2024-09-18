import ImageFull from './ImageFull';
import { PrismicNextImage } from '@prismicio/next';

const Gallery = ({images}) => {
  
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden bg-gray-200 group">
            <PrismicNextImage
              field={image.data.image}
              className="w-full h-full object-cover hover:scale-110 rounded-lg scale-x-left"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center group-hover:-translate-y-4 transition-transform duration-200">
              {image.data.description}
            </div>
            <ImageFull {...image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
