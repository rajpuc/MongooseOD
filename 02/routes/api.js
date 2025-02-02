import express from "express";
const router = express.Router();
import * as studentsController from '../app/controllers/studentsController.js';
import * as demoController from '../app/controllers/demoController.js';

router.get("/",function (req,res){
    console.log("hello");
})
router.post("/insert-students", studentsController.insertData);
router.get("/read-students", studentsController.readStudents);
router.post("/update-students/:id", studentsController.updateStudents);
router.get("/delete-students/:id", studentsController.deleteStudents);

router.post("/demo-insert", demoController.demoInsert);

export default router;