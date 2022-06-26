const express = require('express')
const morgan = require('morgan')
var ip = require("ip")

const PORT = 8080
const app = express()
const ip_address = ip.address()

app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.all("/*", (req,res) => {
    const request = {
        server_ip: ip_address,
        url: req.path,
        method: req.method,
        header: req.headers,
        body: req.body,
        params: req.params,
        query: req.query
    }

    res.send(request)
})

app.listen(PORT, () => {
    console.log(`Runnging echo server listening at http://localhost:${PORT}`)
})