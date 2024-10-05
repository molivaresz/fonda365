import React from 'react'

const Nbmenu = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid d-flex justify-content-around">
                    <a className="navbar-brand" href="#">
                        <img src="src\assets\logofonda365.png" alt="Logo" width="100" height="52" className="d-inline-block align-text-top" />
                    </a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Producto" aria-label="Search" />
                        <input className="form-control me-2" type="search" placeholder="Comuna" aria-label="Search" />
                        <input className="form-control me-2" type="search" placeholder="Local" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Buscar</button>
                    </form>                    
                    <a className="icono_perfil d-flex align-items-center"><img src="src\assets\person.svg"></img></a>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="btn-group" role="group" aria-label="Default button group">
                        <button type="button" className="btn btn-outline-dark">Cerveza</button>
                        <button type="button" className="btn btn-outline-dark">Whisky</button>
                        <button type="button" className="btn btn-outline-dark">Ron</button>
                        <button type="button" className="btn btn-outline-dark">Vino</button>
                        <button type="button" className="btn btn-outline-dark">Tequila</button>
                        <button type="button" className="btn btn-outline-dark">Pisco</button>
                        <button type="button" className="btn btn-outline-dark">Espumante</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nbmenu