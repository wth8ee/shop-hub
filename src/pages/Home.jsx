import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = getProducts();

  return (
    <div className="w-screen flex justify-center">
      <div className="min-w-75 px-4 w-[max(300px,80vw)] sm:w-[80vw]">
        <div className="flex flex-col items-center gap-2 sm:gap-6 mb-10 sm:mb-20 text-center">
          <h1 className="font-[chiron-sb] text-[28px] sm:text-4xl lg:text-5xl">
            Welcome to ShopHub
          </h1>
          <p className="text-[14px] sm:text-[16px] lg:text-lg text-black/60">
            Discover amazing products at great prices
          </p>
        </div>
        <div>
          <h2 className="font-[chiron-sb] text-[20px] mb-5 sm:text-3xl sm:mb-10">
            Our products
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductCard product={product} key={product.key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
