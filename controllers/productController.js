const db = require('../models')

//create main Model
const Product = db.products
const Review = db.reviews

//main work

//1. create product

const addProduct = async (req, res) => {

    let info = {
        title: req.body.title,
        price:  req.body.price,
        description:  req.body.description,
        published:  req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)

}


// 2. get all products

const getAllProduct = async (req, res) => {

    let products = await product.findAll({})
    res.status(200).send(products)

}

// 3. get single product

const getOneProduct = async (req, res) => {

    let id = req.params.id
    let product = await product.findOne({ where: { id: id }})
    res.status(200).send(product)

}

// 4. update product

const updateProduct = async (req, res) => {

    let id = req.params.id
    
    const product = await Product.update(req.body, { where: { id: id }})

    res.status(200).send(product)
   
    
}

// 5. delete product by id

const deleteProduct = async (req, res) => {

    let id = req.params.id

    await Product.destroy({ where: { id: id }})

    res.status(200).send('product is deleted !')

}

// 6. get published product

const getPublishedProduct = async (req, res) => {


    const products = await Product.findAll({ where: { published: true }})

    res.status(200).send(products)

}





module.exports = {
    addProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}