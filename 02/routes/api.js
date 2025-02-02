import express from "express";
const router = express.Router();
import * as studentsController from '../app/controllers/studentsController.js'

router.get("/",function (req,res){
    console.log("hello");
})
router.post("/insert-students", studentsController.insertData);
router.get("/read-students", studentsController.readStudents);

export default router;