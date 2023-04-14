const { Product, Category } = require('../models')



function get_Product(req, res) {
    let product = Product.findAll({
        include: Category
    })
        .then((prod) => {
            res.json(prod)
        }).catch((err) => {
            res.status(500).json({ eror: err.message })
        })

}

function get_Product_id(req, res) {
    const { id } = req.params
    let product = Product.findOne({
        where: { id },
        include: Category
    })
        .then((prod) => {
            res.json(prod)
        }).catch((err) => {
            res.status(500).json({ eror: err.message })
        })

}

function get_Product_update(req, res) {
    const { id } = req.params
    const { name, description, price, categoriId } = req.body
    let product = Product.update(
        { name, description, price, categoriId },
        {
            where: { id },
            include: Category
        })
        .then((prod) => {
            res.json({ status: 'updated' })
        }).catch((err) => {
            res.status(500).json({ eror: err.message })
        })

}

function get_Product_post(req, res) {
    const { id } = req.params;
    const { name, description, price, categoriId } = req.body;
   Product.create(
        { name, description, price, categoriId },
        {
            where: { id },
            include: Category
        })
        .then((prod) => {
            res.json(prod)
        }).catch((err) => {
            res.status(500).json({ eror: err.message })
        })

}

function get_Product_delete(req, res) {
    const { id } = req.params;
    let product = Product.destroy(
        { where: { id } })
        .then((prod) => {
            res.json({ status: 'deleted' })
        }).catch((err) => {
            res.status(500).json({ eror: err.message })
        })

}









module.exports = {
    get_Product,
    get_Product_id,
    get_Product_update,
    get_Product_post,
    get_Product_delete
};