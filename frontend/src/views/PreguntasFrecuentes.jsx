import React from 'react'
import { Container } from 'react-bootstrap'

const PreguntasFrecuentes = () => {
    return (
        <Container className='p-2'>
            <div className='p-3'>
                <h1>Preguntas Frecuentes</h1>
            </div>
            <table className="table">
                <tbody>
                    <tr>
                    <th scope="row">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><b>+</b></button>
                        <ul className="dropdown-menu">
                            <li>Todas las Comunas de Santiago</li>
                        </ul>
                    </th>
                    <td><h4>¿A que comunas realizan despachos?</h4></td>
                    </tr>
                    <tr>
                    <th scope="row">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><b>+</b></button>
                        <ul className="dropdown-menu">
                            <li>De momento no realizamos despachos a regiones, esperamos estar pronto!</li>
                        </ul>
                    </th>
                    <td><h4>¿Despachan a regiones?</h4></td>
                    </tr>
                    <tr>
                    <th scope="row">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><b>+</b></button>
                        <ul className="dropdown-menu">
                            <li>Nuestros repartos son de Lunes a Sábado excepto feriados y festivos.</li>
                        </ul>
                    </th>
                    <td><h4>¿Que dias reparten?</h4></td>
                    </tr>

                    <tr>
                    <th scope="row">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><b>+</b></button>
                        <ul className="dropdown-menu">
                            <li>El valor del despacho es de $3.000 si el pedido es inferior a los $35.000, si el pedido supera dicho monto el envió es gratis.
                                <p>Excepciones comunas de Colina, Pudahuel, Maipú y Colina valor fijo de $2.990.</p>
                            </li>
                        </ul>
                    </th>
                    <td><h4>¿El despacho tiene algún valor?</h4></td>
                    </tr>

                    <tr>
                    <th scope="row">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><b>+</b></button>
                        <ul className="dropdown-menu">
                            <li>Debe contactarse con nuestro equipo de ventas por nuestros canales oficiales ventas@fonda365.cl o al +56 9 3528 4233</li>
                        </ul>
                    </th>
                    <td><h4>Recibi mi pedido pero no es lo que yo compré ¿qué debo hacer?</h4></td>
                    </tr>

                    <tr>
                    <th scope="row">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><b>+</b></button>
                        <ul className="dropdown-menu">
                            <li>Debe contactarse con nuestro equipo de ventas por nuestros canales oficiales ventas@fonda365.cl o al +56 9 3528 4233.</li>
                        </ul>
                    </th>
                    <td><h4>Tengo negocio y necesito Factura ¿Qué debo hacer?</h4></td>
                    </tr>

                    <tr>
                    <th scope="row">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><b>+</b></button>
                        <ul className="dropdown-menu">
                            <li>Para recibir al siguiente día el pedido se debe realizar máximo hasta las 18.00 hrs.</li>
                        </ul>
                    </th>
                    <td><h4>¿Hasta que hora puedo realizar mi pedido para recibir al dia siguiente?</h4></td>
                    </tr>

                    <tr>
                    <th scope="row">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><b>+</b></button>
                        <ul className="dropdown-menu">
                            <li>Debe contactarse con nuestro equipo de ventas por nuestros canales oficiales ventas@fonda365.cl o al +56 9 3528 4233.</li>
                        </ul>
                    </th>
                    <td><h4>¿Que pasa si mi producto llega defectuoso?</h4></td>
                    </tr>

                    <tr>
                    <th scope="row">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><b>+</b></button>
                        <ul className="dropdown-menu">
                            <li>Para reclamos de algún producto defectuoso lo debe hacer dentro de las 48 hrs recibido el pedido a nuestros canales oficiales.</li>
                        </ul>
                    </th>
                    <td><h4>¿Cuantos dias después de recibir mi pedido puedo reclamar por un producto defectuoso?</h4></td>
                    </tr>

                    <tr>
                    <th scope="row">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><b>+</b></button>
                        <ul className="dropdown-menu">
                            <li>No se puede solicitar devolución del dinero.</li>
                        </ul>
                    </th>
                    <td><h4>¿Puedo pedir la devolucion de mi dinero en caso de no querer un producto?</h4></td>
                    </tr>

                </tbody>
                </table>

        </Container>
    )
}

export default PreguntasFrecuentes