import BlogComponent from './BlogComponent';
import ActivityComponent from './ActivityComponent';
import BasicAnimations from '@/components/BasicAnimations';
import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';
import { createClient } from '@/prismicio';

export const metadata = {
  title: 'Serene Safaris | Activities - Thrilling Adventures in Victoria Falls',
  description: 'Explore thrilling activities and adventures in Victoria Falls with Serene Safaris. From safaris to bungee jumping, discover a wide range of experiences.',
  keywords: ['Victoria Falls activities', 'Zimbabwe adventures', 'Serene Safaris activities', 'game drives', 'bungee jumping', 'safaris', 'tours and adventures'],
  url: 'https://www.serenesafaris.co.zw/blogsandactivities',
  canonical: 'https://www.serenesafaris.co.zw/blogsandactivities',
  openGraph: {
    title: 'Serene Safaris | Activities - Thrilling Adventures in Victoria Falls',
    description: 'Discover a range of exciting activities in Victoria Falls, including safaris, sunset cruises, bungee jumping, and more, with Serene Safaris.',
    url: 'https://www.serenesafaris.co.zw/blogsandactivities',
    siteName: 'Serene Safaris',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serene Safaris | Activities - Thrilling Adventures in Victoria Falls',
    description: 'Explore a variety of activities offered by Serene Safaris, from safaris to adventure tours in Victoria Falls.',
  },
};


const TourismPage = async () => {
    const client = createClient();
    const activities = await client.getAllByType('activity_image');
    const blogs = await client.getAllByType('blog');

    return (
      <div className="bg-main1 text-white min-h-screen">
        {/* Hero section or introductory content */}
        <section className="w-full h-[35vh] relative bg-main2">
          <svg
            className="absolute bottom-0 w-full h-16 text-main1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path fill="#main1" fillOpacity="1" d="M0,160L1440,320L1440,320L0,320Z"></path>
          </svg>
          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">Explore Our Blogs & Activities</h1>
          </div>
          <Link href='/contact' className='text-3xl px-3 py-2 border-2 border-main1 spin-btn block mx-auto w-fit text-main1 rounded-full font-semibold hover:border-white active:scale-95'>Get In touch</Link>
        </section>
  
        {/* Blog Section */}
        <section className="mx-auto my-12 p-4">
          <h2 className="text-3xl font-semibold mb-8">Travel Blogs</h2>
          <div className="grid lg:grid-cols-3 gap-8">
	    {blogs && blogs.length > 0 && blogs.map((blog, idx) => (
		    <BlogComponent
		      key={idx}
              	      image={blog.data.image}
              	      title={blog.data.title}
                      description={blog.data.paragraph}
                      listItems={blog.data.items}
            	     />
	    ))}
          </div>
        </section>
  
        {/* Activities Section */}
        <section className="mx-auto my-12 p-4">
          <h2 className="text-3xl font-semibold mb-8">Popular Activities</h2>
          <div className="flex-col flex gap-4">
	  {activities && activities.length > 0 && activities.map((el, idx) => (
		  <ActivityComponent
		      key={idx}
		      image={el.data.image}
		      title={el.data.title}
		      description={el.data.activity_description}
		      index={idx}
		  />
	  ))
	  }
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
        <BasicAnimations />
      </div>
    );
  };
  
  export default TourismPage;
  
