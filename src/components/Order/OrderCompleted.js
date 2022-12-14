import React from "react";
import Modal from "../UI/Modal";

const OrderCompleted = (props) => {
  return (
    <Modal close={props.close}>
      <div className="md:h-16 items-center justify-center flex h-16">
        <h3 className="text-center text-3xl font-bold">
          Thanks for chosing us!
        </h3>
      </div>
    </Modal>
  );
};

export default OrderCompleted;
