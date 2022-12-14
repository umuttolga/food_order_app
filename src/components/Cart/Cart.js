import React, { useContext } from "react";
import Modal from "../UI/Modal";
import Context from "../../store/Context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(Context);
  const cartAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length < 1;
  const handleItemRemove = (id) => {
    cartCtx.removeItem(id)
  };
  const handleItemAdd = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };
  const cartItems = (
    <ul>
      {cartCtx.items.map((element) => {
        return (
          <CartItem
            id={element.id}
            key={element.id}
            name={element.name}
            price={element.price}
            amount={element.amount}
            onRemove={handleItemRemove.bind(null, element.id)}
            onAdd={handleItemAdd.bind(null, element)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal close={props.handleCloseClick}>
      <div className="max-h-[20rem] w-full overflow-auto overflow-x-hidden list-none m-0 p-0">
        {cartItems}
        <div className="flex justify-between items-center font-bold text-xl my-4 p-4">
          <span className="">Total Amount</span>
          <span>{cartAmount}</span>
        </div>
        <div className="text-right">
          <button
            onClick={props.handleCloseClick}
            className="hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white ml-4 border-[1px] border-[#8a2b06] py-1 px-8 rounded-xl bg-transparent text-[#8a2b06]"
          >
            Close
          </button>
          {!hasItems && (
            <button onClick={props.openOrderPage} className="hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white ml-4 border-[#8a2b06] py-1 px-8 rounded-xl bg-[#8a2b06] text-white">
              Order
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
