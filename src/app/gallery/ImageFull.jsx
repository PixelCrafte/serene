'use client';
import { useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const ImageFull = ({ src, description }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <>
      <button
        onClick={openFullScreen}
        className="absolute top-2 right-2 text-black bg-white p-2 rounded-full space-x-2 group-hover:translate-y-4 group-hover:scale-110 transition duration-200 ease-linear"
      >
        <span className='inline-block'>View</span> <BsArrowUpRight className='inline-block' />
      </button>
      {isFullScreen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <button
            onClick={closeFullScreen}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
          <img
            src={'/images/' + src}
            className="w-full h-full max-w-4xl max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default ImageFull;
