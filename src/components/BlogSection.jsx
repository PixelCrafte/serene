const BlogSection = () => {
    const blogs = [
      {
        title: 'Top 5 Must-Do Activities in Victoria Falls',
        image: '/images/zebras.jpg', // Replace with the actual image path
        excerpt: 'Discover the top 5 thrilling activities that make Victoria Falls the adventure capital of Africa.',
        bullets: ['Bungee Jumping', 'White Water Rafting', 'Helicopter Tours', 'Devil\'s Pool', 'Safari Adventures'],
      },
      {
        title: 'A Guide to Visiting Zimbabwe\'s National Parks',
        image: '/images/sunset.jpg',
        excerpt: 'Zimbabwe is home to some of the most stunning national parks. Here’s a guide to help you explore them.',
        bullets: ['Hwange National Park', 'Matobo National Park', 'Mana Pools', 'Chimanimani Mountains'],
      },
      {
        title: 'Why You Should Visit Victoria Falls',
        image: '/images/bg-1.jpg',
        excerpt: 'Victoria Falls is a UNESCO World Heritage Site and one of the most breathtaking natural wonders in the world.',
        bullets: ['Waterfall Hikes', 'Scenic Views', 'Cultural Experiences', 'Wildlife Sightings'],
      },
    ];
  
    return (
      <div className="bg-gray-100 py-12 px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Blog</h2>
  
        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              {/* Blog Image */}
              <div className="mb-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
  
              {/* Blog Title */}
              <h3 className="text-xl font-bold mb-4">{blog.title}</h3>
  
              {/* Blog Excerpt */}
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
  
              {/* Bulleted List */}
              <ul className="list-disc list-inside text-gray-600">
                {blog.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BlogSection;
  