//Usando objeto express
const express = require('express')
//App de express
const app = express()
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//path inicial, responderá a la url localhost:3000
app.get('/',(req, res) => {
    res.send('Hello world')
})

//Respondiendo texto
//localhost:3000/launchx
app.get('/launchx',(req, res) => {
    res.send('Bienvenidos a launchx')
})

//Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//Regresando un objeto
//localhost:3000/explorersInNode
app.get ('/explorersInNode', (req,res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

// Query Params: Recibir parametros por url
// http://localhost:3000/explorers/alexis
// req.params = {"explorerName":"alexis"}
app.get ('/explorers/:explorerName', (req,res) => {
    res.send(req.params)
})