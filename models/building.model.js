const mongoose = require("mongoose");
const { Schema } = mongoose;

const buildingSchema = new Schema(
    {
       building_name: String,
       year_build: String,
       city: String,
       architect: String,
       style: String,
       img_url: String, 
    }
);

const Building = mongoose.model("Building", buildingSchema);

module.exports = Building;