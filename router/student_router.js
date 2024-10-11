import express from "express";
const router = express.Router();
import { addStudentDetails,getAllStudentDetails} from "../controller/student_controller.js"

router.get('/', getAllStudentDetails); 
router.post('/', addStudentDetails); 


export default router;