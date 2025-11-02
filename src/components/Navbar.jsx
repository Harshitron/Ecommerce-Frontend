import React, { useState, useEffect } from 'react';
import { ShoppingCart, Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useCart } from '../contexts/CartContext';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleCart, totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md' 
        : 'bg-white dark:bg-gray-900'
    } border-b border-gray-200 dark:border-gray-800`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ShopVerse
              </span>
              <div className="text-xs text-gray-500 dark:text-gray-400">Premium Store</div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#products" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
              Products
            </a>
            <a href="#featured" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
              Featured
            </a>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
            <button
              onClick={toggleCart}
              className="relative p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
            <a href="#products" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">
              Products
            </a>
            <a href="#featured" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">
              Featured
            </a>
            <button 
              onClick={toggleCart} 
              className="flex items-center space-x-2 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart ({totalItems})</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};