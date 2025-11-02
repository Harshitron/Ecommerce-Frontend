import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">ShopVerse</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your premium destination for quality products at amazing prices.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">All Products</a></li>
              <li><a href="#featured" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">Featured</a></li>
              <li><a href="#products" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">New Arrivals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 ShopVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};