import React from 'react';
import ProductCard from '../components/common/ProductCard';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1.',
      price: 100,
      image: 'https://via.placeholder.com/150', // Reemplaza con tus imágenes
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2.',
      price: 200,
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center py-16">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
