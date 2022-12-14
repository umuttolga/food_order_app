import React from "react";
import { useForm } from "react-hook-form";

const OrderForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    resetField
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    props.getOrderState(true)
    resetField('userName')
    resetField('userPhoneNum')
    resetField('address')
  };


  return (
    <div className=" p-2 w-full flex-col bg-slate-100 mt-[10%] rounded-lg">
      <form
        className="p-2 flex flex-col space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="font-bold">Name</label>
        <input
          className="p-1 border-2 rounded-lg border-black"
          {...register("userName", { required: true })}
        />
        {errors.userName && (
          <span className="text-red-500">This field is required!</span>
        )}
        <label className="font-bold">Phone Number</label>
        <input
          type="number"
          className="overflow-hidden p-1 border-2 rounded-lg border-black"
          {...register("userPhoneNum", { required: true })}
        />
        {errors.userPhoneNum && (
          <span className="text-red-500">This field is required!</span>
        )}
        <label className="font-bold">Shipping Method</label>
        <div className="flex justify-evenly p-1">
          <span>Delivery</span>
          <input type="checkbox" name="" {...register("delivery")} />
          <span>Pick up</span>
          <input
            disabled={watch("delivery")}
            type="checkbox"
            name=""
            {...register("pickUp")}
          />
        </div>
        <label className="font-bold">Address</label>
        <input
          disabled={!watch("delivery") || watch("pickUp")}
          className="p-1 border-2 rounded-lg border-black"
          {...register("address", { required: false })}
        />
        {errors.address && (
          <span className="text-red-500">This field is required!</span>
        )}
        <input
          className="bg-[#641e03] text-white rounded-lg py-1"
          type="submit"
          value="Complete Order"
        />
      </form>
    </div>
  );
};

export default OrderForm;
