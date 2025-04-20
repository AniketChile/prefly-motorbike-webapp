import React from 'react';

function Pricing(props) {
    const models = [
        {
          name: "PreFlySport",
          price: "$2,999",
          features: [
            "Aluminum Frame",
            "Mechanical Gears",
            "Basic Performance Tracking",
            "1-Year Warranty"
          ]
        },
        {
          name: "PreFlyPro",
          price: "$4,999",
          features: [
            "Carbon Fiber Frame",
            "Electronic Shifting",
            "Advanced Performance Tracking",
            "2-Year Warranty",
            "Free Service for 1 Year"
          ],
          highlight: true
        },
        {
          name: "PreFlyElite",
          price: "$7,999",
          features: [
            "Premium Carbon Fiber Frame",
            "Advanced Electronic Shifting",
            "Integrated Power Meter",
            "Custom Paint Options",
            "3-Year Warranty",
            "Lifetime Service"
          ]
        }
      ];
    
      return (
        <section id="pricing" className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Choose Your Model</h2>
            <div className="grid grid-cols-3 gap-8">
              {models.map((model, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl shadow-lg overflow-hidden ${model.highlight ? 'border-2 border-blue-500 ring-4 ring-blue-200' : ''}`}
                >
                  <div className={`py-6 px-6 ${model.highlight ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
                    <h3 className="text-2xl font-bold">{model.name}</h3>
                    <p className="text-3xl font-bold mt-2">{model.price}</p>
                  </div>
                  <div className="p-6 bg-white">
                    <ul className="space-y-4">
                      {model.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="mr-2 text-green-500">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`mt-8 w-full py-3 rounded-full font-medium ${model.highlight ? 'bg-blue-600 text-white' : 'bg-gray-900 text-white'}`}>
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Pricing;