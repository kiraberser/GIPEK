import { ShoppingCart, Menu } from 'lucide-react';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import ShoppingCard from '../specificComponent/ShoppingCard';
import Avatar from '../specificComponent/Avatar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 max-w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex" >
            <div className="flex-shrink-0 flex items-center">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <Link to={'/'}><span className="ml-2 text-xl font-bold text-gray-800" >Gipek</span></Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/about"
                className="border-transparent text-gray-500 hover:border-green-600 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Sobre Nosotros
              </Link>
              <a className="border-transparent text-gray-500 hover:border-green-600 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                <Link to={'/products'}>
                  Productos
                </Link>
              </a>
              <a  className="border-transparent text-gray-500 hover:border-green-600 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Plantas
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to={'/contact'} className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 mr-4">
              Contacto
            </Link>
            <ShoppingCard/>
            <Avatar/>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden z-50 absolute inset-x-0 top-16 bg-white shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="border-transparent text-gray-700 block hover:bg-green-50 hover:border-green-300 pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Home
            </a>
            <Link to={'/about'} className="border-transparent text-gray-700 hover:bg-green-50 hover:border-green-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Sobre Nosotros
            </Link>
            <a className="border-transparent text-gray-700 hover:bg-green-50 hover:border-green-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              <Link to={'/products'}>
                Productos
              </Link>
            </a>
            <a href="#" className="border-transparent text-gray-700 hover:bg-green-50 hover:border-green-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Blog
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <button className="flex-shrink-0 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 mr-4">
                Contactanos
              </button>
              <button className="ml-auto p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <span className="sr-only">View shopping cart</span>
                <ShoppingCart className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
