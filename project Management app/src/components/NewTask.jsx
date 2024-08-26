import { useState } from "react";

function NewTask(){
    const [enteredTask , setEnteredTask] = useState();

    function handleChange(e){
        setEnteredTask(e.target.value);
    }
    return (
    <div className="flex item-center gap-4">
        <input onChange={handleChange} value={enteredTask} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
        <button className=" text-stone-700 hover:text-stone-800">Add Task</button>
    </div>
    );
}

export default NewTask;