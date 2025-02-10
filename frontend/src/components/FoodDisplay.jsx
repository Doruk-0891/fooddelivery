import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold md:text-2vw">Top dishes near you</h2>
            <div className="grid grid-flow-row grid-cols-3 mt-8 gap-8 gap-y-12">
                {
                    food_list.map((item, index) => {
                        if (category === 'All' || category === item.category) {
                            return (
                                <FoodItem key={index} food_details={item} />
                            );
                        }
                    }
                    )
                }
            </div>
        </div>
    )
}

export default FoodDisplay