import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";


function App() {
  const [clicked, setClicked] = useState(false)
  const handleCloseClick = () => {
    setClicked(false)
  }
  const openCart = () => {
    setClicked(true)
  }
  return (
    <CartContextProvider>
      <div className="bg-[#383838] h-[150vh]">
        {clicked && <Cart handleCloseClick={handleCloseClick}/>}
        <Header openCart={openCart}/>
        <main>
        <Meals />
        </main>
      </div>
    </CartContextProvider>
    );
}

export default App;
