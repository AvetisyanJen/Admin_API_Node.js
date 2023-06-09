const { generateAccessToken } = require('../jwt/jwt_generate');
const { Users } = require('../models')
const bcrypt = require("bcrypt");


async function user_register(req, res) {
  const { email, username, password } = req.body

  // Check if any of the values are empty strings
  if (!email || !username || !password) {
    return res.status(400).json({ error: "Please provide all required fields." })
  }

  // Check if a user with the provided email already exists
  const existingUser = await Users.findOne({ where: { email: email } })
  if (existingUser) {
    return res.status(409).json({ error: "A user with this email already exists." })
  }

  const salt = await bcrypt.genSalt(10)
  const hashed_password = await bcrypt.hash(password, salt)

  Users.create({ email, username, password: hashed_password })
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
}



async function user_login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Please provide email and password." });
  }

  const user = await Users.findOne({ where: { email } });
  if (!user) {
    return res.status(400).json({ error: "Email is not correct" });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ error: "Invalid password" });
  }

  const token = generateAccessToken(user.username, user.id, user.role);
  res.json({ status: "Logged in", user, jwt: token });
}

module.exports = { user_register, user_login };
