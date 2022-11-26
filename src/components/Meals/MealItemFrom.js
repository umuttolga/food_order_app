import React, { useRef, useState } from "react";
import Input from "../UI/Input";
const MealItemFrom = (props) => {
  const amountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);



  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().lengt === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountIsValid(false)
      
      return;
    }
    props.onAddItem(enteredAmountNum)
  };
  return (
    <form onSubmit={handleSubmit} type="submit" className="p-4">
      <Input
        ref={amountRef}
        className="flex items-center mb-2"
        label="Amount"
        input={{
          defaultValue: '1',
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button
        type="submit"
        className="hover:bg-[#641e03] hover:border-[#641e03] font-bold bg-[#8a2b06] text-white rounded-2xl px-8 py-1"
      >
        + Add
      </button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemFrom;
