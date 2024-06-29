import { useState,useCallback } from 'react'

import './App.css'

function App() {
  const [count, setLength] = useState(6);
  
  const [charAllowed, setcharAllowed] = useState(false);
  const [password,setPassword]=useState("")
  const passwordGenerator=useCallback(fn,[])
  

  return (
   <>
   
   <h1 className='bg-amber-400 text-gray-50 text-xl'>Raman</h1>
   <h2 className='text-gray-50'>Hey Man</h2>
   
   </>
  )
}

export default App
