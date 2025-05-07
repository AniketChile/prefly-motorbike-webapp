import React, { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

function Hero() {
  const [showGallery, setShowGallery] = useState(false);
  const galleryRef = useRef(null);
  const scrollRef = useRef(null);

  const bikeImages = [
    '/bike.jpeg',
    '/bike2.jpeg',
    '/bike3.jpeg',
    '/bike4.jpeg',
    '/bike5.jpeg',
  ];

  useEffect(() => {
    if (showGallery) {
      galleryRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [showGallery]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    },
    onSwipedRight: () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section className="pt-16 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
          Introducing the <br />
          <span className="text-blue-600">PreFlyPro</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Engineered for speed. Designed for comfort. Built to last.
        </p>

        <div className="mt-8 sm:mt-10 flex justify-center flex-wrap gap-4">
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition duration-300">
            Explore Now
          </button>
          <button className="bg-white text-blue-600 border border-blue-600 px-6 sm:px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-50 transition duration-300">
            Watch Video
          </button>
        </div>

        <div className="mt-12 sm:mt-16">
          <img
            src="/bike.jpeg"
            alt="PreFlyPro Bike"
            className="mx-auto rounded-lg shadow-xl max-w-full h-auto"
          />
          <button
            onClick={() => setShowGallery(!showGallery)}
            className="m-2 bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-700 transition duration-300"
          >
            {showGallery ? 'Hide Bikes' : 'View More Bikes'}
          </button>
        </div>

        {showGallery && (
          <div className="mt-8 sm:mt-12 overflow-x-auto" ref={galleryRef}>
            <div
              {...handlers}
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 px-4 sm:px-6 pb-4 snap-x snap-mandatory overflow-x-scroll scroll-smooth"
            >
              {bikeImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Bike ${index + 1}`}
                  className="h-48 sm:h-60 w-full sm:w-auto rounded-lg shadow-md snap-start shrink-0"
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
