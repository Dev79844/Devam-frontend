import { HashRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Admin from "./Pages/Admin"

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </HashRouter>
      
    </div>
  )
}

export default App
