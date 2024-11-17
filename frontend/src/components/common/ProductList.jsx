import React from 'react';
import ProductCard from './ProductCard';


const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Planta 1',
      description: 'Descripción plant 1.',
      price: 100,
      image: '/assets/image_plant.jpg', // Asegúrate de que esta ruta esté correcta
    },
    {
      id: 2,
      name: 'Planta 2',
      description: 'Descripción planta 2.',
      price: 200,
      image: '/assets/image_plant2.jpg',
    },
    {
      id: 3,
      name: 'Planta 3',
      description: 'Descripción planta 3.',
      price: 200,
      image: '/assets/image_plant3.jpg',
    },
    {
      id: 4,
      name: 'Planta 4',
      description: 'Descripción planta 4.',
      price: 200,
      image: '/assets/image_plant4.jpg',
    },
    {
      id: 5,
      name: 'Planta 5',
      description: 'Descripción planta 5.',
      price: 200,
      image: '/assets/image_plant5.jpg',
    },
  ];


  return (
    <div className="flex flex-wrap justify-center py-16">
      {products.map((product) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
