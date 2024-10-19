const express = require ('express')
const app = express()
const jwt = require("jsonwebtoken")
require('dotenv').config()
const cors = require('cors')


const { getCategorias, getProductos, comentarios_x_producto } = require('./consultas')

app.listen(process.env.PORT, console.log(`SERVIDOR ENCENDIDO EN PUERTO ${process.env.PORT}`))
app.use(express.json())
app.use(cors())

//PRODUCTOS
app.get("/categorias", async (req, res) => {
    try {
        const categoria = await getCategorias()
        res.json(categoria)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
})

app.get("/productos", async (req, res) => {
    try {
        const producto = await getProductos()
        res.json(producto)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
})

app.post("/comentariosxproducto", async (req, res) => {
    try {
        const payload = req.body
        const comentproducto = await comentarios_x_producto(payload)
        res.json(comentproducto)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
})

//USUARIOS
app.post("/usuarios", async (req, res) => {
    try {
        const payload = req.body
        const usuarioregistrado = await registraUsuario(payload)
        res.json(usuarioregistrado)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
})

app.get("*", (req, res) => {
    res.status(404).send("Esta ruta no existe")
})