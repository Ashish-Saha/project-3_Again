import { useContext, useState } from "react";
import sun from "./assets/icons/sun.svg";
import moon from "./assets/icons/moon.svg"
import logo from "./assets/logo.svg";
import ring from "./assets/ring.svg";
// import cart from "./assets/shopping-cart.svg";
import Cart from "./Cart";
import CartDetails from "./cine/CartDetails";
import { CartContext, ThemeContext } from "./contexts/indexContext";

export default function Header() {
  const [showCartDetails, setShowCartDetails] = useState(false);

  const { carts, setCarts } = useContext(CartContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleCartDetails = () => {
    if (carts.length > 0) {
      setShowCartDetails((prev) => !prev);
    }
  };

  const handleCloseCartDetails = () => {
    setShowCartDetails(false);
  };

  const handleCartItemDelete = (deletedId) => {
    const cartItems = carts.filter((item) => item.id !== deletedId);
    setCarts(cartItems);
  };

  return (
    <>
      <header>
        {showCartDetails && (
          <CartDetails
            carts={carts}
            onCloseCartDetails={handleCloseCartDetails}
            onCartItemDelete={handleCartItemDelete}
          />
        )}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={()=> setDarkMode((mode)=> !mode)}
              >
                <img src={ darkMode ? sun : moon} width="24" height="24" alt="" />
              </a>
            </li>

            {/* <li className="relative">
              {carts.length > 0 ? (
                <span className=" text-green-600 font-bold text-[20px] absolute top-[-20px] right-[-10px]">
                  {carts.length}
                </span>
              ) : (
                ""
              )}
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={cart} width="24" height="24" alt="" />
              </a>
            </li> */}
            <Cart carts={carts} onCartdetails={handleCartDetails} />
          </ul>
        </nav>
      </header>
    </>
  );
}
