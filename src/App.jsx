import EmeraldUsers from "./components/EmeraldUsers"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
 

  return (

    <Router>
      <Routes>
        <Route path="/*" element={<EmeraldUsers/>}/>
      </Routes>
    </Router>
  )
}

export default App
