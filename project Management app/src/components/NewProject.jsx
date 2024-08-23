import { useRef } from "react"
import Input from "./Input"


function NewProject({onAdd}) {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enterDescription = description.current.value;
    const entereddueDate = dueDate.current.value;

    // validation

    

    onAdd({title:enteredTitle,
      description: enterDescription,
      dueDate: entereddueDate
    })
  }
  return (
    // custom tailwind using [] this bracket
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave}  
            className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
           <Input ref={title} label="Title" />
           <Input ref={description} label="description" textArea />
           <Input type="date" ref={dueDate} label="Due Date" />

        </div>
    </div>
  )
}

export default NewProject