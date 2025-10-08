const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products.js');

router.get('/', productsController.getAll);

router.get('/:id', productsController.getSingle);

router.post('/', productsController.createUser);

router.put('/:id', productsController.updateUser);

router.delete('/:id', productsController.deleteUser);

module.exports = router;