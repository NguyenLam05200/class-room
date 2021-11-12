const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ClassSchema = new Schema({
    className: {
        type: String,
        required: true
    },
    section: {
        type: String
    },
    subject: {
        type: String
    },
    room: {
        type: String
    },
    inviteCode: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = mongoose.model('classes', ClassSchema)