const jwt = require("jsonwebtoken");

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


module.exports = { verificacionToken }