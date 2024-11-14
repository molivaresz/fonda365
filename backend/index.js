const express = require ('express')
const app = express()
const jwt = require("jsonwebtoken")
require('dotenv').config()
const cors = require('cors')


const { getCategorias, getProductos, comentarios_x_producto, getComunas,registraUsuario, verificarCredenciales, obtenerUsuarios } = require('./consultas')
const { validaExistenciaCredenciales, verificacionToken, logger } = require('./middleware')

app.listen(process.env.PORT, console.log(`SERVIDOR ENCENDIDO EN PUERTO ${process.env.PORT}`))
app.use(express.json())
app.use(cors())
app.use(logger)

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

app.get("/comunas", async (req, res) => {
    try {
        const comunas = await getComunas()
        res.json(comunas)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
})

//USUARIOS
app.post("/registraUsuarios", async (req, res) => {
    try {
        const payload = req.body
        const usuarioregistrado = await registraUsuario(payload)
        if (usuarioregistrado == "OK") {
            res.status(201).json({ message: 'Usuario creado exitosamente' })
        }
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
})

app.post("/login", validaExistenciaCredenciales, async (req, res) => {
    try {
        const { correo, password } = req.body
        await verificarCredenciales(correo, password)
        const token = jwt.sign({ correo }, process.env.SECRET_KEY)
        res.send(token)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
})

app.get("/usuarios", verificacionToken, async (req, res) => {
    try {
        const token = req.header("Authorization").split("Bearer ")[1]
        const { correo } = jwt.decode(token)
        const usuario = await obtenerUsuarios(correo)
        res.json([usuario])        
    } catch (error) {
        console.log(error.message)
        res.status(error.code || 500).send(error)
    }
})

app.get("*", (req, res) => {
    res.status(404).send("Esta ruta no existe")
})