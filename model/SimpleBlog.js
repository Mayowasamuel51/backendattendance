const mongoose = require('mongoose');

const SimpleBlog = new mongoose.Schema({
    title: String,
    price: Number,
    blognote: String,
    phone: String,
    bloggerurl: String,
    createdAt: {
        type: Date,
        date:()=>Date.now()
    },
    usesubheaders: {
        type:String
    }
})
module.exports = mongoose.model('blogger', SimpleBlog);




