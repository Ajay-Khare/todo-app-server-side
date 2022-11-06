const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routers/router");
const cors = require("cors")
// const bodyParser = require("body-parser")

app.use(cors())
app.use(router)
app.use(express.json());
// app.use(bodyParser())


var mongoDB = 'mongodb+srv://Ajay:ajay@cluster0.69nrddt.mongodb.net/todo?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err.message)
    }
    else {
        console.log("connected to DB");
    }
});


app.listen(8080, () => {
    console.log("server is running of port 8080");
})