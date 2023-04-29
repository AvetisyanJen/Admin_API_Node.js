const { Product, Category } = require('../models')


function get_Category (req, res) {
    Category.findAll() 
    .then((category)=>{
     res.json(category)}).catch((err)=>{
         res.status(500).json({eror:err.message})
     })
     
 }
 function get_Category_post(req,res){
   
    const { name} = req.body;
    Category.create(
        { name },
  
    ) 
    .then((category)=>{
     res.json(category)}).catch((err)=>{
         res.status(500).json({eror:err.message})
     })
  }

  function get_Category_id(req,res){
    const {id} = req.params
    Category.findOne({
        where:{id},
        include:Product
        
    })
    .then((category)=>{
        res.json(category)}).catch((err)=>{
            res.status(500).json({eror:err.message})
        })
}

function get_Category_update(req, res) {
    // const { id } = req.params
    const { name,id} = req.body
    Category.update(
        { name },
        {
            where: { id }
           
        })
        .then((cat) => {
            res.json({ message: 'Updated' })
        }).catch((err) => {
            res.status(500).json({ eror: err.message })
        })

}




async function get_Category_delete(req,res){
    const { id } = req.body;
    
    try {
        const category = await Category.findOne({
            where: { id },
            include: Product
        });
        
        if (category.Products.length > 0) {
            res.status(400).json({ error: 'Cannot delete category that has products' });
        } else {
            await Category.destroy({ where: { id } });
            res.json({ message: 'Category deleted' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    }




  
 module.exports={get_Category,get_Category_post,get_Category_id,
    get_Category_delete,get_Category_update}