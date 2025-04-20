import React from 'react';

function Hero(props) {
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
        <div className="mt-10">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition duration-300">
            Explore Now
          </button>
          <button className="ml-4 bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-50 transition duration-300">
            Watch Video
          </button>
        </div>
        <div className="mt-16">
          <img src="/api/placeholder/1200/600" alt="PreFlyPro Bike" className="mx-auto rounded-lg shadow-xl" />
        </div>
      </div>
    </section>
    );
}

export default Hero;