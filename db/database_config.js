import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();


const pool = mysql.createPool({
  host: process.env.DB_HOST,  
  user: process.env.DB_USER ,     
  password: process.env.DB_PASSWORD,                   
  database: process.env.DB_NAME, 
  waitForConnections: true,
  connectionLimit: 10,  
  queueLimit: 0          
});


export const getConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('MySQL Database Connected Successfully');
    return connection;
  } catch (err) {
    console.error('Error connecting to the MySQL Database:', err);
    throw err;  
  }
};

export default pool;
