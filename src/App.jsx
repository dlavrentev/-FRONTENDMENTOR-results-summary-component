import { useState } from 'react'
import './App.css'
import Result from './components/Results/result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Result />
    </div>
  )
}

export default App
