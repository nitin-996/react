import Header from "./components/Header";
import Meals from "./components/Meals";
import { CardContextProvider } from "./Context/Cart_Context";
import { ProgressContextProvider } from "./Context/User_progress_Context";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <ProgressContextProvider>
        <CardContextProvider>
          <Header />
          <Meals />
          <Cart/>
        </CardContextProvider>
      </ProgressContextProvider>
    </>
  );
}

export default App;
