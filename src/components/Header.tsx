import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="max-w-6xl mx-auto p-4 flex justify-between">
                <div className="text-xl font-bold">My Portfolio</div>
                <ul className="flex space-x-4">
                    <li><a href="#hero" className="hover:text-gray-700">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-700">About</a></li>
                    <li><a href="#projects" className="hover:text-gray-700">Projects</a></li>
                    <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;