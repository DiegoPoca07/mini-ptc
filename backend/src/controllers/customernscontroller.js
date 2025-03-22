const customerns ={}
import customernsModel from "../models/customerns.js"

//get

customerns.getCustomerns = async (req, res) => {
    try {
        const customerns = await customernsModel.find()
        res.json(customerns)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// POST

customerns.createCustomern = async (req, res) => {
    const newCustomern = new customernsModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    })

    try {
        const savedCustomern = await newCustomern.save()
        res.json(savedCustomern)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// PUT

customerns.updateCustomern = async (req, res) => {
    const { id: _id } = req.params
    const customern = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Customern with that ID")

    const updatedCustomern = await customerns.findByIdAndUpdate(_id, { $set: customern }, { new: true })

    if (!updatedCustomern) return res.status(404).send("No Customern found with that ID")

    res.json(updatedCustomern)
}

// DELETE

customerns.deleteCustomern = async (req, res) => {
    const { id: _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Customern with that ID")

    const deletedCustomern = await customerns.findByIdAndDelete(_id)

    if (!deletedCustomern) return res.status(404).send("No Customern found with that ID")

    res.json(deletedCustomern)
}

export default customerns