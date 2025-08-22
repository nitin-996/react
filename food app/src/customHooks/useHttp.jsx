import { useCallback, useEffect, useState } from "react"

async function sendHttpRequest(url,config){

    const res = await fetch(url,config)   // might fail due to network issue

    const resdata = res.json()

    if(!res.ok){

        throw new Error(
            res.message || "sth went wrong, failed to send api request."

        ) }

    return resdata

}


function useHttp(url,config) {

    const [data , setData] = useState()
    const [loading,setLoading] = useState(false)
    const [Error , setError] = useState()

  const sendRequest =  useCallback(
     async function sendRequest(){
        setLoading(true)
        try {

            
            const resData2 = sendHttpRequest(url,config)
            console.log(resData2);
            
            setData(resData2)
        } catch (error) {
            
            setError(error.message || 'something went wrong ')

        }
       },[url,config])

   useEffect(()=>{
    if (config.method == "Get"){
        sendRequest(url,config)
    }
   },[sendRequest,config])

    return {
        data,loading,Error,sendRequest
    }
 
}

export default useHttp