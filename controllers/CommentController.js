var Comment = require('../models/Comment');

module.exports = {

    find: function(params, callback){
        Comment.find(params)
            .then(comments => {
                callback(null, comments)
            })
            .catch(err => {
                callback(err,null);
                return
            });
    },

    findById: function(id, callback){
        Comment.findById(id)
            .then(comment => {
                callback(null, comment);
            })
            .catch(err => {
                callback(err, null);
                return
            })
    },

    create:function(params, callback){
        Comment.create(params)
            .then(comment => {
                callback(null, comment);
            })
            .catch(err => {
                callback(err, null);
                return
            })
    },

    update:function(id, params, callback){
        Comment.findByIdAndUpdate(id, params, {new:true})
            .then(comment => {callback(null, comment )})
            .catch(err => {
                callback(err, null);
                return;
            })
    },

    destroy: function(id, callback){
        Comment.findByIdAndRemove(id)
            .then(res => {
                callback(null, null)
            })
            .catch(err => {
                callback(res, null);
                return
            })
    }

}