import Header from "./components/Header";
import Meals from "./components/Meals";
import { CardContextProvider } from "./Context/Cart_Context";

function App() {
  return (
    <>
    <CardContextProvider>

      <Header/>
      <Meals/>

    </CardContextProvider>
    </>
  );
}

export default App;
