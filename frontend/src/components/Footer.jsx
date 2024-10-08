import React from 'react'

const Footer = () => {
    return (
    <div className="containerfooter">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div className="col mb-3">
                <img src="src\assets\logofonda365.png" alt="Logo" width="200" height="104" className="d-inline-block align-text-top" />
            </div>

            <div className="col mb-3"></div>

            <div className="col mb-1">
                <h5>Donde Fonda365</h5>
                <ul class="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Inicio</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Quienes Somos</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mi Cuenta</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contacto</a></li>
                </ul>
            </div>

            <div class="col mb-1">
                <h5>Servicio al Cliente</h5>
                <ul class="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terminos y Condiciones</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Preguntas Frecuentes</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Información Despachos</a></li>
                </ul>
            </div>

            <div className="col mb-1">
                <h5>Contacto</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">+56 9 9999 9999</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contacto@fonda365.com</a></li>
                </ul>
            </div>
        </footer>
        <div className="d-flex flex-column flex-sm-row justify-content-between border-top">
                <p className='px-2'>Copyright &copy; 2024</p>
                <p className='px-2'>Desarrollado por ROLMAX</p>
            </div>
    </div>
    )
}

export default Footer