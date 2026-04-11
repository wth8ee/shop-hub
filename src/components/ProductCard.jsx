import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className=" rounded-xl overflow-hidden shadow">
      <img src={product.image} alt={product.name} />
      <div className="bg-white p-4 flex flex-col gap-3">
        <h3 className="font-[chiron-sb] text-lg truncate">{product.name}</h3>
        <p className="text-xl font-[chiron-eb] text-purple-500">
          ${product.price}
        </p>
        <div className="flex gap-4">
          <Link className="lg:px-4 lg:py-2 px-3 py-2 text-sm rounded-md transition-colors bg-transparent hover:border-violet-700 hover:bg-violet-100 text-violet-500 border border-violet-500">
            Details
          </Link>
          <button className="lg:px-4 cursor-pointer lg:py-2 px-3 py-2 text-sm text-white rounded-md transition-colors bg-violet-500 hover:bg-violet-700 border border-violet-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
