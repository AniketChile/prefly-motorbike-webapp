import React from 'react';

function Gallery(props) {
    return (
        <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Stunning Design</h2>
          <div className="grid grid-cols-3 gap-6">
            <img src="/api/placeholder/400/400" alt="Bike Front View" className="rounded-lg shadow-md" />
            <img src="/api/placeholder/400/400" alt="Bike Side View" className="rounded-lg shadow-md" />
            <img src="/api/placeholder/400/400" alt="Bike Detail View" className="rounded-lg shadow-md" />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <img src="/api/placeholder/600/300" alt="Bike in Action" className="rounded-lg shadow-md" />
            <img src="/api/placeholder/600/300" alt="Bike Components" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>
    );
}

export default Gallery;