import { Route, Routes } from "react-router-dom";
import Home from "./icons/pages/Home";
import Auth from "./icons/pages/Auth";
import Checkout from "./icons/pages/Checkout";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import ProductDetails from "./icons/pages/ProductDetails";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="bg-mauve-100 min-h-screen overflow-hidden pb-20">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
