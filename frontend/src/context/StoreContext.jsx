import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    
    const addToCart = (itemId) => {
        if (cartItems[itemId]) {
            setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}));
            return;
        }
        setCartItems(prev => ({...prev, [itemId]: 1}));
    }
    
    const removeFromCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const getTotalCartPrice = () => {
        let totalAmount = 0;

        food_list.forEach(item => {
            if (cartItems[item._id] > 0) {
                totalAmount += item.price * cartItems[item._id];
            }
        });

        return totalAmount;
    }
    
    const contextValue = {
        food_list,
        cartItems,
        addToCart, removeFromCart,
        getTotalCartPrice
    };



    return (
        <StoreContext.Provider value={contextValue}>
            {
                props.children
            }
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;