const mongoose = require('mongoose');

// post schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    postImg: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCOMeZtP9r_6he6KNPADe56uglRz7ei4iEcQ&s",
    },
    category: String,
    tags: [String],
likes: {
    type: Number,
    default: 0,
},
postDate: {
    type: Date,
    default: Date.now
}
}, Timestamp = true);

module.exports = mongoose.model('Post', postSchema);