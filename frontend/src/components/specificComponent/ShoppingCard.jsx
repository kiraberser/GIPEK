import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ShoppingCard({ cartItems, setCartItems }) {
  const navigate = useNavigate()
  const handleClick = () => {
    // Aquí puedes agregar la lógica para ver el carrito, 
    // por ejemplo, redirigir a una página de carrito o mostrar un modal
    navigate('/cart')
  };

  const totalItems = 3;  // Contamos los productos en el carrito

  return (
    <div className="relative mr-3">
      {/* Botón para ver el carrito */}
      <button 
        className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        onClick={handleClick}
      >
        <span className="sr-only">Ver carrito de compras</span>
        <ShoppingCart className="h-6 w-6" aria-hidden="true" />
        {/* Mostrar el número de productos en el carrito */}
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  )
}

export default ShoppingCard;
