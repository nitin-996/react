import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// after setting up store , reducer and usedispatch and useselect. 
// to use the redux we have to use its provider and store like below we have done.


import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(

  //  like in context api we used there value in provider but in 
  //   redux we use store as value in provider 
      
 
  <Provider store={store}>
    <App />
    </Provider>
  
)
