const shoppingcart ={}
import shoppingcart from "../models/shoppingcart.js";

//get

shoppingcart.getShoppingCart = async (req, res) => {
    try {
        const shoppingCart = await shoppingcart.find()
        res.json(shoppingCart)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// POST

shoppingcart.createShoppingCart = async (req, res) => {
    const newShoppingCart = new shoppingcart(req.body)

    try {
        const savedShoppingCart = await newShoppingCart.save()
        res.json(savedShoppingCart)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// PUT

shoppingcart.updateShoppingCart = async (req, res) => {
    const { id: _id } = req.params;
    const updatedShoppingCart = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No item with that ID");

    try {
        const updatedItem = await shoppingcart.findByIdAndUpdate(_id, updatedShoppingCart, { new: true });
        if (!updatedItem) return res.status(404).send("No item found with that ID");
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// DELETE

shoppingcart.deleteShoppingCart = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No item with that ID");

    try {
        const deletedItem = await shoppingcart.findByIdAndRemove(_id);
        if (!deletedItem) return res.status(404).send("No item found with that ID");
        res.json(deletedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default shoppingcart;