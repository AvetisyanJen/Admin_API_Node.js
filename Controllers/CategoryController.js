const { Product, Category } = require('../models')


function get_Category (req, res) {
    Category.findAll() 
    .then((category)=>{
     res.json(category)}).catch((err)=>{
         res.status(500).json({eror:err.message})
     })
     
 }
 function get_Category_post(req,res){
    const { id } = req.params;
    const { name} = req.body;
    Category.create(
        { name },
        {where:{id}}
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
            res.json({ status: 'updated' })
        }).catch((err) => {
            res.status(500).json({ eror: err.message })
        })

}




function get_Category_delete(req,res){
    const { id } = req.params;
    Category.destroy(
            { where: { id } })
            .then((cat) => {
                res.json({ status: 'deleted' })
            }).catch((err) => {
                res.status(500).json({ eror: err.message })
            })
    
    }




  
 module.exports={get_Category,get_Category_post,get_Category_id,
    get_Category_delete,get_Category_update}