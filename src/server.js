const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    res.status(200).json({'nome': 2})
})

app.listen(3000, 'localhost', () => {
    console.log('Server online')
})