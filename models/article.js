let mongoose = require('mongoose');
const article = art
const Article = Art

//Article Schema
let artSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        require: true
    },
    body:{
    type: String,
    require: true
    }    
});

let Art = module.exports = mongoose.model('Article', artSchema);