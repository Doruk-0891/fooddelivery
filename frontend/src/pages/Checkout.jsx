import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";


const Checkout = () => {
    const {getTotalCartPrice} = useContext(StoreContext);

    return (
        <form className="flex items-start justify-between gap-12 mt-24 flex-col md:flex-row">
            <div className="w-full max-w-[max(30%, 500px)] [&>input]:mb-3.5 [&>input]:w-full [&>input]:p-2.5 [&>input]:border-1 [&>input]:border-[#c5c5c5] [&>input]:rounded-md [&>input]:outline-[#FF4D25]">
                <p className="text-3xl font-semibold mb-12">
                    Delivery Information
                </p>
                <div className="[&>input]:mb-3.5 [&>input]:w-full [&>input]:p-2.5 [&>input]:border-1 [&>input]:border-[#c5c5c5] [&>input]:rounded-md [&>input]:outline-[#FF4D25] flex gap-2.5">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Street" />
                <div className="[&>input]:mb-3.5 [&>input]:w-full [&>input]:p-2.5 [&>input]:border-1 [&>input]:border-[#c5c5c5] [&>input]:rounded-md [&>input]:outline-[#FF4D25] flex gap-2.5">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />

                </div>
                <div className="[&>input]:mb-3.5 [&>input]:w-full [&>input]:p-2.5 [&>input]:border-1 [&>input]:border-[#c5c5c5] [&>input]:rounded-md [&>input]:outline-[#FF4D25] flex gap-2.5">
                    <input type="text" placeholder="Zip Code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="text" placeholder="Phone" />
            </div>

            <div className="w-full max-w-[max(40%, 500px)]">
                <div className="flex flex-col gap-5">
                    <h2>Cart Total</h2>
                    <div className="text-[#555] [&>div]:flex [&>div]:justify-between">
                        <div>
                            <p>Subtotal</p>
                            <p>${getTotalCartPrice()}</p>
                        </div>
                        <hr className="my-2.5" />
                        <div>
                            <p>Delivery Fee</p>
                            <p>${getTotalCartPrice() === 0 ? 0 : 2}</p>
                        </div>
                        <hr className="my-2.5" />
                        <div>
                            <p>Total</p>
                            <p>${getTotalCartPrice() === 0 ? 0 : getTotalCartPrice() + 2}</p>
                        </div>
                    </div>
                    <button className="border-none text-white bg-[#FF4D25] w-[200px] lg:w-[15vw] cursor-pointer rounded-md py-3 text-xs md:text-base mt-7">PROCEED TO PAY</button>
                </div>
            </div>
        </form>
    )
}

export default Checkout