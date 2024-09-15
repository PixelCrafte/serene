const BlogComponent = ({ image, title, description, listItems }) => {
    return (
      <div className="bg-white text-black p-6 rounded-lg shadow-lg slide-in-bottom">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <ul className="list-disc list-inside">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BlogComponent;