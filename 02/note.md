## Commit 05: delete documents:
```javascript
export const deleteStudents = async function (req, res) {
    try {
        let id = req.params.id;
        let query = { _id: id };

        // Use `deleteOne()` instead of `remove()`
        let data = await StudentsModel.deleteOne(query);

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

---

### **Fixed Version Using `.then().catch()`**
If you want to use **Promises** instead of `async/await`:

```javascript
export const deleteStudents = function (req, res) {
    let id = req.params.id;
    let query = { _id: id };

    StudentsModel.deleteOne(query)
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

---

### **Using `.exec()`

#### **With `async/await`**
```javascript
export const deleteStudents = async function (req, res) {
    try {
        let id = req.params.id;
        let query = { _id: id };

        // Using `.exec()` for better performance
        let data = await StudentsModel.deleteOne(query).exec();

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

#### **With `.then().catch()`**
```javascript
export const deleteStudents = function (req, res) {
    let id = req.params.id;
    let query = { _id: id };

    StudentsModel.deleteOne(query)
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

