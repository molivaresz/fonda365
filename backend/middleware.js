const jwt = require("jsonwebtoken");

const validaExistenciaCredenciales = (req, res, next) => {
    const { correo, password } = req.body
    if (correo == "" || password == "") {
        return res.status(401).send({ code: "401", message: "No se obtuvieron email/password de la consulta" })
    }
    next()
}

const verificacionToken = (req, res, next) => {
    const autorization = req.header("Authorization")
    if (!autorization) {
        return res.status(401).send("token no compatible")        
    } 
    const token = autorization.split("Bearer ")[1]

    try {
        jwt.verify(token, process.env.SECRET_KEY)
        next()
    } catch (error) {
        return res.status(401).send("El token no es Correcto")
    }
}

const logger = (req, res, next) => {
    const d = new Date()
    const logEntry = `${d.toLocaleDateString()} ${d.toLocaleTimeString()} - ${req.method} ${req.originalUrl}\n`;

    console.log(logEntry)
    
    next();
}

module.exports = { validaExistenciaCredenciales, verificacionToken, logger }