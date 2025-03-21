const admi ={}
import admi from "../controllers/admi"

//get

admi.getAdmi = async (req, res) => {
    try {
        const admi = await admi.find()
        res.json(admi)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// POST

admi.createAdmi = async (req, res) => {
    const admi = new admi(req.body)

    try {
        await admi.save()
        res.status(201).json(admi)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// DELETE

admi.deleteAdmi = async (req, res) => {
    try {
        const admi = await admi.findByIdAndDelete(req.params.id)

        if (!admi) return res.status(404).json({ message: "Admi not found" })

        res.json(admi)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// PUT

admi.updateAdmi = async (req, res) => {
    const admi = await admi.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!admi) return res.status(404).json({ message: "Admi not found" })

    res.json(admi)
}

export default admi;