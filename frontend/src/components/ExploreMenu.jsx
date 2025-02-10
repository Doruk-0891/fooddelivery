import { menu_list } from "../assets/frontend_assets/assets"
import FoodDisplay from "./FoodDisplay";

const ExploreMenu = ({category, setCategory}) => {

    const handleCategory = (menu_item) => {
        setCategory(prev => prev === menu_item ? 'All' : menu_item);
    }

  return (
    <div className="flex flex-col gap-5">
        <h2 className="text-[#262626] font-semibold">
            Explore our Menu
        </h2>
        <p className="max-w-[60%] text-[#808080]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="flex justify-between items-center gap-8 text-center my-5 overflow-x-scroll">
            {
                menu_list.map((item, index) => {
                    return (
                        <div key={index} onClick={() => handleCategory(item.menu_name)}>
                            <img src={item.menu_image} alt="" 
                            className={`w-[75vw] min-w-[80px] cursor-pointer rounded-full ${category === item.menu_name && 'border-4 border-[#FF4D25] p-0.5'}`} 
                            />
                            <p className="mt-2.5 text-[#747474] md:text-[1.4vw] cursor-pointer">{item.menu_name}</p>
                        </div>
                    );
                })
            }
        </div>
        <hr className="my-2.5 h-0.5 bg-[#e2e2e2] border-none" />
        <FoodDisplay category={category} />
    </div>
  )
}

export default ExploreMenu