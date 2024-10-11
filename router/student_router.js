import express from "express";
const router = express.Router();
import {getAllStudentDetails} from "../controller/student_controller.js"

router.get('/', getAllStudentDetails); 


export default router;