import React from 'react';
import { Link } from 'react-router-dom';
import Features from './Features';

function Navbar(props) {
    return (
        <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50m">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-bold">PreFly</span>
            </div>
            
            <div className="flex items-center space-x-8">
              <ul className='flex gap-3'>
                <li className="text-gray-600 text-xl font-bold hover:text-gray-900"><Link to={'/models'}>Models</Link></li>
                <li className="text-gray-600 text-xl font-bold hover:text-gray-900"><Link to={'/features'}>Features</Link></li>
                <li className="text-gray-600 text-xl font-bold hover:text-gray-900"><Link to={'/pricing'}>Pricing</Link></li>
                <li className="text-gray-600 text-xl font-bold hover:text-gray-900"><Link to={'/specs'}>Specs</Link></li>
              </ul>
              <button className="ml-4 bg-black text-white px-4 py-2 rounded-full font-medium text-xl">Buy Now</button>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;