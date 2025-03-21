const shoes ={}
import shoes from "../models/shoes.js";

//get

shoes.getShoes = async (req, res) => {
    try {
        const shoes = await shoes.find()
        res.json(shoes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// POST

shoes.createShoes = async (req, res) => {
    const newShoes = new shoes({
        type: req.body.type,
        size: req.body.size,
        color: req.body.color,
        price: req.body.price
    });

    try {
        const savedShoes = await newShoes.save();
        res.json(savedShoes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// UPDATE

shoes.updateShoes = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: "Content can not be empty!"
        });
    }

    const shoes = await shoes.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!shoes) {
        return res.status(404).json({
            message: "Shoes not found with id " + req.params.id
        });
    }

    res.json(shoes);
}

// DELETE

shoes.deleteShoes = async (req, res) => {
    const shoes = await shoes.findByIdAndDelete(req.params.id);

    if (!shoes) {
        return res.status(404).json({
            message: "Shoes not found with id " + req.params.id
        });
    }

    res.json({ message: "Shoes deleted successfully!" });
}

export default shoes;