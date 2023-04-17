const express = require('express')
const app = express()
const cors=require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(express.json());
app.use(cors({
    origin: ['http://example1.com', 'http://example2.com']
  }));
  
  // Enable CORS for a specific HTTP method
  app.use(cors({
    methods: ['GET', 'POST']
  }));
  
  // Enable CORS for a specific HTTP header
  app.use(cors({
    allowedHeaders: ['Content-Type']
  }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const product_router=require("./routes/ProductRout")
const user_router=require("./routes/UserRout")
const category_router=require("./routes/CategoryRout") 


app.use("/prod",product_router)
app.use("/user",user_router)
app.use("/cat",category_router)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});