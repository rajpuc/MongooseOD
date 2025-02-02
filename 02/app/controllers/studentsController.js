import StudentsModel from "../models/studentsModel.js";

//create
export const insertData = async function(req, res) {
    try {
        let reqBody = req.body;
        let data = await StudentsModel.create(reqBody);
        res.status(201).json({ status: "success", data: data });
        res.end();
    } catch (err) {
        res.status(400).json({ status: "fail", data: err });
        res.end();
    }
};
//read
export const readStudents = async function (req, res) {
    try {
        let query = {};
        let projection = 'Name Roll ';
        
        // Await the query execution
        let data = await StudentsModel.find(query, projection).exec();

        res.status(200).json({
            status: 'success',
            data: data,
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            data: err,
        });
    }
};
//upadate
export const updateStudents = function (req, res) {
    let id = req.params.id;
    let query = { _id: id };
    let reqBody = req.body;

    StudentsModel.updateOne(query, reqBody)
        .exec()
        .then((data) => {
            res.status(200).json({
                status: 'success',
                data: data,
            });
        })
        .catch((err) => {
            res.status(400).json({
                status: 'failed',
                data: err,
            });
        });
};
