const router = require("express").Router();
const Building = require("../models/building.model");

/**
 * @request GET
 * @url /buildings
 * @params none
 * @response array
 */
router.get("/", async (req, res) => {
    try {
        let building = await Building.find();

        if (building.length < 1) {
            return res.status(200).json({
                building,
                meta: { count: building.length, message: "No buildings in storage!" },
            });
        }

        res.status(200).json({
            building,
            meta: { count: building.length, message: "Succesfully got buildings" },
        })
    } catch (error) {
        res.status(400).json({ message: "Problem fetching data!" });
    }
})

router.get("/:id", async (req, res) => {
    try {
        let building = await Building.findById(req.params.id);

        return res.status(200).json({
            building,
            message: "Successfully got building!",
        });
    } catch (error) {
        res.status(400).json({ message: "Problem fetching data!" });
    }
})

router.post("/", async (req, res) => {
    try {
        let { building_name, year_build, city, architect, style, img_url } = req.body;

        let building = new Building({ building_name, year_build, city, architect, style, img_url });

        await building.save();

        res.status(201).json({ message: "Building has been added" });
    } catch (error) {
        res.status(400).json({ message: "Could not add building to storage!" })
    }
})

router.put("/:id", async (req, res) => {
    try {
        let { building_name, year_build, city, architect, style, img_url } = req.body;

        await Building.findByIdAndUpdate(req.params.id, { building_name, year_build, city, architect, style, img_url });

        res.status(200).json({message: "Successful"});
    } catch (error) {
        res.status(400).json({message: "Trouble finding building data"});
    }
})

router.delete("/:id", async (req, res) => {
    try {
        await Building.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Building has been deleted" });
    } catch (error) {
        res.status(400).json({ message: "Could not do this" });
    }
})

module.exports = router;