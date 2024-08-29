import { useState } from "react";

function NewTask({onTask}){
    const [enteredTask , setEnteredTask] = useState('');

    function handleClick(){
        onTask(enteredTask)
       setEnteredTask("")
    }

    function handleChange(e){
        if (enteredTask.trim() === '') {
            return;
        }
        setEnteredTask(e.target.value);
    }
    return (
    <div className="flex item-center gap-4">
        <input onChange={handleChange} value={enteredTask} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
        <button className=" text-stone-700 hover:text-stone-800" onClick={handleClick} >Add Task</button>
    </div>
    );
}

export default NewTask;