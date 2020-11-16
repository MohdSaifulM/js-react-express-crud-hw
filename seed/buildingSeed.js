require("dotenv").config();
require("../lib/connection");
const Building = require("../models/building.model");

Building.insertMany([
    {
        "building_name": "Flatiron Building",
        "year_build": 1902,
        "city": "New York City",
        "architect": "Daniel Burnham",
        "style": "Renaissance",
        "img_url": "https://cdn.homedit.com/wp-content/uploads/2015/06/Flatiron-Building-exterior-architecture.jpg"
      },
      {
        "building_name": "Chrysler Building",
        "year_build": 1930,
        "city": "New York City",
        "architect": "William Van Alen",
        "style": "Art Deco",
        "img_url": "https://alphacityguides.com/sites/default/files/chrysler_building.jpg"
      },
      {
        "building_name": "Guggenheim Museum",
        "year_build": 1964,
        "city": "New York City",
        "architect": "Frank Lloyd Wright",
        "style": "Modern",
        "img_url": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Solomon_R._Guggenheim_Museum_New_York_City.jpg"
      },
      {
        "building_name": "Johnson Wax Headquarters",
        "year_build": 1950,
        "city": "Racine",
        "architect": "Frank Lloyd Wright",
        "style": "Modern",
        "img_url": "https://dome.mit.edu/bitstream/handle/1721.3/33080/118073_sv.jpg"
      },
      {
        "building_name": "Eiffel Tower",
        "year_build": 1889,
        "city": "Paris",
        "architect": "Stephen Sauvestre",
        "style": "Modern",
        "img_url": "https://media.cntraveler.com/photos/5539216cab60aad20f3f3aaa/master/pass/eiffel-tower-paris-secret-apartment.jpg"
      },
      {
        "building_name": "30 St Mary Axe",
        "year_build": 2003,
        "city": "London",
        "architect": "Sir Norman Foster",
        "style": "Postmodern",
        "img_url": "https://upload.wikimedia.org/wikipedia/commons/1/15/30_St_Mary_Axe_%28Swiss_Re_Building%29_and_St_Andrew_Undershaft_church.jpg"
      },
      {
        "building_name": "Centre Georges Pompidou",
        "year_build": 1977,
        "city": "Paris",
        "architect": "Renzo Piano",
        "style": "Postmodern",
        "img_url": "http://media0.trover.com/T/58a587ca74eb4609cd047ccf/fixedw_large_4x.jpg"
      },
      {
        "building_name": "Cathedral of Brasilia",
        "year_build": 1970,
        "city": "Brasilia",
        "architect": "Oscar Niemeyer",
        "style": "Modern",
        "img_url": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Brasilia_Cathedral_wide.jpg"
      },
      {
        "building_name": "Sagrada Familia",
        "year_build": 2028,
        "city": "Barcelona",
        "architect": "Antoni Gaudi",
        "style": "Art Nouveau",
        "img_url": "https://laninga.files.wordpress.com/2016/05/dscf4303.jpg"
      }
]).then((success) => {
    console.log("successfully added");
}).catch((error) => {
    console.log(error);
})