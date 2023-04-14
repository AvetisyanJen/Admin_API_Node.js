const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.SECRET

function generateAccessToken(email,id,role) {

    return jwt.sign({email,id,role}, SECRET, { expiresIn: '36000s' });
}


module.exports={generateAccessToken}