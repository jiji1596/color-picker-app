import { useState } from 'react'
import './App.css'

function Box({inputColor}) {
  return (
    <div className='box' style={{backgroundColor: inputColor}}></div>
  )
}

function App() {
  const [color, setColor] = useState("blue");

  function changeColor(event) {
    setColor(event.currentTarget.value);
  }

  return (
    <>
      <Box inputColor={color} />
      <p>Selected Color: <strong>{color}</strong></p>
      <input type="text" value={color} onChange={changeColor} />
    </>
  )
}

export default App
