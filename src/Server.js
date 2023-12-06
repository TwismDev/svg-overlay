// server.js
const express = require('express')
const next = require('next')
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const savedQueryParams = []

app.prepare().then(() => {
    const server = express()

    server.get('/matchid', (req, res) => {
        const queryParams = req.query
        savedQueryParams.push(queryParams)

        const filePath = path.join(__dirname, 'App.js')

        return res.sendFile(filePath)
    })

    server.get('/overlay', (req, res) => {
        return res.json(savedQueryParams[0])
    })

    server.listen(process.env.PORT || 3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})