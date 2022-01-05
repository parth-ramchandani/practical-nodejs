const express = require("express")
const app = express()
const route = require("./routes/testimonial")
const port = 4000
require("./db/connection")

app.use(express.json())
app.use("/testimonials", route)

app.listen(port, (req, res) => {
    console.log(`App has started on port ${port}`)
})