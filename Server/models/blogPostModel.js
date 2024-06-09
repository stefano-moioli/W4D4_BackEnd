const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        cover: {
            trype: String,
            required: true
        },
        readTime: {
            type: Number,
            required: true
        },
        author: {
            type: Schema.type.ObjectId,
            ref: "Author"
        },
        content: {
            type: String,
            required: true
        }
    }
)

const blogPostModel = mongoose.model('BlogPost', blogPostSchema);
module.exports = blogPostModel;