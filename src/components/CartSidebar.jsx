import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const API_URL = 'http://localhost:5209/api';

export const CartSidebar = () => {
  const { cart, isOpen, toggleCart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orderData = {
        ...formData,
        items: cart.map(item => ({
          productId: item.id,
          quantity: item.quantity
        }))
      };

      const response = await fetch(`${API_URL}/Orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) throw new Error('Order failed');

      setSuccess(true);
      setTimeout(() => {
        clearCart();
        toggleCart();
        setSuccess(false);
        setFormData({
          customerName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          zipCode: ''
        });
      }, 2500);
    } catch (err) {
      alert('Order failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={toggleCart}
      />
      <div className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto animate-slide-in">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Shopping Cart
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {cart.length} {cart.length === 1 ? 'item' : 'items'}
              </p>
            </div>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {success ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Order Placed!</h3>
              <p className="text-gray-600 dark:text-gray-400">Thank you for shopping with us</p>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Your cart is empty</p>
              <p className="text-gray-500 dark:text-gray-400 mb-6">Add some products to get started</p>
              <button
                onClick={toggleCart}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.id} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                        {item.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-bold mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center space-x-2 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-10 text-center font-semibold text-gray-900 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 mb-6">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-600 dark:focus:border-blue-600 focus:outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-600 dark:focus:border-blue-600 focus:outline-none transition"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-600 dark:focus:border-blue-600 focus:outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Street Address *"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-600 dark:focus:border-blue-600 focus:outline-none transition"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="City *"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-600 dark:focus:border-blue-600 focus:outline-none transition"
                  />
                  <input
                    type="text"
                    placeholder="ZIP *"
                    required
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-600 dark:focus:border-blue-600 focus:outline-none transition"
                  />
                </div>

                <div className="pt-6 border-t-2 border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">Total Amount:</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none transition duration-300"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </span>
                    ) : (
                      'Place Order'
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};