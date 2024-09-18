import { PrismicNextImage } from '@prismicio/next';

const BlogSection = async ({blogs}) => {  
    return (
      <article className="bg-gray-100 py-12 px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Blog</h2> 
        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              {/* Blog Image */}
              <div className="mb-4 scale-x-left">
                <PrismicNextImage
		              field={blog.data.image}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              {/* Blog Title */}
              <h3 className="text-xl font-bold mb-4 slide-in-bottom">{blog.data.title}</h3>
  
              {/* Blog Excerpt */}
              <p className="text-gray-600 mb-4">{blog.data.paragraph}</p>
  
              {/* Bulleted List */}
                <ul className="list-disc list-inside text-gray-600">
                {blog.data.items.map((bullet, index) => (
                  <li key={index}>{bullet.list_item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    );
  };
  
  export default BlogSection;
  
