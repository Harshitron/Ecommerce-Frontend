import React, { useState } from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition"
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-md">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 h-10">
          {product.description}
        </p>
        
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating) 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
            ({product.reviewCount})
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </span>
            {product.stock < 10 && (
              <p className="text-xs text-red-500 font-semibold mt-1">
                Only {product.stock} left!
              </p>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};