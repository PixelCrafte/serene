const TestimonialsSection = ({testimonials}) => {
/**    const testimonials = [
      {
        name:'John Doe',
        image:'/images/worship.jpg', // Replace with the actual image path
        text: 'Serene Safaris provided the most incredible travel experience of my life. From booking accommodations to organizing thrilling activities, everything was seamless and enjoyable!',
      },
      {
        name: 'Jane Smith',
        image: '/images/worship.jpg',
        text: 'Our family trip to Victoria Falls was unforgettable thanks to Serene Safaris. Their attention to detail and personalized services made all the difference. Highly recommend!',
      },
      {
        name: 'Michael Brown',
        image: '/images/worship.jpg',
        text: 'If you’re looking for adventure and comfort, Serene Safaris is the way to go! They curated a perfect holiday for us, and their local expertise was invaluable.',
      },
    ];
*/  
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
                <img
                  src={testimonial.data.image}
                  alt={testimonial.data.author}
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
  
