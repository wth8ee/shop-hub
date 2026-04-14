import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, getCartItemById } = useCart();

  const cartItem = getCartItemById(product.id);

  return (
    <div className=" rounded-xl overflow-hidden shadow">
      <img src={product.image} alt={product.name} />
      <div className="bg-white p-4 flex flex-col gap-3">
        <h3 className="font-[chiron-sb] text-lg truncate">{product.name}</h3>
        <p className="text-xl font-[chiron-eb] text-purple-500">
          ${product.price.toFixed(2)}
        </p>
        <div className="flex gap-4">
          <Link
            to={`/products/${product.id}`}
            className="lg:px-4 lg:py-2 px-3 py-2 text-sm rounded-md transition-colors bg-transparent hover:border-violet-700 hover:bg-violet-100 text-violet-500 border border-violet-500"
          >
            Details
          </Link>
          <button
            onClick={() => addToCart(product.id)}
            className="lg:px-4 cursor-pointer lg:py-2 px-3 py-2 text-sm flex items-center text-white rounded-md transition-colors bg-violet-500 hover:bg-violet-700 border border-violet-500"
          >
            Add to Cart {cartItem && `(${cartItem.quantity})`}
          </button>
        </div>
      </div>
    </div>
  );
}
