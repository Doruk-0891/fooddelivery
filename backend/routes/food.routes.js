import express from "express";
import { addFood, getFoodList, removeFoodItem } from "../controllers/food.controller.js";
import uploadImageToCloudinary from "../middlewares/cloudinary.middleware.js";

const foodRoutes = express.Router();

const upload = uploadImageToCloudinary("uploadImage");

foodRoutes.post('/add', upload.single("imageFile"), addFood);
foodRoutes.get('/food-list', getFoodList);
foodRoutes.post('/remove-food', removeFoodItem);

export default foodRoutes;