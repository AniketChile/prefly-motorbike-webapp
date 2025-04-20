import React from 'react';

function Specs(props) {
    const specs = [
        { name: "Weight", value: "7.5 kg" },
        { name: "Frame", value: "Carbon Fiber" },
        { name: "Gears", value: "20-Speed Electronic" },
        { name: "Brakes", value: "Hydraulic Disc" },
        { name: "Wheels", value: "Carbon Fiber, 29 inch" },
        { name: "Battery Life", value: "36 hours" },
        { name: "Max Speed", value: "45 km/h" },
        { name: "Connectivity", value: "Bluetooth 5.2, ANT+" }
      ];
      return (
        <section id="specs" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Technical Specifications</h2>
            <div className="grid grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <div key={index} className="flex justify-between border-b border-gray-200 py-4">
                  <span className="font-medium">{spec.name}</span>
                  <span className="text-gray-600">{spec.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300">
                Download Full Spec Sheet
              </button>
            </div>
          </div>
        </section>
      );
}

export default Specs;