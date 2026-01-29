import React,{useState} from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems((prevItems) => {
            let updatedItems = [];
            let flag = true;
            updatedItems = prevItems.map(prevItemState => {
                if(item.id === prevItemState.id){
                    flag = false;
                    return {
                        ...prevItemState,
                        quantity: prevItemState.quantity + item.quantity
                    };
                }
                return prevItemState;  
                });
            if(flag){
                updatedItems = [...updatedItems, item];
            }
            return updatedItems;
        });
    };

    const removeItemFromCart = (item) => {
        console.log("Removing item:", item);
        setCartItems((prevItems) => {
            return prevItems.filter(prevItemState => prevItemState.id !== item.id);
        });
    };

    const editItemHandler = (item) => {
        setCartItems((prevItems) => {
            return prevItems.map(prevItemState => {
                if(item.id === prevItemState.id){
                    return item;
                }
                return prevItemState;
            });
        });
    };

    const context = {
        items: cartItems,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        editItem: editItemHandler
    }

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;