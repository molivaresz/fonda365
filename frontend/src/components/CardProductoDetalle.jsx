import Card from 'react-bootstrap/Card';



const CardProductoDetalle = (props) => {

    return (
        <>
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>

        <Card key={"c" + props.dproducto.id_producto}>
            <Card.Img className='imgcard' key={"ci" + props.dproducto.id_producto} variant="top" src={props.dproducto.img} />
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

    export default CardProductoDetalle