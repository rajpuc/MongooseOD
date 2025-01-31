import express from "express";
const router = express.Router();
import * as studentsController from '../app/controllers/studentsController.js'

router.get("/",function (req,res){
    console.log("hello");
})
router.get("/insert-students", studentsController.insertData)

export default router;