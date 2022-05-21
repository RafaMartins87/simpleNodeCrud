const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: 'title is required',
        minlenght: 4,
        maxlenght: 150
    },
    body:{
        type: String,
        required: 'title is required',
        minlenght: 4,
        maxlenght: 150
    }
});

module.exports = mongoose.model("Post", postSchema);