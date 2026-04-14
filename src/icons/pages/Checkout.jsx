import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Checkout() {
  const {
    getCartItemsWithProducts,
    addToCart,
    removeFromCart,
    removeOneFromCart,
    getCartTotal,
    placeOrder,
  } = useCart();
  const cartItems = getCartItemsWithProducts();
  const total = getCartTotal();
  const navigate = useNavigate();

  return (
    <div className="w-screen flex justify-center">
      <div className="min-w-75 px-4 w-[max(300px,80vw)] sm:w-[80vw] flex flex-col items-start">
        <h1 className="font-[chiron-sb] text-[28px] sm:text-4xl lg:text-5xl mb-10">
          Checkout
        </h1>

        <div className="flex gap-8 w-full items-start">
          <div className="bg-white shadow p-8 rounded-xl">
            <div className="flex flex-col items-start w-[max(200px,60%)]">
              <h2 className="font-[chiron-sb] text-[20px] mb-10 sm:text-3xl">
                Order Summary
              </h2>
              <div className="flex flex-col w-[clamp(150px,40vw,800px)] gap-0.5 bg-black/10">
                {cartItems.length ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="bg-white py-4 w-full">
                      <div className="flex justify-between gap-4 w-full">
                        <div className="flex gap-4">
                          <div className="w-[max(15vw,100px)] overflow-hidden rounded-lg">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-[chiron-sb]">
                              {item.product.name}
                            </h3>
                            <p className="text-md text-black/60">
                              ${item.product.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-between items-end gap-2 ml-4">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => removeOneFromCart(item.id)}
                              className="outline outline-black/10 h-8 w-8 flex items-center justify-center text-2xl cursor-pointer hover:bg-black/10 transition-colors"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => addToCart(item.id)}
                              className="outline outline-black/10 h-8 w-8 flex items-center justify-center text-2xl cursor-pointer hover:bg-black/10 transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <p className="font-[chiron-sb] text-xl">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="lg:px-8 lg:py-2 sm:px-4 px-2 py-1 cursor-pointer text-white rounded-md transition-colors bg-violet-500 hover:bg-violet-700 border border-violet-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white text-center py-20 flex flex-col gap-4 items-center">
                    <div className="text-[28px] sm:text-4xl lg:text-5xl">
                      Nothing here yet
                    </div>
                    <hr className="h-0.5 bg-black/10 outline-none border-none w-[40%]"></hr>
                    <button
                      onClick={() => navigate("/")}
                      className="lg:px-8 lg:py-2 sm:px-4 px-2 py-1 cursor-pointer text-white rounded-md transition-colors bg-violet-500 hover:bg-violet-700 border border-violet-500"
                    >
                      Explore
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white shadow p-8 rounded-xl w-[clamp(150px,100%,300px)]">
            <div className="flex flex-col items-start w-full">
              <h2 className="font-[chiron-sb] text-[20px] mb-10 sm:text-3xl">
                Total
              </h2>
              <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-lg text-black/60">Subtotal:</h3>
                  <span className="text-lg font-[chiron-m]">${total}</span>
                </div>
                <hr className="w-full h-0.5 bg-black/10 outline-none border-none"></hr>
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg text-black/60">Total:</h3>
                    <span className="text-2xl font-[chiron-sb] text-violet-500">
                      ${total}
                    </span>
                  </div>
                  <hr className="w-full h-0.5 bg-black outline-none border-none my-4"></hr>
                  <button
                    onClick={placeOrder}
                    className="lg:px-8 lg:py-4 sm:px-4 px-2 text-xl py-1 cursor-pointer text-white rounded-md transition-colors bg-violet-500 hover:bg-violet-700 border border-violet-500"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
