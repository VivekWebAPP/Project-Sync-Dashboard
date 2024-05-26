import express from "express";
import connectWithDatabase from "./db.js";
import router1 from "./routes/auth.js";
import router2 from './routes/project.js';
import router3 from './routes/employer.js';
import router4 from './routes/teacherRoute.js';
import router5 from './routes/studentRoute.js';
import cors from 'cors'

const app = express();

// Parse incoming request bodies with JSON payloads
app.use(express.json());

app.use(cors());

// Connect to the database
connectWithDatabase();

// Define routes
app.use('/auth', router1);
app.use('/project', router2);
app.use('/employer', router3);
app.use('/teacher',router4);
app.use('/student',router5);

// Define a simple root route
app.get('/', (req, res) => {
    res.send("Hello World");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: http://localhost:${port}`);
});
