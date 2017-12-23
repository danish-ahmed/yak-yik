var express = require('express');
var router = express.Router();
// var ZoneController = require('../controllers/ZoneController');
var controllers =  require('../controllers');

router.get('/:resource', function(req, res, next){
    var resource = req.params.resource;
    var controller = controllers[resource];
    if(controller == null){
        res.json({
            confiramtion:'fail',
            messagr:'invalid resource '+ resource
        })
        return
    }
    
    controller.find(req.query, function(err, results){
        if(err){
            res.json({
                confiramtion:'fail',
                message:err
            })
        }
        return res.json({
            confiramtion:'success',
            results:results
        })
    })
});

router.get('/:resource/:id', function(req, res, next){
    var resource = req.params.resource;
    var controller = controllers[resource];
    if(controller == null){
        res.json({
            confiramtion:'fail',
            messagr:'invalid resource '+ resource
        })
        return
    }
    var id = req.params.id;
    controller.findById(id, function(err, result){
        if(err){
            res.json({
                confiramtion:'fail',
                message:'Record Not Found'
            })
        }
        return res.json({
            confiramtion:'success',
            result:result
        })
    })

});

router.post('/:resource', function(req, res, next){
    var resource = req.params.resource;
    var controller = controllers[resource];
    if(controller == null){
        res.json({
            confiramtion:'fail',
            messagr:'invalid resource '+ resource
        })
        return
    }
    var params = req.body;
    controller.create(params, function(err, result){
        if(err){
            res.json({
                confiramtion:'fail',
                message:err
            })
        }
        return res.json({
            confiramtion:'success',
            result:result
        })
    })
})

router.delete('/:resource/:id', function(req, res, next){
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];
    if(controller == null){
        res.json({
            confiramtion:'fail',
            messagr:'invalid resource '+ resource
        })
        return
    }
    controller.destroy(id, function(err, result){
        if(err){
            res.json({
                confiramtion:'fail',
                message:err
            })
        }
        return res.json({
            confiramtion:'success',
            result:result
        })
    })
})

router.put('/:resource/:id/:params', function(req, res, next){
    var resource = req.params.resource;
    var controller = controllers[resource]
    if(controller == null){
        res.json({
            confiramtion:'fail',
            messagr:'invalid resource '+ resource
        })
        return
    }
    var id = req.params.id;
    controller.update(id, params, function(err, result){
        if(err){
            res.json({
                confiramtion:'fail',
                message:err
            })
        }
        return res.json({
            confiramtion:'success',
            result:result
        })
    })
})

module.exports = router;