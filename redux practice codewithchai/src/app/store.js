import {configureStore} from '@reduxjs/toolkit'

// here we have imported the default export so we can give it anyname.
import todoReducer from '../Feature/Todo/todoSlice';


// created store from redux
// mostly default value is object ()
export const store = configureStore({
    reducer: todoReducer
})








// Exporting the Reducer as todoSlice.reducer:

// When you export the reducer using export default todoSlice.reducer, you are specifying that the default export from the './path/to/todoSlice' file is the reducer defined
// in todoSlice.This means that whoever imports this file using import todoReducer from './path/to/todoSlice' will receive whatever was exported as the default, in this
// case, todoSlice.reducer.

// Importing as todoReducer:
// When you import the default export from './path/to/todoSlice' using import todoReducer from './path/to/todoSlice', you are assigning the imported value to a variable named 
// todoReducer.The name todoReducer is arbitrary and chosen by you in the import statement. It doesn't have to match the name of the exported variable (todoSlice.reducer in 
// this case).