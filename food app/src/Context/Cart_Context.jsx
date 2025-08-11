import { createContext, useReducer } from "react";



const CartContext = createContext({
    items: [],
    addItem: (item) => {} ,
    removeItem: (id) => {}
});

function cartReducer(state,action){

    // add logic
    if(action.type == "add"){}

    // remove item logic
    if(action.type == "remove"){}

    // if neither of action done then just returning default state.

    return state;

}

export function CardContextProvider({children}){

   let intialstate = {item:[]}
   const [state , dispatch ] =  useReducer(cartReducer,intialstate)


    return <CartContext.Provider>{children}</CartContext.Provider>

}

export default CartContext