const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema ({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    blog:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        required: true
    },
})

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;