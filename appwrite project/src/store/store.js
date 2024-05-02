import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


// created store from redux tool
export const store = configureStore({
    reducer: {

    }
})

export default store;