import dbConnection from "../db/database_config.js";

export const getAllStudentDetails = async (req, res) => {
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const query = `SELECT * FROM student_details`;
    const [rows] = await connection.query(query);
    res.json(rows);
  } catch (err) {
    console.error("Error fetching student details:");
    res.status(500).send("Error fetching student details");
  } finally {
    if (connection) connection.release(); 

  }
};
export const getByIdStudentDetails = async (req, res) => {
  let connection;
  const { id } = req.params;
  try {
    connection = await dbConnection.getConnection();
    const query = `SELECT student_details where student_id=${id}`;
    const [rows] = await connection.query(query);
    res.json(rows);
  } catch (err) {
    console.error("Error fetching student details:");
    res.status(500).send("Error fetching student details");
  } finally {
    if (connection) connection.release(); 

  }
};

export const addStudentDetails = async (req, res) => {
  
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const { name, contact, image_url ,age } = req.body;
    console.log(req.body);
    
    if (!name || !contact) {
      res.status(500).send("name and contact are required");
    }
  
    const query = `INSERT INTO student_details (name,age, contact , image_url) VALUES (?, ?, ?,?)`;
    await connection.execute(query, [name, age, contact, image_url]);
    res.status(201).json({ message: "Student added successfully", data: { name, age, contact, image_url } });
  } catch (err) {
    console.error("Error adding student details:", err);
    res.status(500).send("Error adding student details");
  } finally {
    if (connection) connection.release(); 

  }
};

export const updateStudentDetails = async (req, res) => {
    let connection;
  try {
    connection = await dbConnection.getConnection();
    const { id } = req.params;
    const { name, contact, image_url } = req.body;
    if(!id){
        res.status(500).json({message:"id is required"});
    }
    const query = `UPDATE student_details SET name =?, contact =?, image_url =? WHERE student_id =?`;
    await connection.execute(query, [name, contact, image_url, id]);
    res.json({ message: "Student details updated successfully", data: { id, name, contact, image_url } });
    } catch (err) {
    console.error("Error updating student details:", err);
    res.status(500).json({message:"Error updating student details"});
  } finally {
    if (connection) connection.release();
  }
}

export const deleteStudentDetails = async (req, res) => {
    let connection;
  try {
    connection = await dbConnection.getConnection();
    const { id } = req.params;
    console.log(id);
    
    if(!id){
        res.status(500).json({message:"id is required"});
    }
    const query = `DELETE FROM student_details WHERE student_id =?`;
    await connection.execute(query, [id]);
    res.json({ message: "Student details deleted successfully", id });
    } catch (err) {
    console.error("Error deleting student details:", err);
    res.status(500).json({message:"Error deleting student details"});
  } finally {
    if (connection) connection.release();
  }
}
