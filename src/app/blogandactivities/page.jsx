import BlogComponent from './BlogComponent';
import ActivityComponent from './ActivityComponentr';

const TourismPage = () => {
    return (
      <div className="bg-main1 text-white min-h-screen">
        {/* Hero section or introductory content */}
        <section className="w-full h-[50vh] relative bg-main2">
          <svg
            className="absolute bottom-0 w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path fill="#main1" fillOpacity="1" d="M0,160L1440,320L1440,320L0,320Z"></path>
          </svg>
          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">Explore Our Blogs & Activities</h1>
          </div>
        </section>
  
        {/* Blog Section */}
        <section className="container mx-auto my-12">
          <h2 className="text-3xl font-semibold mb-8">Travel Blogs</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <BlogComponent
              image="/path-to-image.jpg"
              title="Best Beaches in the World"
              description="Explore the top beach destinations..."
              listItems={['Maldives', 'Hawaii', 'Bora Bora', 'Santorini', 'Bahamas']}
            />
            {/* Add more BlogComponent instances here */}
          </div>
        </section>
  
        {/* Activities Section */}
        <section className="container mx-auto my-12">
          <h2 className="text-3xl font-semibold mb-8">Popular Activities</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <ActivityComponent
              image="/path-to-activity.jpg"
              title="Mountain Hiking"
              description="Challenge yourself by hiking through scenic trails."
            />
            {/* Add more ActivityComponent instances here */}
          </div>
        </section>
  
        {/* Add a curved SVG at the bottom */}
        <svg
          className="w-full h-32 mt-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path fill="#main2" fillOpacity="1" d="M0,224L1440,320L1440,320L0,320Z"></path>
        </svg>
      </div>
    );
  };
  
  export default TourismPage;
  