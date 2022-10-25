const { Schema, model } = require('mongoose')

const Info = new Schema({
    user_id: {
        type: String
    },
    title: {
        type: String,
        require: true
    }, 
    description: {
        type: String
    },
    author: {
        type: String
    },
    datetime: {
        type: String
        // format: "date-time"
    },
    status: {
        type: Boolean,
        default: false
    }  
})

module.exports = model('Info', Info)