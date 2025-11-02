import React from 'react';
import { TrendingUp } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md mb-6">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">New Arrivals Available</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Discover Amazing
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Products</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Shop premium quality products at unbeatable prices. Fast shipping, easy returns, and 24/7 customer support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#products"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              Shop Now
            </a>
            <a 
              href="#featured"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-600 transition duration-300"
            >
              View Collections
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🚀', label: 'Fast Delivery', desc: '2-3 Days' },
              { icon: '✨', label: 'Premium Quality', desc: 'Verified' },
              { icon: '🔒', label: 'Secure Payment', desc: '100% Safe' },
              { icon: '💝', label: 'Best Prices', desc: 'Guaranteed' }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold text-gray-900 dark:text-white">{item.label}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};