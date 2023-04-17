const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.SECRET

function generateAccessToken(username,id,role) {

    return jwt.sign({username,id,role}, SECRET, { expiresIn: '36000s' });
}


module.exports={generateAccessToken}