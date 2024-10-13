const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    allowExitOnIdle: true
})

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

module.exports = { getCategorias, getProductos }