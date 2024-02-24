import { Routes,Route } from "react-router-dom"
import Books from "./Components/Books"
import Register from "./Components/Register"

function App() {
  return (
  <Routes>
    <Route path="/" element={<Books/>}/>
    <Route path="/Register" element={<Register/>}/>
  </Routes>
  )
}

export default App
