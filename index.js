import express from 'express'
import { getConnection } from './db/database_config.js';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
getConnection();
app.listen(port, () => {
    console.log(`Server is running :${port}`);
});
