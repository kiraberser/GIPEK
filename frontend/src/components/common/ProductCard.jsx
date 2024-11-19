
const ProductCard = ({ product, addToCart }) => {
    const handleClick = (e) => {
        e.preventDefault()
        addToCart(product)
    }

    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-300 m-4 transition-transform transform hover:scale-105 duration-300">
        <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-800 mb-2">{product.name}</div>
          <p className="text-gray-600 text-base">{product.description}</p>
        </div>
        <div className="px-6 py-4 flex flex-col items-left justify-between">
          <span className="font-bold text-xl text-green-600 pb-2">${product.price}</span>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold p-1 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105" onClick={(e) => handleClick(e)}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    );
};

export default ProductCard;
