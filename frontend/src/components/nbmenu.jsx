import React from 'react'
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Fonda365Context } from '../context/Fonda365ContextProvider';
import { useNavigate } from 'react-router';

const Nbmenu = () => {

    const {dataCategoria, dataSesion} = useContext(Fonda365Context)
    
    const navigate = useNavigate()

    const hClick = (idcategoria) => {
        navigate(`/ProductoCategoria/${idcategoria}`)
    }

    return (
    <>
        <div>
            <nav className="navbar">
                <div className="container-fluid d-flex justify-content-around">
                    <Link className="navbar-brand" to="/">
                        <img src="src\assets\logofonda365.png" alt="Logo" width="200" height="104" className="d-inline-block align-text-top" />
                    </Link>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Producto" aria-label="Search" />
                        <input className="form-control me-2" type="search" placeholder="Comuna" aria-label="Search" />
                        <input className="form-control me-2" type="search" placeholder="Local" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Buscar</button>
                    </form>
                    <div className="d-flex flex-column justify-content-end align-items-center">
                        <Link className="icono_perfil d-flex align-items-center" to="/InicioRegistro"><img src="src\assets\person.svg" /></Link> 
                        <div className="dropdown">
                        {    
                            dataSesion &&
                            dataSesion.map((dataSesionUsuario,index) => (
                                <button key={index} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{dataSesionUsuario.Nombre} {dataSesionUsuario.Apellido}</button>
                            ))
                        }                                
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="#">Cerrar Sesión</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="btn-group" role="group" aria-label="Default button group">
                        {
                            dataCategoria  &&
                            dataCategoria.map((dataCatego,index) => (
                                <button key={index} type="button" onClick={() => hClick(dataCatego.Id_Categoria)} className="btn btn-outline-dark"><b>{dataCatego.Categoria}</b></button>
                            ))
                        }
                    </div>
                </div>
            </nav>
        </div>
    </>
    )
}

export default Nbmenu