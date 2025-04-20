import React from 'react';

function Features(props) {
    const features = [
        {
          title: "Carbon Fiber Frame",
          description: "Lightweight yet durable carbon fiber frame for optimal performance."
        },
        {
          title: "Electronic Shifting",
          description: "Precise electronic gear shifting for smooth transitions."
        },
        {
          title: "Smart Connectivity",
          description: "Built-in GPS and performance tracking with smartphone integration."
        },
        {
          title: "Hydraulic Disc Brakes",
          description: "Superior stopping power in all weather conditions."
        }
      ];
    
      return (
        <section id="features" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Revolutionary Features</h2>
            <div className="grid grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
}

export default Features;