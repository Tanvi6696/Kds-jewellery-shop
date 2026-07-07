import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Collections from './Pages/Collections.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Service from './Pages/Service.jsx';
import Contact from './Pages/Contact.jsx';
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
        <Navbar />
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
