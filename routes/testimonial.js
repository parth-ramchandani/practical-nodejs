const express = require("express");
const router = express.Router();
const Testimonial = require("../models/testimonials")

router.get("/", (req, res) => {
    res.send("hello user")
})

router.post("/", async(req, res) => {
    const testimonial = new Testimonial(req.body)
        // console.log(testimonial)
    await testimonial.save()
        .then(() => {
            res.send(user)
        }).catch((err) => {
            res.send(err)
        });

})

router.put("/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(updatedTestimonial)
    } catch (err) {
        res.send(err)
    }
})

router.delete("/:id", async(req, res) => {
    try {
        const _id = req.params.id
        const deleteTestimonial = await Testimonial.findByIdAndDelete(_id)
        if (!_id) {
            return res.status(400).send();
        }
        res.send(deleteTestimonial)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router