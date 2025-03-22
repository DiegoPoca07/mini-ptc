const fragrance ={}
import fragrancesmodel from "../models/fragrances.js"

//GET

fragrance.getFragrances = async (req, res) => {
    try {
        const fragrances = await fragrancesmodel.find()
        res.json(fragrances)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// POST

fragrance.createFragrance = async (req, res) => {
    const newFragrance = new fragrancesmodel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })

    try {
        const savedFragrance = await newFragrance.save()
        res.status(201).json(savedFragrance)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// U

fragrance.updateFragrance = async (req, res) => {
    const { id: _id } = req.params
    const fragrance = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No fragment found with that ID")

    const updatedFragrance = await fragrancesmodel.findByIdAndUpdate(_id, fragrance, { new: true })

    if (!updatedFragrance) return res.status(404).send("No fragment found with that ID")

    res.json(updatedFragrance)
}

// DELETE

fragrance.deleteFragrance = async (req, res) => {
    const { id: _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No fragrance found with that ID")

    const deletedFragrance = await fragrancesmodel.findByIdAndRemove(_id)

    if (!deletedFragrance) return res.status(404).send("No fragrance found with that ID")

    res.json(deletedFragrance)
}

export default fragrance;