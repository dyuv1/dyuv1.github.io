const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.post('/word', (req, res) => {
    const word = req.body.word.trim().toLowerCase()
    res.redirect("http://wisdomlib.org/definition/"+word+"#sanskrit")
})

const listener = app.listen(3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})