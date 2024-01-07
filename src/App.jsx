import { useState } from "react"
import CardGrid from "./components/CardGrid"
import StartScreen from "./components/StartScreen"
import './components/style/app.css'

function App() {
  const [mode, setMode] = useState(null)

  const handleSelectedMode = (selectedMode) => {
    setMode(selectedMode)
  }

  return (
    <div className="app">
      {mode === null ? <StartScreen getMode={handleSelectedMode} />  : <CardGrid num={mode} />}
    </div>
  )
}

export default App
