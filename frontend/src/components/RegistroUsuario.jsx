import React from 'react'

const RegistroUsuario = () => {
    return (
    <div className='container-fluid d-flex flex-column py-5'>
        <form>
            <div className="mb-3">
                <label for="formGroupInput" className="form-label">Nombre:</label>
                <input type="text" className="form-control" id="formGroupInputNombre" />
            </div>
            <div className="mb-3">
                <label for="formGroupInput" className="form-label">Apellido:</label>
                <input type="text" className="form-control" id="formGroupInputApellido" />
            </div>  
            <div className="mb-3">
                <label for="formGroupInput" className="form-label">Correo Electrónico:</label>
                <input type="email" className="form-control" id="formGroupInputEmail" />
            </div>  
            <div className="mb-3">
                <label for="formGroupInput" className="form-label">Contraseña:</label>
                <input type="password" className="form-control" id="formGroupInputPassword" />
            </div>  
            <div className="mb-3">
                <label for="formGroupInput" className="form-label">Ciudad:</label>
                <input type="text" className="form-control" id="formGroupInputCiudad" />
            </div>  
            <div className="mb-3">
                <label for="inputState" className="form-label">Comuna:</label>
                <select className="form-select" id="formGroupSelectComuna">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="mb-3">
                <label for="formGroupInput" className="form-label">Fecha Nacimiento:</label>
                <input type="date" className="form-control" id="formGroupInputFechaNac" />
            </div>  
            <button type="button" className="btn btn-secondary">Registrarse</button>
        </form>
    </div>
    )
}

export default RegistroUsuario