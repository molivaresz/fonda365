import React from 'react'

const InicioSesion = () => {
    return (
        <div className='container-fluid d-flex pt-5 ps-5'>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="InputPassword" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="InputPassword" />
                </div>
                <button type="button" className="btn btn-secondary">Ingresar</button>
            </form>
        </div>
    )
}

export default InicioSesion