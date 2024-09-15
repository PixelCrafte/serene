const ActivityComponent = ({ image, title, description }) => {
    return (
      <div className="bg-white text-black p-6 rounded-lg shadow-lg flex">
        <img src={image} alt={title} className="w-32 h-32 object-cover rounded-lg mr-6" />
        <div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  