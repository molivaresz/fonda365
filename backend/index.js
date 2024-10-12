const express = require ('express')
const app = express()

app.listen(process.env.PORT, console.log("SERVIDOR ENCENDIDO"))

app.use(express.json())