import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value="value"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            
        />
    
        
    </div>
    </>
  )
}

export default App
