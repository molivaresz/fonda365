import React from 'react'
import { useContext } from "react";
import { Fonda365Context } from '../context/Fonda365ContextProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardProducto from '../components/CardProducto';
import Banner from '../components/Banner';


const Home = () => {

  const {dataProducto} = useContext(Fonda365Context)

  return (
    <>
    <Banner/>
    <Container fluid>
    <Row>
    {
      dataProducto && 
      dataProducto.map((dataProd,index) => (
        index <= 7 ? <Col key={index} xs={12} md={3}><CardProducto dproducto={dataProd} /></Col> : null
      ))
    }
    </Row>
    </Container>
    </>
  )
}

export default Home