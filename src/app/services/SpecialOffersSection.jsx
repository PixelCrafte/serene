import { PrismicNextImage } from '@prismicio/next';
const SpecialOffersSection = ({specialoffers}) => {
    /*const specialOffers = [
      {
        title: 'Luxury Safari Getaway',
        image: '/images/bg-1.jpg', // Replace with actual image
        description: 'Enjoy a luxurious 5-day safari in Zimbabwe’s most serene destinations with all-inclusive accommodation.',
        timeline: 'Available until December 31, 2024',
      },
      {
        title: 'Family Adventure Package',
        image: '/images/bg-1.jpg',
        description: 'A special family deal offering an exciting blend of tours and activities for all ages. Book now for discounted rates.',
        timeline: 'Limited offer - book by October 15, 2024',
      },
      {
        title: 'Romantic Getaway in Victoria Falls',
        image: '/images/bg-1.jpg',
        description: 'A perfect romantic escape to Victoria Falls with a special couple’s tour and candlelit dinners.',
        timeline: 'Offer ends February 14, 2025',
      },
    ];*/
  
    return (
      <div className="bg-main1 py-12 px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-main2 mb-8">Special Offers</h2>
  
        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group border-3 border-main2 slide-in-bottom">
              {/* Offer Image */}
              <div className="w-full h-64">
                <PrismicNextImage
                  field={offer.data.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
  
              {/* Offer Details */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-6 transition-opacity duration-500 group-hover:bg-opacity-80">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">{offer.data.title}</h3>
  
                {/* Description */}
                <p className="text-gray-200 mb-4">{offer.data.description}</p>
  
                {/* Timeline */}
                <span className="text-sm text-gray-300 font-light">{offer.data.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SpecialOffersSection;
  
