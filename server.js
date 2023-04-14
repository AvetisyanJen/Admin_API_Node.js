const express = require('express')
const app = express()
let cors=require('cors')
let bodyParser = require('body-parser')
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const product_router=require("./routes/ProductRout")
const user_router=require("./routes/UserRout")
const category_router=require("./routes/CategoryRout") 


app.use("/prod",product_router)
app.use("/user",user_router)
app.use("/cat",category_router)



app.listen(5000)