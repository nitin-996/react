import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal'

function Timer({title ,targettime}) {

const [ timerexpired, setTimerexpired ] = useState(false)
const [ timerStarted , setTimerStarted ] = useState(false)
const  timer = useRef()
const dialog = useRef();

    function handleStart(){
        timer.current = setTimeout(()=>{
            setTimerexpired(true)
            dialog.current.showModal();
        },
        targettime * 1000
    )

    setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current) 
        setTimerStarted(false)
    }
  return (
    <>

   {timerexpired &&  <ResultModal ref={dialog} targetTime={targettime} result="lost"/>}
   <section className='challenge'>
    <h2>{title}</h2>
    {timerexpired && <p>you lost!</p>} 
    <p className='challenge-time'>
{targettime} second{targettime > 0 ? "s" : ""}
    </p>
        <button onClick={timerStarted ? handleStop : handleStart }>{timerStarted ? "stop" : "start" } challenge</button>

<p className={timerStarted ?? "active" }>
    {timerStarted ? "time is running..." : "timer is inactive"}
</p>
   </section>  
   
   </>
   )
}

export default Timer