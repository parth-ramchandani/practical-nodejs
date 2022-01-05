const mongoose = require("mongoose")

const testmonialSchema = new mongoose.Schema({
    Photo: {
        url: String
    },
    Name: String,
    Post: String,
    Description: String,
    Date: { type: Date, default: Date.now },
    Active: {
        type: Boolean,
        default: false
    }
})

//new collection

const Testimonial = new mongoose.model("Testimonial", testmonialSchema)

module.exports = Testimonial