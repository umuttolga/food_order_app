

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className=' border-b-4 flex justify-between border-lg p-4 m-4 items-center  w-full '>
      <div>
        <h2 className="text-[#363636] text-2xl font-bold">{props.name}</h2>
        <div className='mt-4 '>
          <span className='text-[#8a2b06] font-bold text-xl'>{price}</span>
          <span className='font-bold border-2 px-2 py-1 rounded-lg ml-8'>x {props.amount}</span>
        </div>
      </div>
      <div className="flex group text-[#8a2b06]  ">
        <button className="border-2 rounded-lg border-[#8a2b06] h-8 w-12 mr-4" onClick={props.onRemove}>−</button>
        <button className="border-2 rounded-lg border-[#8a2b06] h-8 w-12 mr-4" onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
