import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
      <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gpa-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button onClick={()=>setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button onClick={()=>setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            lavender
          </button>
          <button onClick={()=>setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
          <button onClick={()=>setColor("lawngreen")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lawngreen" }}
          >
            lawngreen
          </button>
          <button onClick={()=>setColor("coral")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "coral" }}
          >
            coral
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
