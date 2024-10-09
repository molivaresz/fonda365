import React from 'react'
import { Container } from 'react-bootstrap'

const InfoDespacho = () => {
    return (
        <Container>
            <div className='p-5'>
                <h2><b>CONDICIONES DE DESPACHO</b></h2>
                <p>
                    Si realizas tu pedido antes de las 08:00 a.m. tus productos llegarán durante el mismo día. De lo contrario,
                    tu pedido llegará con normalidad al día siguiente de tu compra. El horario de despacho puede variar entre 
                    las 9:00 y las 22:00 horas debido a diversos factores, por lo que no podemos comprometernos con horarios 
                    específicos ni horarios de oficina. Revisa la siguiente tabla para confirmar si tu comuna se encuentra habilitada.
                </p>
                <p>
                    Para las comunas de Colina, Lampa y Huechuraba sólo tenemos despacho los días martes, jueves y sábado.
                </p>
                <h4><b>No despachamos los días feriados.</b></h4>
                <p>
                Las condiciones de despachos pueden variar en <b>épocas de alta demanda, como Cyber Monday o Black Friday; </b>
                estas serán avisadas oportunamente en la parte superior de nuestro sitio web, presente a lo largo de toda la página.
                </p>

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Comuna</th>
                        <th scope="col">Despacho el mismo dia</th>
                        <th scope="col">Envio Gratis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row"> La Florida</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Estacion Central</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Conchali</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Independecia</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">La Cisterna</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">La Reina</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Las Condes</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Lo Barnechea</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Macul</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Maipu</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Ñuñoa</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Peñalolen</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Providencia</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Pudahuel</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Quilicura</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Quinta Normal</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Recoleta</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">San Miguel</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Santiago Centro</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Vitacura</td>
                            <td>Lunes a Sábado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Huechuraba</td>
                            <td>Martes, Jueves y Sabado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Colina</td>
                            <td>Martes, Jueves y Sabado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                        <tr>
                            <td scope="row">Lampa</td>
                            <td>Martes, Jueves y Sabado</td>
                            <td>Sobre $35.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Container>
    )
}

export default InfoDespacho