import { createSlice, nanoid } from "@reduxjs/toolkit";



const initialState = {
    todos: [{
        id:1,
        text: "hello word"
    }]

}


const todoSlice = createSlice({
    // it takes three parameters name,initial value,reducer
    name:"todo",
    initialState
})