import express from "express";
const router = express.Router();
import { addStudentDetails,deleteStudentDetails,getAllStudentDetails, getByIdStudentDetails, updateStudentDetails} from "../controller/student_controller.js"

router.get('/', getAllStudentDetails); 
router.get('/:id',getByIdStudentDetails)
router.post('/', addStudentDetails); 
router.put('/:id', updateStudentDetails); 
router.delete('/:id', deleteStudentDetails); 


export default router;