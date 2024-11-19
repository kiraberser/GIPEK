import React, { useState } from 'react';
import ProductCard from '../components/common/ProductCard';
import CartItem from '../components/common/CartItem';

const CartPage = () => {
  // Estado para los productos del carrito
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Verifica si el producto ya está en el carrito
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Si ya está, incrementa la cantidad
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Si no está, agrega el producto al carrito
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mt-16">
      {/* Sección de productos */}
      <div className="flex-1 bg-white p-6 shadow-2xl rounded-lg border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">Productos</h2>
        {/* Aquí pasamos la función addToCart a cada ProductCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cartItems.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>

      {/* Sección del carrito */}
      <div className="w-full md:w-1/3 bg-white p-6 shadow-2xl rounded-lg border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">Resumen del Carrito</h2>
        <div>
          {cartItems.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            cartItems.map((product) => (
              <CartItem 
                key={product.id} 
                product={product} 
                removeFromCart={removeFromCart} 
              />
            ))
          )}
        </div>
        <div className="flex justify-between py-2 border-t mt-4">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold text-xl">${total}</span>
        </div>
        <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default CartPage;
