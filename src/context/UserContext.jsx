import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState, createContext } from "react";
import { auth } from "../config/firebase";

const UserContext = createContext();
const inicialState = JSON.parse(localStorage.getItem("cart")) || [];

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(false);
  const [cartProduct, setCartProduct] = useState(inicialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProduct));

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, [cartProduct]);

  if (user === false) return <p>Loading...</p>;

  const addCartProduct = (product) => {
    // Verifica si el producto ya está en el carrito
    const productInCart = cartProduct.find((item) => item.id === product.id);

    if (productInCart) {
      // Actualiza la cantidad si ya está en el carrito
      setCartProduct((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      // Agrega el producto al carrito si no está presente
      setCartProduct((prevCart) => [...prevCart, product]);
    }
    localStorage.setItem("cart", JSON.stringify(cartProduct));
    // Devuelve true si se agregó correctamente
    return true;
  };

  const deleteCartProduct = (id) => {
    setCartProduct(cartProduct.filter((item) => item.id !== id));
    localStorage.setItem("cart", JSON.stringify(cartProduct));
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartProduct.reduce(
      (acc, current) => acc + current.quantity * current.precio,
      0
    );
    return totalPrice;
  };

  const totalQuantityProduct = cartProduct.reduce(
    (acc, current) => current.quantity + acc,
    0
  );

  return (
    <UserContext.Provider
      value={{
        user,
        cartProduct,
        addCartProduct,
        deleteCartProduct,
        totalQuantityProduct,
        calculateTotalPrice,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export const useUserContext = () => useContext(UserContext);
