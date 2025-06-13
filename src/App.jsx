import { useState } from 'react'
import './App.css'

function Box({inputColor}) {
  return (
    <div className='box' style={{backgroundColor: inputColor}}></div>
  )
}

function App() {
  const [color, setColor] = useState("blue");
  const [recentColor, setRecentColor] = useState([]);

  function changeColor(event) {
    setColor(event.currentTarget.value);
  }

  function recentColorChange(inputColor) {
    setColor(inputColor);
  }

  function saveColor(inputColor) {
    if (!recentColor.includes(inputColor)) {
      setRecentColor([...recentColor, inputColor]);
    }
  }

  return (
    <>
      <h1>Color Picker</h1>
      <Box inputColor={color} />
      <p>Selected Color: <strong>{color}</strong></p>
      <input type="text" value={color} onChange={changeColor} />
      <select value={color} onChange={changeColor}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <div>
        <button className="save-color" onClick={() => saveColor(color)}>Save Color</button>
      </div>
      <h3>Recent Colors</h3>
      { recentColor.length > 0 &&
        <div className="recent-colors">
          {recentColor.map((color, i) => {
            return (
              <div
              key={i}
              style={{width: 100, height: 100, backgroundColor: color}}
              onClick={() => recentColorChange(color)}
              ></div>
            )
          })}
        </div>
      }
    </>
  )
}

export default App
