import { assets } from "../assets/frontend_assets/assets"

const Footer = () => {
    return (
        <div className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-3 md:py-5 px-[8vw] pt-[50px] md:pt-[80px] mt-[20px] md:mt-[28px]">
            <div className="w-full grid md:grid-cols-4 gap-12 md:gap-20 [&>div]:flex [&>div]:flex-col [&>div]:items-start [&>div]:gap-5 text-xs md:text-base">
                <div className="col-span-2">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, a nam iusto harum libero cum labore ipsum repellendus aspernatur soluta sequi est pariatur distinctio nostrum!</p>
                    <div className="[&>img]:w-8 md:[&>img]:w-10 [&>img]:mr-3.5 flex">
                        <img src={assets.facebook_icon} alt="facebook" />
                        <img src={assets.twitter_icon} alt="twitter" />
                        <img src={assets.linkedin_icon} alt="linkedin" />
                    </div>
                </div>
                <div className="col-span-1">
                    <h2 className="text-white">COMPANY</h2>
                    <ul className="[&>li]:mb-2.5 list-none cursor-pointer">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h2 className="text-white">GET IN TOUCH</h2>
                    <ul className="[&>li]:mb-2.5 list-none cursor-pointer">
                        <li>+1-222-222-222</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr className="w-full h-0.5 my-5 bg-gray-100" />
            <p className="text-xs md:text-base">
                Copyright 2025 @ Tomato.com. All rights reserved.
            </p>
        </div>
    )
}

export default Footer