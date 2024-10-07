import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import { useContext } from "react";
import { Fonda365Context } from '../context/Fonda365ContextProvider';


const CardProducto = (props) => {

    const navigate = useNavigate()
//    const {agregaPizza_a_carro} = useContext(PizzasContext)

    const hClick = (id) => {
        navigate(`/DetalleProducto/${id}`)
    }

    return (
        <>
        <Card key={"c" + props.dproducto.id_producto}>
            <Card.Img key={"ci" + props.dproducto.id_producto} variant="top" src={props.dproducto.img} />
            <Card.Body key={"cb" + props.dproducto.id_producto}>
                <Card.Title className='border-bottom border-secondary' key={"ct" + props.dproducto.id_producto}>{props.dproducto.nombre_producto}</Card.Title>
                <div className='text-center'>
                    <h3>${props.dproducto.precio}</h3>
                </div>
                {/* <div className='border-bottom border-secondary' key={"ctxt" + props.dproducto.id_producto}>
                    <b>ingredientes:</b>
                    <ul className='estilo_ul'>
                    {props.dpizzas.ingredients.map((ingrediente,index) => (
                        <li key={index}>🍕 {ingrediente}</li> 
                    ))}
                    </ul>
                </div> */}
                <div className='text-center'>
                    <button type="button" onClick={() => hClick(props.dproducto.id_producto)} className="btn btn-info me-1">Ver Detalle 👀</button>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}

    export default CardProducto