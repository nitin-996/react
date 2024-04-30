import { createSlice , nanoid } from "@reduxjs/toolkit";


const initialState = {
    // this is first created todo.
    todos:[{
        id:1,
        text:"hello world"
    }]
}


// slice takes three input name , initialState and reducer
// slice takes object
// context api me hum sirf function declaration likhte h definition nhi likhte per yaha per in redux we declare and define the function at same time.
export const todoSlice = createSlice({
 name:'todo',
 initialState,

//  reducer me two default value ka access milta h (state,action)
 reducers:{

    // state hume current initialState value/values ka access deti h.
    // action 
    addTodo: (state,action)=>{
        const todo = {
            id: nanoid(),
            text: action.payload.text
        }
        state.todos.push(todo)
    },
    removeTodo: (state,action)=>{

        // yha humne logic lagaya h ki agar filer value match 
        // then ignore it and add remaining one in array.
        state.todos = state.todos.filter((todo)=> todo.id !== action.payload.id)

        
    },
    updateTodo: (state,action)=>{
        state.todos = state.todos.map((todo)=>
        {todo.id === action.payload.id ?  
        {...todo, text: action.payload.text } : todo })
    }
 }
})

// individual functionatily export ki h jo components me kaam ayangi.
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

// here we are exporting reducer so store can know about which values to store
// Exporting the reducer from the todoSlice, which manages state updates for todos based on dispatched actions.
// Note: The todoSlice also includes action creators and initial state, making it a complete slice for managing todos in Redux.

export default todoSlice.reducer