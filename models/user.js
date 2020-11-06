const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema and model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    }

    //add a geo location
})

const User = mongoose.model('user', UserSchema);
module.exports = User;