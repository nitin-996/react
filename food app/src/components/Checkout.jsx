import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";
import progressCartContext from "../Context/User_progress_Context";
import CartContext from "../Context/Cart_Context";
import { api_url } from "../utils/BaseUrl";

function Checkout() {
  const cartContext = useContext(CartContext);

  const progress_CTX = useContext(progressCartContext);

  const totalPrice = cartContext.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  console.log(`executed checkout 0001 ${progress_CTX.progress}`);

  function handleCloseCheckout(e) {
    // e.preventDefault()

    console.log(`executed checkout ${progress_CTX.progress}`);

    progress_CTX.hideCheckout();
  }

  const [checkOutInput, setcheckOutInput] = useState({
    name: "",
    email: "",
    street: "",
    "postal-code": "",
    city: "",
  });

  function handleInputChange(e) {
    const id = e.target.id;
    const value = e.target.value;

    console.log(id, value);
    setcheckOutInput((previous) => ({
      ...previous,
      [id]: value,
    }));
  }
  
  async function handleSubmit(e) {
  e.preventDefault();
  progress_CTX.hideCheckout();

  try {
    const res = await fetch(`${api_url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartContext.items,
          customer: checkOutInput,
        },
      }),
    });

    const data = await res.json();
    console.log("Order submitted:", data);
  } catch (err) {
    console.error("Failed to submit order:", err);
  }
}


  

  return (
    <Modal
      open={progress_CTX.progress === "checkout"}
      onClose={
        progress_CTX.progress === "checkout" ? handleCloseCheckout : null
      }
    >
      {/* when defining button in the form define its type as well bcz the default type is submit for every button */}
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>{totalPrice}</p>

        <Input
          label="Full Name"
          type="text"
          id="name"
          value={checkOutInput["Full Name"]}
          onChange={handleInputChange}
        />
        <Input
          label="Email"
          type="text"
          id="email"
          value={checkOutInput.Email}
          onChange={handleInputChange}
        />
        <Input
          label="street"
          type="text"
          id="street"
          onChange={handleInputChange}
          value={checkOutInput.street}
        />

        <div className="control-row">
          <Input
            label="postal code"
            type="text"
            id="postal-code"
            onChange={handleInputChange}
            value={checkOutInput["postal-code"]}
          />
          <Input
            label="city"
            id="city"
            type="text"
            onChange={handleInputChange}
            value={checkOutInput.city}
          />
        </div>

        <p className="modal-actions">
          <Button textOnly type="button" onClick={handleCloseCheckout}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
