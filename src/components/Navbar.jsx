import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle the mobile menu

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-3xl font-bold">PreFly</span>
                    </div>

                    {/* Hamburger Icon for Mobile */}
                    <div className="block md:hidden">
                        <button onClick={toggleMenu} className="text-3xl">
                            {menuOpen ? '✖' : '☰'}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex gap-3">
                            <li className="text-gray-600 text-xl font-bold hover:text-gray-900">
                                <Link to={'/models'}>Models</Link>
                            </li>
                            <li className="text-gray-600 text-xl font-bold hover:text-gray-900">
                                <Link to={'/features'}>Features</Link>
                            </li>
                            <li className="text-gray-600 text-xl font-bold hover:text-gray-900">
                                <Link to={'/pricing'}>Pricing</Link>
                            </li>
                            <li className="text-gray-600 text-xl font-bold hover:text-gray-900">
                                <Link to={'/specs'}>Specs</Link>
                            </li>
                        </ul>
                        <button className="ml-4 bg-black text-white px-4 py-2 rounded-full font-medium text-xl">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-md fixed top-16 left-0 w-full z-40 py-4">
                    <ul className="flex flex-col items-center space-y-4">
                        <li className="text-gray-600 text-xl font-bold hover:text-gray-900">
                            <Link to={'/models'}>Models</Link>
                        </li>
                        <li className="text-gray-600 text-xl font-bold hover:text-gray-900">
                            <Link to={'/features'}>Features</Link>
                        </li>
                        <li className="text-gray-600 text-xl font-bold hover:text-gray-900">
                            <Link to={'/pricing'}>Pricing</Link>
                        </li>
                        <li className="text-gray-600 text-xl font-bold hover:text-gray-900">
                            <Link to={'/specs'}>Specs</Link>
                        </li>
                    </ul>
                    <button className="w-full bg-black text-white px-4 py-2 rounded-full font-medium text-xl mt-4">
                        Buy Now
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
