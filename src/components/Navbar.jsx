import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-center py-2 text-lg bg-white shadow mb-10 sm:mb-20">
      <div className="flex justify-between items-center w-min-[300px] sm:w-[80vw] w-[max(300px,80vw)] px-2 gap-2">
        <Link
          className="text-[14px] sm:text-lg lg:text-2xl font-[chiron-sb]"
          to="/"
        >
          ShopHub
        </Link>
        <div className="flex text-[14px] sm:gap-4 sm:text-lg gap-2 lg:gap-8">
          <Link className="hover:text-purple-500 transition-colors" to="/">
            Home
          </Link>
          <Link
            className="hover:text-purple-500 transition-colors"
            to="/checkout"
          >
            Cart
          </Link>
        </div>
        <div className="text-[14px] sm:text-lg">
          <div className="flex gap-2 sm:gap-4 items-center text-white">
            {!user ? (
              <>
                <Link
                  className="lg:px-8 lg:py-2 sm:px-4 px-2 py-1 rounded-md transition-colors bg-transparent hover:border-violet-700 hover:bg-violet-100 text-violet-500 border border-violet-500"
                  to="/auth"
                >
                  Login
                </Link>
                <Link
                  className="lg:px-8 lg:py-2 sm:px-4 px-2 py-1 text-white rounded-md transition-colors bg-violet-500 hover:bg-violet-700 border border-violet-500"
                  to="/auth"
                >
                  Signup
                </Link>
              </>
            ) : (
              <>
                <span className="text-black">Hello, {user.email}</span>
                <button
                  onClick={logout}
                  className="lg:px-8 lg:py-2 sm:px-4 px-2 py-1 cursor-pointer text-white rounded-md transition-colors bg-violet-500 hover:bg-violet-700 border border-violet-500"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
