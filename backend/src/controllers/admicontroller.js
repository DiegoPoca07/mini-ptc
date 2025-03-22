const admi ={}
import admiModels from "../controllers/admi.js"

//get

admi.getAdmi = async (req, res) => {
    try {
        const admi = await admiModels.find()
        res.json(admi)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// POST

admi.createAdmi = async (req, res) => {
    const admi = new admiModels(req.body)

    try {
        await admiModels.save()
        res.status(201).json(admi)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// DELETE

admi.deleteAdmi = async (req, res) => {
    try {
        const admi = await admiModels.findByIdAndDelete(req.params.id)

        if (!admi) return res.status(404).json({ message: "Admi not found" })

        res.json(admi)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// PUT

admi.updateAdmi = async (req, res) => {
    const admi = await admiModels.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!admi) return res.status(404).json({ message: "Admi not found" })

    res.json(admi)
}

export default admi;