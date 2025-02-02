import DemoModel from "../models/demoModel.js";
export const demoInsert = async function (req, res) {
    try {
        let reqBody = req.body;
        let data = await DemoModel.create(reqBody);
        res.status(201).json({ status: "success", data: data });
        res.end();
    } catch (err) {
        res.status(400).json({ status: "fail", data: err });
        res.end();
    }
};