import dbConnection from '../db/database_config.js'

export const  getAllStudentDetails =  async (req , res )=>{
  let connection;
  try{
    connection = await dbConnection.getConnection()
    const query = `SELECT * FROM student_details`;
    const [rows] = await connection.query(query);
    res.json(rows);
  }catch(err){
      console.error('Error fetching student details:');
      res.status(500).send('Error fetching student details');
  }finally{
    connection.release();
  }

}