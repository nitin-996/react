import { createContext, useState } from "react"




const progressCartContext = createContext({
    progress:"",
    showCart: ()=>{},
    hideCart: ()=>{},
    showCheckout: ()=>{},
    hideCheckout: ()=>{}
})




export function ProgressContextProvider({children}){


    const [progressCart , setProgressCart] = useState("")

    function showCart(){
        setProgressCart('cart')
    }

    function hideCart(){
        setProgressCart("")
    }

    function showCheckout(){
        setProgressCart('checkout')
    }

    function hideCheckout(){
        setProgressCart("")
    }


    const progressCTX = {
        progress:progressCart,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }


    return <progressCartContext.Provider value={progressCTX}>{children}</progressCartContext.Provider>
}
 


export default progressCartContext