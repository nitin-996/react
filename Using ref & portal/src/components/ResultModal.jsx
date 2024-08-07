import { forwardRef } from "react"

const ResultModal = forwardRef (function ResultModal({result , targetTime},ref){

    return <>
    <dialog className="result-modal" ref={ref}>

        <h2>you {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>you stopped the timer with <strong> X seconds left.</strong></p>

        <form method="dialog">

            <button>close</button>
        </form>
    </dialog>

    </>
})

export default  ResultModal;