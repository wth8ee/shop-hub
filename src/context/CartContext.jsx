import { createContext, useContext, useState } from "react";
import { getProductById } from "../data/products";

export const CartContext = createContext(null);

export function useCart() {
  const context = useContext(CartContext);

  return context;
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function getCartItemById(productId) {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem;
  }

  function getCartItemsWithProducts() {
    return cart
      .map((item) => ({
        ...item,
        product: getProductById(item.id),
      }))
      .filter((item) => item.product);
  }

  function addToCart(productId) {
    const existing = cart.find((item) => item.id === productId);

    if (!existing) {
      setCart([...cart, { id: productId, quantity: 1 }]);
    } else {
      const currentQuantity = existing.quantity;
      const updatedCart = cart.map((item) =>
        item.id === productId
          ? { id: productId, quantity: currentQuantity + 1 }
          : item,
      );
      setCart(updatedCart);
    }
  }

  function removeOneFromCart(productId) {
    const existing = cart.find((item) => item.id === productId);

    const currentQuantity = existing.quantity;
    if (currentQuantity > 1) {
      const updatedCart = cart.map((item) =>
        item.id === productId
          ? { id: productId, quantity: currentQuantity - 1 }
          : item,
      );
      setCart(updatedCart);
    } else {
      const updatedCart = cart.filter((item) => item.id != productId);
      setCart(updatedCart);
    }
  }

  function removeFromCart(productId) {
    const updatedCart = cart.filter((item) => item.id != productId);
    setCart(updatedCart);
  }

  function getCartTotal() {
    const total = cart.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);

    return total.toFixed(2);
  }

  function clearCart() {
    setCart([]);
  }

  function placeOrder() {
    alert("Successfull Order!");
    clearCart();
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getCartItemById,
        getCartItemsWithProducts,
        removeFromCart,
        removeOneFromCart,
        getCartTotal,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
