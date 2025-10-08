const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //swagger.tags=['Hello World, This is Udo David']
    res.send('Hello World, This is Udo David');
});

router.use('/users', require('./users'));

router.use('/products', require('./products'));

module.exports = router;