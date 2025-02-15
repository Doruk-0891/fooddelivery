import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartPrice } = useContext(StoreContext);

    return (
        <div className="mt-24">
            <div>
                <div className="grid grid-cols-7 items-center text-gray-400 text-xs md:text-[1vw]">
                    <p>Items</p>
                    <p className="col-span-2">Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {
                    food_list.map((item) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div key={item._id}>
                                    <div className="grid grid-cols-7 items-center text-xs md:text-[1vw]
                                    my-2.5 text-black">
                                        <img src={item.image} alt="" className="w-12" />
                                        <p className="col-span-2">{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>${item.price * cartItems[item._id]}</p>
                                        <p className="cursor-pointer" onClick={() => removeFromCart(item._id)}>x</p>
                                    </div>
                                    <hr className="h-0.5 bg-[#e2e2e2] border-none" />
                                </div>
                            );
                        }
                    })
                }
            </div>
            <div className="mt-20 flex justify-between gap-5 md:gap-[12vw] [&>div]:flex-1 flex-col-reverse md:flex-row">
                <div className="flex flex-col gap-5">
                    <h2>Cart Total</h2>
                    <div className="flex justify-between text-[#555]">
                        <div>
                            <p>Subtotal</p>
                            <p>{getTotalCartPrice()}</p>
                        </div>
                        <hr className="my-2.5" />
                        <div>
                            <p>Delivery Fee</p>
                            <p>{ getTotalCartPrice() === 0 ? 0 : 2}</p>
                        </div>
                        <hr className="my-2.5" />
                        <div>
                            <p>Total</p>
                            <p>{getTotalCartPrice() === 0 ? 0 : getTotalCartPrice() +2}</p>
                        </div>
                    </div>
                    <button className="border-none text-white bg-[#FF4D25] w-[200px] lg:w-[15vw] cursor-pointer rounded-md py-3 text-xs md:text-base">PROCEED TO CHECKOUT</button>
                </div>
                <div className="justify-start">
                    <div>
                        <p className="text-[#555]">If you have promo code, Enter it here</p>
                        <div className="mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded-md">
                            <input type="text" placeholder="Promo Code" className="bg-transparent border-none outline-none pl-2.5" />
                            <button className="w-36 md:w-[10vw] py-3 px-1 bg-black border-none text-white rounded-md text-xs md:text-base">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart