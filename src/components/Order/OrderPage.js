import React from "react";
import OrderForm from "./OrderForm";
import OrderInfo from "./OrderInfo";

const OrderPage = (props) => {
  
  return ( 
    <div className="z-10 p-6 rounded-r-xl shadow-xl flex flex-col absolute inset-y-0 left-0 bg-rose-600 md:h-full md:w-[22rem] w-[15rem]">
      <div className="sticky  top-0 ">
        <div className=" ">
          <span className=" text-[#5a1a01] hover:text-white text-4xl rounded-full  w-10 h-10 text-center block float-right cursor-pointer" onClick={props.closeOrderPage}>
            X
          </span>
        </div>
        <OrderInfo />
        <OrderForm getOrderState={props.getOrderState} />
      </div>
    </div>
  );
};

export default OrderPage;
