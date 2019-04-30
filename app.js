const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

mongoose.connect("mongodb://localhost/B3S2DB", { useNewUrlParser: true })
.then(()=>{console.log("DB Connected")})
.catch((err)=>{console.log(err)})


app.listen(3000,()=>{console.log("Server Is Running 3000")});