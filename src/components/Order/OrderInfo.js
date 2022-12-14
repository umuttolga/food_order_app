import React, { useContext } from "react";
import Context from "../../store/Context";

const OrderInfo = (props) => {
    const ctx = useContext(Context)
    const { items } = ctx;
    // const itemsAmount = items.amount.toFixed(2)


  return (
    <div className=" text-center w-full bg-slate-100 mt-[3rem] space-y-6 rounded-lg">
        <h3 className="md:text-2xl p-2 font-bold border-b-2 ">Order Info</h3>
      <ul className="w-full text-lg md:font-med  md:p-2  content-center">
        {items.map((item) => {
          return (
            <li className="flex flex-row justify-between border-b-4 border-rose-300 p-2 text-med" key={item.id}>
              {item.name} <span className="">{item.amount}x</span>
            </li>
          );
        })}
      </ul>
      <h2 className="font-bold md:text-xl p-4 border-t-4">Total Amount: <span>${ctx.totalAmount.toFixed(2)}</span></h2>
    </div>
  );
};

export default OrderInfo;
