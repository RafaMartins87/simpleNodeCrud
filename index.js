const express = require('express');
const app = express();
const morgan = require('morgan');//mostra a rota no prompt
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

dotenv.config();

mongoose
.connect(
        process.env.MONGO_URI, 
        {useNewUrlParser: true}
    )
    .then(() => console.log('MongoDb connected'))

mongoose.connection.on('error', err => console.log('db connection error: ', err.message))

//bring in route
const postRoutes = require('./routes/post');

//middleware
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use("/", postRoutes);

const port=process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log('node js api is listen on port: ', port);
});