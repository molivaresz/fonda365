const { Pool } = require('pg')
require('dotenv').config()
const bcrypt = require('bcryptjs')

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    allowExitOnIdle: true
})

//PRODUCTOS
const getCategorias = async () => {
    const { rows: categorias } = await pool.query("SELECT * FROM categoria")
    return categorias
}

const getProductos = async () => {
    const { rows: productos } = await pool.query('SELECT producto."Id_Producto", producto."Nombre_Producto", producto."Id_Categoria", categoria."Categoria", ' + 
        'producto."Precio", producto."Ciudad", producto."Id_Comuna", comuna."Nombre_Comuna", producto."Id_Local", Local."Nombre_Local", producto."Imagen", ' + 
        'producto."Descripcion" FROM producto inner join comuna on producto."Id_Comuna" = comuna."Id_Comuna" inner join Local on producto."Id_Local" = Local."Id_Local"	' + 
        'inner join categoria on producto."Id_Categoria" = categoria."Id_Categoria" order by producto."Id_Producto"')
    return productos
}

const comentarios_x_producto = async (payload) => {
    let { idproducto } = payload
    const values = [idproducto]
    const consulta = 'SELECT * FROM comentarios where "Id_Producto" = $1;'
    const result = await pool.query(consulta, values)

    if (result.rowCount === 0) {
        throw {code: 404, message: "No se encontró resultados"}
    }

    return result.rows
}

const getComunas = async () => {
    const { rows: comunas } = await pool.query("SELECT * FROM Comuna")
    return comunas
}

//USUARIOS
const registraUsuario = async (payload) => {
    let { nombre, apellido, correo, ciudad, comuna, fechanacimiento, password } = payload
    const passwordEncriptada = bcrypt.hashSync(password);
    password = passwordEncriptada
    const values1 = [correo]
    const consulta1 = 'SELECT * FROM usuario where "Correo" = $1' 
    const result = await pool.query(consulta1, values1)

    if (result.rowCount === 0) {
        const values2 = [nombre, apellido, correo, ciudad, comuna, fechanacimiento, '', 2, password, true]
        const consulta2 = "INSERT INTO Usuario VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)"
        pool.query(consulta2, values2, error => {
            if (error) throw {code: 406, message: error.error};
        })    
    } else {
        throw {code: 409, message: "Usuario se encuentra creado, no es posible crear nuevamente"}
    }
        
    const result1 = await pool.query(consulta1, values1)
    if (result1.rowCount === 0) {
        throw {code: 404, message: "No se creo el usuario"}
    }

    return "OK"
}


module.exports = { getCategorias, getProductos, comentarios_x_producto, getComunas, registraUsuario }