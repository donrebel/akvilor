var express = require('express'),
    router = express.Router();



var products = require('../models/products.js');
var user = require('../models/users.js');
var userProfile = require('../models/userProfile.js');

router.get('/users', userProfile.readAll);
router.get('/user/:id', userProfile.readOne);
router.post('/user/', userProfile.create);
router.put('/user/:id', userProfile.update);
router.delete('/user/:id', userProfile.delete);

router.get('/products', user.getAll);
router.get('/product/:id', products.getOne);
router.post('/product/', products.create);
router.put('/product/:id', products.update);
router.delete('/product/:id', products.delete);

router.get('/admin/users', user.getAll);
router.get('/admin/user/:id', user.getOne);
router.post('/admin/user/', user.create);
router.put('/admin/user/:id', user.update);
router.delete('/admin/user/:id', user.delete);

module.exports = router;
