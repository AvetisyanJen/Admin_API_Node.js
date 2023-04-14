const jwt = require('jsonwebtoken')
require('dotenv').config()
const SECRET = process.env.SECRET


function authenticateToken(req, res, next) {
      const token = req.headers.authorization
      
      if (token == null){
          return res.sendStatus(401)
      } 
      
      jwt.verify(token, SECRET, (err, user) => {
        if (err) {
          return res.sendStatus(403)
        }
        const {role,email}= user
        console.log(user);
        if (role !== 1 && email !== "admin"){
          return res.sendStatus(403)
        }
      next()
      
      })
    }

    module.exports={authenticateToken}