import React from "react";
import mealsImg from "../../assets/meals.png";
import "../../index.css";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../assets/logo.png";

const Header = (props) => {
  let orderClicked = '';
  if (props.isOrderClicked) {
    orderClicked = 'md:ml-[12rem] ml-[15rem]';
  }
    
  return (
    <div className="relative">
      <header className="flex items-center justify-between md:h-12 md:py-12 h-16 md:px-44 fixed top-0 left-0 text-white w-full z-10 bg-rose-800 shadow-lg">
        <div className={`${orderClicked} flex items-center`}>
          <img className="w-10 h-11 mr-2 " src={logo} alt="Kawai Sushi" />
          <h1 className={`md:text-4xl  font-bold sm:m-0`}>Foody</h1>
        </div>
        <HeaderCartButton open={props.openCart} />
      </header>
      <div className=" overflow-hidden w-fill z-0">
        <img
          className="absolute inset-x-0 h-96 top-0 -skew-y-3  w-screen object-cover"
          src={mealsImg}
          alt="Meals"
        />
      </div>
    </div>
  );
};

export default Header;
