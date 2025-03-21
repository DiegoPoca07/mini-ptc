const Clothes ={}
import clothesmodelo from "../models/clothes.js"

//GET

Clothes.getClothes = async (req, res) => {
    try {
        const clothes = await clothesmodelo.find()
        res.json(clothes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// POST

Clothes.createClothes = async (req, res) => {
    const clothes = new clothesmodelo(req.body)

    try {
        await clothes.save()
        res.status(201).json(clothes)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// UPDATE

Clothes.updateClothes = async (req, res) => {
    const clothes = await clothesmodelo.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!clothes) return res.status(404).json({ message: "Producto no encontrado" })

    res.json(clothes)
}

// DELETE

Clothes.deleteClothes = async (req, res) => {
    const clothes = await clothesmodelo.findByIdAndDelete(req.params.id)

    if (!clothes) return res.status(404).json({ message: "Producto no encontrado" })

    res.json({ message: "Producto eliminado exitosamente" })
}

export default Clothes