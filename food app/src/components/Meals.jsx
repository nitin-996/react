// import { useEffect, useState } from "react";
import { api_url } from "../utils/BaseUrl";
import Meals_items from "./Meals_items";
import useHttp from "../customHooks/useHttp";

function Meals() {

  // old code instead of this using custom hook useHttp
  // const [loadmeals, setLoadmeals] = useState(null);

  // useEffect(() => {
  //   async function meals() {
  //     try {
  //       let res = await fetch(`${api_url}/meals`);
  //       let data = await res.json(); // ✅ await JSON parsing
  //       setLoadmeals(data); // data should be an array
  //     } catch (err) {
  //       console.error("Error fetching meals:", err);
  //       setLoadmeals([]); // fallback to empty array
  //     }
  //   }
  //   meals();
  // }, []);

  

  const {loading,error, data: loadmeals} = useHttp(api_url)

  return (
    <div>
      {loadmeals === null ? (
        "loading data"
      ) : (
        
        <ul id="meals">{loadmeals.map((meal) => (
          <Meals_items key={meal.id} item={meal} /> // ✅ render meal name
        ))}
        </ul>
      )}
    </div>
  );
}

export default Meals;
