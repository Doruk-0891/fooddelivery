import foodModel from "../models/food.model.js";

const addFood = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        const newFood = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: req.file.path
        });

        await newFood.save();

        return res.status(200).json({ success: true, foodItem: newFood });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getFoodList = async (req, res) => {
    try {
        const foodList = await foodModel.find({});
        return res.status(200).json({ success: true, foodList: foodList });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const removeFoodItem = async (req, res) => {
    try {
        const doesFoodExist = await foodModel.findById(req.body.id);

        if (!doesFoodExist) {
            return res.status(404).json({
                success: false,
                message: "No such food item exist"
            })
        }

        await foodModel.findByIdAndDelete(req.body.id);
        return res.json({
            success: true,
            message: "Deleted successfully!!!"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export { addFood, getFoodList, removeFoodItem };