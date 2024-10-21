import express from "express";
import connectWithDatabase from "./db.js";
import router1 from "./routes/auth.js";
import router2 from './routes/project.js';
import router3 from './routes/employer.js';
import router4 from './routes/teacherRoute.js';
import router5 from './routes/studentRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const assiginedOrigin = [
    'http://localhost:3000',
]
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: assiginedOrigin, // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // If your requests include credentials like cookies
}));

connectWithDatabase();

app.use('/auth', router1);
app.use('/project', router2);
app.use('/employer', router3);
app.use('/teacher', router4);
app.use('/student', router5);

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server started on port: http://localhost:${port}`);
});
