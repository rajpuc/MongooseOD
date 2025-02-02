## Commit 04: Update documents:
```javascript 
export const updateStudents = async function (req, res) {
    try {
        let id = req.params.id;
        let query = { _id: id };
        let reqBody = req.body;

        // Await the update operation
        let data = await StudentsModel.updateOne(query, reqBody);

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

```
```javascript
export const updateStudents = async function (req, res) {
    try {
        let id = req.params.id;
        let query = { _id: id };
        let reqBody = req.body;

        // Using exec() to ensure a proper Promise
        let data = await StudentsModel.updateOne(query, reqBody).exec();

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

```
```javascript
export const updateStudents = function (req, res) {
    let id = req.params.id;
    let query = { _id: id };
    let reqBody = req.body;

    StudentsModel.updateOne(query, reqBody)
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

```
```javascript
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

```