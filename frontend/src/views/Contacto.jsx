import React from 'react'
import { Container } from 'react-bootstrap'

const Contacto = () => {
    return (
        <Container className='p-5' >
        <div className= "d-flex justify-content-center p-3">
            <input type="text" aria-label="First name" placeholder='Nombre' className="form-control"/>
            <input type="text" aria-label="Last name" placeholder='Apellido' className="form-control"/>
        </div>
        <div className= "d-flex justify-content-center p-3">
            <input type="text" className="form-control" placeholder="Correo" aria-label="Username"/>
            <span className="input-group-text">@</span>
            <input type="text" className="form-control" placeholder="gmail" aria-label="Server"/>
        </div>
        <div className= "d-flex justify-content-center p-3">
            <input type="text" aria-label="First name" placeholder="Empresa (opcional)" className="form-control"/>
            <input type="text" aria-label="Last name" placeholder="Telefono(opcional)" className="form-control"/>
        </div>
        <div className= "d-flex justify-content-center p-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Mensaje" rows="3"></textarea>
        </div>
        <div className='d-flex justify-content-center'>
            <button type='button' className='btn btn-primary'>Enviar</button>
        </div>
        </Container>
    )
}

export default Contacto