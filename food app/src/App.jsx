import Header from "./components/Header";
import Meals from "./components/Meals";
import { CardContextProvider } from "./Context/Cart_Context";
import { ProgressContextProvider } from "./Context/User_progress_Context";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <ProgressContextProvider>
        <CardContextProvider>
          <Header />
          <Meals />
          <Cart/>
          <Checkout/>
        </CardContextProvider>
      </ProgressContextProvider>
    </>
  );
}

export default App;
