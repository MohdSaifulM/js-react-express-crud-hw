const mongoose = require("mongoose");

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}, (error) => {
    console.log("mongoDB connected!");
})

module.exports = mongoose;