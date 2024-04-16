import React , {useContext , useState } from 'react'
import Usercontext from '../context/Usercontext'

function Login(){

    const [username , setusername ] =useState('')
    const [ password , setpassword] = useState('')

const {setuser} = useContext(Usercontext)



// sending data to below
    const handleSubmit = (e)=>{
        e.preventDefalt()
        setuser({username ,password})

    }

    return(
        <div>
<h2>login</h2>
<input type='text' value={username}
onClick={(e)=> setusername(e.target.value)} placeholder='username'></input>
<input type='text'
value={password}
onClick={(e)=>setpassword(e.target.value)} placeholder='password'></input>
<button onClick={handleSubmit}> Submit</button>

        </div>
    )
}

export default Login