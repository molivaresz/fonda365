import React from 'react'
import { useContext } from 'react';
import { Fonda365Context } from '../context/Fonda365ContextProvider';

const Nbmenu = () => {

    const {dataCategoria} = useContext(Fonda365Context)

    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid d-flex justify-content-around">
                    <a className="navbar-brand" href="#">
                        <img src="src\assets\logofonda365.png" alt="Logo" width="200" height="104" className="d-inline-block align-text-top" />
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

                        {
                            dataCategoria  &&
                            dataCategoria.map((dataCatego,index) => (
                                <button key={index} type="button" className="btn btn-outline-dark">{dataCatego.categoria}</button>
                            ))
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nbmenu