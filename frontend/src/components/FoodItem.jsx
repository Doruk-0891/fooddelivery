import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({food_details}) => {
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
    const {_id, name, image, description, price} = food_details;

  return (
    <div className="w-full m-auto rounded-[15px] shadow-lg shadow-(color:#000000)">
        <div className="w-full rounded-t-2xl rounded-r-2xl rounded-b-0 rounded-l-0 overflow-hidden relative">
            <img src={image} alt="" className="w-full" />
            {
                !cartItems[_id] 
                ? 
                <img src={assets.add_icon_white} alt="" onClick={() => addToCart(_id)} 
                className="w-9 absolute bottom-4 right-4 cursor-pointer rounded-full"
                /> 
                :
                <div className="absolute bottom-4 right-4 flex items-center gap-2.5 p-1.5 rounded-[50px] bg-white cursor-pointer">
                    <img src={assets.remove_icon_red} alt="remove" onClick={() => removeFromCart(_id)} 
                    className="w-7"
                    />
                    <p>{cartItems[_id]}</p>
                    <img src={assets.add_icon_green} alt="add" onClick={() => addToCart(_id)}
                    className="w-7"
                    />
                </div>
            }
        </div>
        <div className="p-5">
            <div className="flex justify-between items-center mb-2.5">
                <p className="text-lg font-semibold">{name}</p>
                <img src={assets.rating_starts} alt="rating" className="w-20" />
            </div>
            <p className="text-[#676767] text-xs">
                {description}
            </p>
            <p className="text-[#FF4D25] text-2xl font-semibold my-2.5">
                ${price}
            </p>
        </div>
    </div>
  )
}

export default FoodItem