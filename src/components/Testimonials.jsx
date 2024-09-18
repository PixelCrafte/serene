import { PrismicNextImage } from '@prismicio/next';

const TestimonialsSection = ({testimonials}) => {

    return (
      <section className="bg-gray-100 py-12 px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
  
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg slide-in-bottom">
              {/* Image */}
              <div className="flex justify-center mb-4">
                <PrismicNextImage
                  field={testimonial.data.image}
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
              </div>
  
              {/* Name */}
              <h3 className="text-xl font-bold text-center mb-4">{testimonial.data.author}</h3>
  
              {/* Testimonial Text */}
              <p className="text-center text-gray-600">{testimonial.data.testimony}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
export default TestimonialsSection; 
