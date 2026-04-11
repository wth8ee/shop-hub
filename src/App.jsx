import { Route, Routes } from "react-router-dom";
import Home from "./icons/pages/Home";
import Auth from "./icons/pages/Auth";
import Checkout from "./icons/pages/Checkout";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <div className="bg-mauve-100 min-h-screen overflow-hidden pb-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
