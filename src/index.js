import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from '../src/routes/AuthRoutes.js'
import urlsRoutes from '../src/routes/UrlsRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(urlsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ` + PORT);
});