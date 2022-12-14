import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import OrderCompleted from "./components/Order/OrderCompleted";
import OrderPage from "./components/Order/OrderPage";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [clicked, setClicked] = useState(false);
  const [orderClicked, setOrderClicked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
 const getOrderState = (state) => {
    setFormSubmitted(state)
 }
 

  const handleOrderPageClose = () => {
    setOrderClicked(false);
  };
  const handleOpenOrderPage = () => {
    setOrderClicked(true);
    setClicked(false);
  };
  const handleCloseClick = () => {
    setFormSubmitted(false)
    setClicked(false);
  };
  const openCart = () => {
    setClicked(true);
  };
  return (
    <CartContextProvider>
      <div className="relative bg-[#383838] h-[150vh]">
        {clicked && (
          <Cart
            closeOrderPage={handleOrderPageClose}
            openOrderPage={handleOpenOrderPage}
            handleCloseClick={handleCloseClick}
          />
        )}
        <Header isOrderClicked={orderClicked} openCart={openCart} />
        <main>
          <Meals />
          {orderClicked && <OrderPage getOrderState={getOrderState} closeOrderPage={handleOrderPageClose} />}
          {formSubmitted && <OrderCompleted close={handleCloseClick}/>}
        </main>
      </div>
    </CartContextProvider>
  );
}

export default App;
