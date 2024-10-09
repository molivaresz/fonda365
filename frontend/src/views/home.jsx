import React from 'react'
import { useContext } from "react";
import { Fonda365Context } from '../context/Fonda365ContextProvider';
import CardProducto from '../components/CardProducto';
import Banner from '../components/Banner';


const Home = () => {

  const {dataProducto} = useContext(Fonda365Context)

  return (
    <>
    <Banner/>
    <div className="galeriahome container-fluid">
    <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
    {
      dataProducto && 
      dataProducto.map((dataProd,index) => (
        index <= 7 ? <div className="col" key={index} xs={12} md={3}><CardProducto dproducto={dataProd} /></div> : null
      ))
    }
    </div>
    </div>
    </>
  )
}

export default Home