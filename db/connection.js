const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/testimonials-api", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open!")
    })
    .catch(err => {
        console.log("Oh no Mongo connection Error", err)
    })