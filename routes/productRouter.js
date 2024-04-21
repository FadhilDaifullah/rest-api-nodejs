const ProductController = require('../controllers/productController.js')

const router = require('express').Router()

router.post('/addProduct', ProductController.addProduct)

router.get('/allProduct', ProductController.getAllProduct)

router.get('/published', ProductController.getPublishedProduct)



router.get('/:id', ProductController.getOneProduct)

router.put('/:id', ProductController.updateProduct)

router.delete('/:id', ProductController.deleteProduct)

module.exports = router