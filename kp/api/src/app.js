const express = require('express')
const app = express()
var cors = require('cors')
const port = 4000

app.use(cors())
app.use(express.json())

const users = []
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send(users)
})

app.post('/user', (req, res) => {
    const { name, age } = req.body
    users.push({
        name: name,
        age: age
    })
    res.send('Data user berhasil di masukkan')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})