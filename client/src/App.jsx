import { Button } from "flowbite-react";
import './App.css'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Signin from "./pages/Signin.jsx"
import Signout from "./pages/Signout.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Projects from "./pages/Projects.jsx"

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />}  />
        <Route path="/sign-out" element={<Signout />}  />
        <Route path="/dashboard" element={<Dashboard />}  />
        <Route path="/projects" element={<Projects />}  />
      </Routes>
     </BrowserRouter>
    
   
  )
}

export default App
