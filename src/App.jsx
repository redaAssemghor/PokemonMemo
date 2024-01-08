import { useState, useEffect } from "react"
import CardGrid from "./components/CardGrid"
import StartScreen from "./components/StartScreen"
import './components/style/global.css'
import LoadingScreen from "./components/LoadingScreen"

function App() {
  const [mode, setMode] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading && mode !== null) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading, mode]);

  const handleSelectedMode = (selectedMode) => {
    setMode(selectedMode);
    setLoading(true);
  }

  return (
    <div className="appContainer">
      {mode === null ? (
        <StartScreen getMode={handleSelectedMode} />
      ) : loading ? (
        <LoadingScreen />
      ) : (
        <CardGrid num={mode} />
      )}
    </div>
  );
}

export default App;
