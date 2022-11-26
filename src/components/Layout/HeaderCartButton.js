import React, { useContext, useEffect, useState } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Context from "../../store/Context";
const HeaderCartButton = (props) => {
  const [isBumped, setisBumped] = useState(false);
  const cartCtx = useContext(Context);
  const {items} = cartCtx
  const bumpEffect = 'animate-[bump_0.3s_ease-in-out]'
  const numberOfCartItems = items.reduce((curNum, item) => {
    return curNum + item.amount
  }, 0)
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setisBumped(true)
    const timer = setTimeout(() => {
      setisBumped(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [items])
  return (
    <button
      onClick={props.open}
      className={`${isBumped ? bumpEffect : ''} group items-center text-lg hover:bg-[#2c0d00] border-none rounded-xl py-1 px-4 bg-[#4d1601] flex justify-around text-white font-bold w-48 h-12`}
    >
      <span>
        <ShoppingBasketIcon sx={{ height: "1.5rem", mb: "3px" }} />
      </span>
      <span className="ml-2">Your Cart</span>
      <span className="ml-4 group-hover:bg-[#92320c] bg-[#b94517]  rounded-full ml-1 w-8">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
