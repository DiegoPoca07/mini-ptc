const Category ={}
import CategoryModels from "../models/category.js"

//get

Category.getCategory = async (req, res) => {
    try {
        const category = await CategoryModels.find()
        res.json(category)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// POST

Category.createCategory = async (req, res) => {
    const newCategory = new CategoryModels({
        nombre: req.body.nombre,
    })

    try {
        const savedCategory = await newCategory.save()
        res.json(savedCategory)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// DELETE

Category.deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await CategoryModels.findByIdAndDelete(req.params.id)

        if (!deletedCategory) return res.status(404).json({ message: "Category not found" })

        res.json(deletedCategory)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// PUT

Category.updateCategory = async (req, res) => {
    try {
        const updatedCategory = await CategoryModels.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!updatedCategory) return res.status(404).json({ message: "Category not found" })

        res.json(updatedCategory)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export default Category;