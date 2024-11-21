import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  UpdateCartItemQuantity: () => {},
});

function shoppingCartReducer(state, action) { 
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];
    console.log(`cart added items ${JSON.stringify(updatedItems)}`);
    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => { 
        console.log(`exitingcart ${JSON.stringify(cartItem.id)}`);
        console.log(`exitingcart ${JSON.stringify(action.payload)}`);
        return cartItem.id === action.payload}

          );
    const existingCartItem = updatedItems[existingCartItemIndex];
    console.log(`exitingcartitem ${JSON.stringify(existingCartItem)}`);
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
      console.log(`third ${JSON.stringify(updatedItems[existingCartItemIndex])}`);
      
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

   

    return {
      items: updatedItems,
    };
  }

  if(action.type === 'UPDATE_ITEM'){
    const updatedItems = [...state.items];
  const updatedItemIndex = updatedItems.findIndex(
    (item) => item.id === action?.payload?.productId
  );

  const updatedItem = {
    ...updatedItems[updatedItemIndex],
  };

  updatedItem.quantity += action.payload.amount;

  if (updatedItem.quantity <= 0) {
    updatedItems.splice(updatedItemIndex, 1);
  } else {
    updatedItems[updatedItemIndex] = updatedItem;
  }

  return {
    ...state,
    items: updatedItems,
  };
}
//   return state;
}
const CartContextProvider = ({ children }) => {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
        type: "UPDATE_ITEM",
        payload: {
            productId,
            amount
        }
        
    })
   
  }

  const ctxvalue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    UpdateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxvalue}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
