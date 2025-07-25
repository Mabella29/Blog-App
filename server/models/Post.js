const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {type:String, required:true},
    content: String,
    owner: {type: mongoose.Schema.Types.ObjectId, ref:"User", required:true}
}
)

module.exports = mongoose.model("Post", postSchema);