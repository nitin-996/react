import NewTask from "./NewTask"


function Tasks({onTask , onDeleteTask , tasks}){

    console.log([3,5,2,1,5])

    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">
                <NewTask onTask={onTask}/>
            </h2>
            {tasks.length === 0 && <p className="text-stone-800 my-4">
                This project does not have any tasks yet.
            </p>}
            
            
{tasks.length > 0 && (
    <ul className="p-4 mt-8 rounded-md bg-stone-100"> 
    {tasks.map((task)=>
  <li key={task.id} className="flex justify-between my-4"> 
    <span>{task.text}
        {console.log(task.text)}
        
    </span>
    <button onDeleteTask={()=>onDeleteTask(task.id)} className="text-stone-700 hover:text-red-600">
        clear
        </button>
    </li>

)} </ul> )}
            
        </section>
    )
}

export {Tasks}