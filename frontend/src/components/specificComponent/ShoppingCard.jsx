import React, { useState } from 'react'
import { ShoppingCart, Menu } from 'lucide-react';

function ShoppingCard({count}) {
  const [itemCard, setItemCard] = useState(true)

  return (
    <div className="relative">
      <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        <span className="sr-only">Ver carrito de compras</span>
        <ShoppingCart className="h-6 w-6" aria-hidden="true" />
        {count > 0 && (
          <p className="absolute top-0 right-0 z-10 bg-red-600 rounded-full text-white text-sm w-5 h-5 flex items-center justify-center">
            {count}
          </p>
        )}
      </button>
    </div>
  )
}

export default ShoppingCard
