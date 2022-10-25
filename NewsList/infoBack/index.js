const express = require('express')
const mongoose = require('mongoose')
const bodyParser =require('body-parser')
const { PORT, MONGO_URL } = require('./configs')
const cors = require('cors')
const app = express()

app
    .use(cors())
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .use('/', require('./routes/index'))
    .use((req, res) => {
        res.status(404).send({url: `${req.originalUrl} Not found`})
})

const start = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('DB connected successfully :)')
        app.listen(process.env.PORT || PORT)
    } catch (error) {
        console.log(error)
    }
}
start()