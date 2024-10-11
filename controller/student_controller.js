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

export const addStudentDetails = async (req, res) => {
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const { name, contact, image_url } = req.body;

    if (!name || !contact) {
      res.status(500).send("name and contact are required");
    }
  
    const query = `INSERT INTO student_details (name, contact, image_url) VALUES (?, ?, ?)`;
    await connection.execute(query, [name, contact, image_url]);
    res.status(201).json({ message: "Student added successfully", data: { name, contact, image_url } });
  } catch (err) {
    console.error("Error adding student details:", err);
    res.status(500).send("Error adding student details");
  } finally {
    if (connection) connection.release(); 

  }
};
