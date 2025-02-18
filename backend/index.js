import express, { urlencoded } from "express";
import cors from "cors";
import dotenv  from "dotenv";
import connectDB from "./config/db.js";
import foodRoutes from "./routes/food.routes.js";

dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

connectDB();

app.use('/api/food', foodRoutes);
app.get('/', (req, res) => {
    res.json('api working');
});

app.listen(PORT, () => console.log('Server started listening...'));
