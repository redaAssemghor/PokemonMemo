import { useState } from "react"
import CardGrid from "./components/CardGrid"
import StartScreen from "./components/StartScreen"

function App() {
  const [mode, setMode] = useState(null)

  const handleSelectedMode = (selectedMode) => {
    setMode(selectedMode)
  }

  return (
    <>
      {
        mode === null ? <StartScreen getMode={handleSelectedMode} />  : <CardGrid num={mode} />
      }
    </>
  )
}

export default App
