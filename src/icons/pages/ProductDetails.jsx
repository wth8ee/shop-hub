import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="w-screen flex justify-center">Loading...</div>;
  }

  const { addToCart, getCartItemById } = useCart();
  const cartProduct = getCartItemById(product.id);

  return (
    <div className="w-screen flex justify-center">
      <div className="min-w-75 px-4 w-[max(300px,80vw)] sm:w-[80vw] flex justify-center">
        <div className="bg-white flex gap-8 shadow p-4 rounded-3xl w-[clamp(250px,100%,1200px)]">
          <div className="w-full rounded-xl overflow-hidden">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="w-full flex flex-col gap-4 items-start">
            <h1 className="font-[chiron-sb] text-3xl truncate">
              {product.name}
            </h1>
            <p className="text-3xl font-[chiron-eb] text-purple-500">
              ${product.price}
            </p>
            <p className="text-md text-black/60">{product.description}</p>
            <button
              onClick={() => addToCart(product.id)}
              className="lg:px-8 lg:py-2 sm:px-4 px-2 py-1 mt-4 cursor-pointer text-white rounded-md transition-colors bg-violet-500 hover:bg-violet-700 border border-violet-500"
            >
              Add to Cart {cartProduct && `(${cartProduct.quantity})`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
