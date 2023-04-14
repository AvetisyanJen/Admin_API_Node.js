const { generateAccessToken } = require('../jwt/jwt_generate');
const {Users} = require ('../models')
const bcrypt = require("bcrypt");

async function user_register(req, res){
    const {email, password}=req.body
    const salt = await bcrypt.genSalt(10)
    const hashed_password = await bcrypt.hash(password, salt)
    Users.create({email, password:hashed_password})
    .then((data)=>{
           res.status(201).json(data)
        })
    .catch((err)=>{
            res.status(500).json({error:err.message})
        })
}

async function user_login(req, res) {
    const {email, password} = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(400).send("Email is not correct");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      const token = generateAccessToken(email, user.id,user.role);
      res.send(JSON.stringify({ status: "Logged in", jwt: token }));
    } else {
      return res.status(400).send("Invalid password");
    }
  }
   
 





module.exports = {user_register,user_login}