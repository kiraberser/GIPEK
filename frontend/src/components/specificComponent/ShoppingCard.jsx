import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ShoppingCard({ cartItems = []}) { // Aseguramos que cartItems es un arreglo vacío por defecto
  const navigate = useNavigate();

  // Función para manejar el click en el carrito
  const handleClick = () => {
    // Redirige al usuario a la página del carrito
    navigate('/cart');
  };

  // Calcular el número total de productos en el carrito
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative mr-3">
      {/* Botón para ver el carrito */}
      <button 
        className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out"
        onClick={handleClick}
        aria-label="Ver carrito de compras"
      >
        <ShoppingCart className="h-6 w-6" aria-hidden="true" />
        
        {/* Mostrar el número de productos en el carrito si hay alguno */}
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  );
}

export default ShoppingCard;
