import React from 'react';

const CartItem = ({ product, removeFromCart }) => {
  return (
    <div className="flex justify-between items-center py-4 border-b">
      <div className="flex items-center">
        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
        <div>
          <h4 className="font-semibold">{product.name}</h4>
          <p className="text-sm text-gray-600">Cantidad: {product.quantity}</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-xl font-semibold">${product.price}</p>
        <button
          onClick={() => removeFromCart(product.id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
