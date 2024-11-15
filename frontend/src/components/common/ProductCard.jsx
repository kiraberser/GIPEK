import React, { useState } from 'react';

const ProductCard = ({ product }) => {
    const [addProduct, setProduct] = useState(0)

    const handleClick = (e) => {
        e.preventDefault()
        setProduct(addProduct + 1)
        console.log(addProduct)
    }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-xl text-green-600">${product.price}</span>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold m-2 py-2 px-4 rounded-lg" onClick={(e) => handleClick(e)}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
