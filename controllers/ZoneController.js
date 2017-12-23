var Zone = require('../models/Zone');

module.exports = {

    find: function(params, callback){
        Zone.find(params)
            .then(zones => {
                callback(null, zones)
            })
            .catch(err => {
                callback(err,null);
                return
            });
    },

    findById: function(id, callback){
        Zone.findById(id)
            .then(zone => {
                callback(null, zone);
            })
            .catch(err => {
                callback(err, null);
                return
            })
    },

    create:function(params, callback){
        var zips = params["zipCodes"];
        var zip = zips.split(',');
        var newzips = [];
        zip.forEach(zipcode => {
            newzips.push(zipcode.trim())
        });
        params["zipCodes"] = newzips;
        Zone.create(params)
            .then(zone => {
                callback(null, zone);
            })
            .catch(err => {
                callback(err, null);
                return
            })
    },

    update:function(id, params, callback){
        Zone.findByIdAndUpdate(id, params, {new:true})
            .then(zone => {callback(null, zone )})
            .catch(err => {
                callback(err, null);
                return;
            })
    },

    destroy: function(id, callback){
        Zone.findByIdAndRemove(id)
            .then(res => {
                callback(null, null)
            })
            .catch(err => {
                callback(res, null);
                return
            })
    }

}