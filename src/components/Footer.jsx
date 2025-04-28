import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">VeloTech</h3>
                <p className="text-gray-400">Redefining cycling excellence with cutting-edge technology and design.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Products</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>PreFlySport</li>
                  <li>PreFlyPro</li>
                  <li>PreFlyElite</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>Warranty</li>
                  <li>Service Centers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Stay Connected</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-center">
              <p>© 2025 PreFly All rights reserved to Aniket Chile.</p>
            </div>
          </div>
        </footer>
      );
}

export default Footer;