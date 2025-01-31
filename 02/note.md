## Mongoose use korte hole:
1. ### install mongoose:
    - ### Run on terminal : `npm i mongoose`
2. ### Create  DB Connection:
    - ### Mongoose  diye DB connection er shomoy 2ta jinish proyojon hobe:
        1. ### 1ta hocce uri. jkhane 2ta jinish takbe akta hocce db location and r akta db name. For example:
        2. ### 2nd j jinishta lagbe sheta hocce akta object jta  k amra options bolbo. jekhane amader bole dite user and password. And jodi user and password na takhe tahole shei khetre amra agula k empty kore dite pari. for example:
        ```javascript
        //app.js
        let uri = 'mongodb://127.0.0.1:27017/dbName';
        let options = { user:'',pass:''};

        mongoose
            .connect(uri,options)
            .then(function(){
                console.log("Connected");
            })
            .catch(function(err){
                console.log(err);
            })
        ```
3. ### Create your first mongoose Model:
    - ### Mongoose diye data model make korer jonno `mongoose` er package ti import kore nite hobe.
    - ### Er por amader data schema make korte hobe.
    - ### Er por amra Data Schema ta use kore amra Model baniye felbo.
    - ### Eigula Actual db te jta korbe sheta hocce:
        - ### Schema muloto db te akta document make korbe. Muloto Schema er maddhome amra bole dite pari akta dcoument er structure bolen, defination bolen, shape bolen - kmn hobe sheta bole dite pari.
        - ### R model er maddhome amra db te collection make kori.
    ```javascript
    //models/studentsModel.js
    import mongoose from 'mongoose';

    const DataSchema = new mongoose.Schema({
        Name: String,
        Roll: String,
        Class: String,
        Remarks: String
    });

    const StudentsModel = mongoose.model('students', DataSchema);

    export default StudentsModel;
    ```


4. ### Work with mongoose model:
    ```javascript
    //controllers/studentsController.js
    import StudentsModel from "../models/studentsModel.js";

    export const insertData = async function(req, res) {
        try {
            let reqBody = req.body;
            let data = await StudentsModel.create(reqBody);
            res.status(201).json({ status: "success", data: data });
        } catch (err) {
            res.status(400).json({ status: "fail", data: err });
        }
    };
    ```