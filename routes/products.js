const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products.js');

router.get('/', productsController.getAll);

router.get('/:id', productsController.getSingle);

router.post('/', productsController.createproduct);

router.put('/:id', productsController.updateproduct);

router.delete('/:id', productsController.deleteproduct);

module.exports = router;