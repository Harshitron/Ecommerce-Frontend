import React from 'react';
import { CartProvider } from './contexts/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { CartSidebar } from './components/CartSidebar';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <Products />
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  );
};

export default App;