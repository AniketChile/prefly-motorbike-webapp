import React, { useState, useRef } from 'react';

function Hero(props) {
  const [showGallery, setShowGallery] = useState(false);
  const galleryRef = useRef(null);

  const bikeImages = [
    '/bike.jpeg',
    '/bike2.jpeg',
    '/bike3.jpeg',
    '/bike4.jpeg',
    '/bike5.jpeg',
  ]; // Your images in /public

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h1 className="text-7xl font-bold tracking-tight">
          Introducing the <br />
          <span className="text-blue-600">PreFlyPro</span>
        </h1>
        <p className="mt-6 text-2xl text-gray-600 max-w-3xl mx-auto">
          Engineered for speed. Designed for comfort. Built to last.
        </p>

        <div className="mt-10 flex justify-center flex-wrap gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition duration-300">
            Explore Now
          </button>
          <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-50 transition duration-300">
            Watch Video
          </button>
          <button
            onClick={() => {
              setShowGallery(!showGallery);
              setTimeout(() => {
                galleryRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
              }, 100); // Scroll to start on open
            }}
            className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-700 transition duration-300"
          >
            {showGallery ? 'Hide Bikes' : 'View More Bikes'}
          </button>
        </div>

        <div className="mt-16">
          <img src="/bike.jpeg" alt="PreFlyPro Bike" className="mx-auto rounded-lg shadow-xl" />
        </div>

        {showGallery && (
          <div className="mt-16 overflow-x-auto scrollbar-hide" ref={galleryRef}>
            <div className="flex gap-6 px-4 pb-4 snap-x snap-mandatory overflow-x-scroll scroll-smooth">
              {bikeImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Bike ${index + 1}`}
                  className="h-60 w-auto rounded-lg shadow-md snap-start shrink-0"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
