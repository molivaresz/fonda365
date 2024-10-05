import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Nbmenu from './components/nbmenu';
import Home from './views/home';
import Fonda365ContextProvider from './context/Fonda365ContextProvider';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fonda365ContextProvider>
        <Nbmenu />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Fonda365ContextProvider>
    </>
  )
}

export default App
