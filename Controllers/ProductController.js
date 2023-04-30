const { Product, Category,Photo} = require('../models')



function get_Product(req, res) {
    let product = Product.findAll({
        include: Category,Photo
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

async function get_Product_post(req, res) {
    try {
      const data = req.body;
  
      const newProduct = await Product.create({
        name: data.name,
        price: data.price,
        description: data.description,
        categoriId: data.categoriId,
      });
  
      const photos = req.files.map((file) => {
        return {
          url: file.filename,
          productId: newProduct.id,
        };
      });
  
      await Photo.bulkCreate(photos);
  
      res.status(201).json({ success: true, message: 'Product created' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Unable to create product' });
    }
  }
  

function get_Product_delete(req, res) {
    const { id } = req.body;
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