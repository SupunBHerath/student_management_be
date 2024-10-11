import express from 'express'
import cors from 'cors';
import { getConnection } from './db/database_config.js';
import studentRouter from './router/student_router.js'
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/student',studentRouter);

getConnection();
app.listen(port, () => {
    console.log(`Server is running :${port}`);
});
