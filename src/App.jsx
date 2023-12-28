import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"

function App() {

  return (
    <div>
      <Routes>
        <Route index element={ <Home/> }/>
      </Routes>
    </div>
  )
}

export default App
