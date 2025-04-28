import React from 'react';
import { Link } from 'react-router-dom';
import Features from './Features';

function Navbar(props) {
    return (
        <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">PreFly</span>
            </div>
            
            <div className="flex items-center space-x-8">
              <ul>
                <li>
                <Link to={'/models'}>Models</Link>
                </li>
                <li><Link to={'/features'}>Features</Link></li>
                <li><Link to={'/pricing'}>Pricing</Link></li>
                <li><Link to={'/specs'}>Specs</Link></li>
              </ul>
              {/* <a href="#models" className="text-gray-600 hover:text-gray-900">Models</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#specs" className="text-gray-600 hover:text-gray-900">Specs</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a> */}
              
              
              <button className="ml-4 bg-black text-white px-4 py-2 rounded-full font-medium">Buy Now</button>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;