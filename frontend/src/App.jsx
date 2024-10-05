import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Nbmenu from './components/nbmenu';
import Home from './views/home';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nbmenu />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>

    </>
  )
}

export default App
