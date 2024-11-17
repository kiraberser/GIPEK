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
    <div className="container mx-auto p-8 flex space-x-8">
      {/* Sección de productos */}
      <div className="flex-1 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Productos</h2>
        {/* Aquí pasamos la función addToCart a cada ProductCard */}
        <div className="flex flex-wrap">
          {[
            { id: 1, name: 'Producto 1', price: 100, description: 'Descripción del producto 1', image: '/path/to/image1.jpg' },
            { id: 2, name: 'Producto 2', price: 200, description: 'Descripción del producto 2', image: '/path/to/image2.jpg' },
            { id: 3, name: 'Producto 3', price: 150, description: 'Descripción del producto 3', image: '/path/to/image3.jpg' }
          ].map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>

      {/* Sección del carrito */}
      <div className="w-1/3 bg-white p-6 shadow-md rounded-lg">
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
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default CartPage;
