const orders ={}
import orders  from "../models/orders"

//get

orders.getOrders = async (req, res) => {
    try {
        const orders = await orders.find()
        res.json(orders)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// POST

orders.createOrder = async (req, res) => {
    const newOrder = new orders(req.body)

    try {
        const savedOrder = await newOrder.save()
        res.json(savedOrder)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// DELETE

orders.deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await orders.findByIdAndDelete(req.params.id)

        if (!deletedOrder) return res.status(404).json({ message: "Order not found" })

        res.json(deletedOrder)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// PUT

orders.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await orders.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!updatedOrder) return res.status(404).json({ message: "Order not found" })

        res.json(updatedOrder)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export default orders;