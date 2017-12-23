var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
    username:{type:String},
    body:{type:String},
    timestamp:{type:Date,default:Date.now()}
});

module.exports = mongoose.model('CommentSchema', CommentSchema);