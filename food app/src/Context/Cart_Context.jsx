import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  // add logic
  if (action.type == "add") {
    // checking item exit or not

    // array property findIndex return that item index if it exits.
    const exist_Item_Index = state.items.findIndex(
      (item) => item.id == action.item.id
    ); // agar already existing item id match kerta h action id ke sath that means that item already exits.

    const updatedItem = [...state.items];
    if (exist_Item_Index > -1) {
        console.log("increase quantity by 1");
        
      // this condition is saying that ,agar exist_item greater than -1 tho ye exist kerta h , or hum sirf iski quantity increase kerenge.
      // item already exits tho sirf quantity increasing kerenge.
      const existing_Item = state.items[exist_Item_Index];
      const update_Item_quantity = {
        ...existing_Item,
        quantity: existing_Item.quantity + 1,
      };

      updatedItem[exist_Item_Index] = update_Item_quantity;
    } else {
      // agar item exit nhi kerta tho hum item ko item array mein add kernge.
      updatedItem.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItem };
  }

  // remove item logic
  if (action.type == "remove") {
    // item id se uska index nikala

    const exist_Item_Index = state.items.findIndex(
      (item) => item.id == action.id
    );

    // index ka use kerke item remove kia

    const cartItem = state.items[exist_Item_Index];

    const updatedItem = [...state.items];
    if (cartItem.quantity === 1) {
      //  agar qaunity one h tho remove kerna h item cart se

      updatedItem.splice(exist_Item_Index, 1);
    } else {
      // agar one se jada h tho quantity reduce kerni h one by one.

      const updatedCart = { ...cartItem, quantity: cartItem.quantity - 1 };
      updatedItem[exist_Item_Index] = updatedCart;
    }

    return { ...state, items: updatedItem };
  }

  // if neither of action done then just returning default state.

  return state;
}

export function CardContextProvider({ children }) {
  let intialstate = { items: [] };
  const [Cart, dispatchCartAction] = useReducer(cartReducer, intialstate);

  function addItem(item) {
    dispatchCartAction({
         type: "add",
         item: item });
  }

  function removeItem(id) {
    dispatchCartAction({
      type: "remove",
      id: id,
    });
  }

  const cartValues = {
    items: Cart.items, // first intial state , after action getting updated state
    addItem: addItem,
    removeItem: removeItem,
  };

  console.log(cartValues);
  

  return <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>;
}

export default CartContext;
