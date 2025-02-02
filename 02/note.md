## Data Read
- ### Data read korer jonno amader mongodb er fundamental jinish gulai use korte pari.
    ```javascript
        export const readStudents = async function (req, res) {
            try {
                let query = {};
                let projection = 'Name Roll Class Remarks';
                
                // Await the query execution
                let data = await StudentsModel.find(query, projection);

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
        export const readStudents = async function (req, res) {
            try {
                let query = {};
                let projection = 'Name Roll Class Remarks';
                
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

    ```


    If you don’t use `.exec()`, **the `try-catch` block will still work** because `Mongoose` queries return a `thenable` (Promise-like) object. However, using `.exec()` is considered a best practice for clarity and performance.

---

### **Without `.exec()` (Still Works)**
```javascript
export const readStudents = async function (req, res) {
    try {
        let query = {};
        let projection = 'Name Roll Class Remarks';

        // Without `.exec()`, but still works
        let data = await StudentsModel.find(query, projection);

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
### **Why Use `.exec()`?**
1. **Clear Intent**: `.exec()` explicitly tells Mongoose to return a Promise. Without `.exec()`, `Mongoose` sometimes behaves unpredictably (e.g., when using `.then()` chaining).
2. **Better Error Handling**: If there are chained queries, `.exec()` ensures that errors are properly caught.
3. **Performance Optimization**: `.exec()` avoids unnecessary function wrapping by Mongoose.

#### **When should you use `.exec()`?**
- If you are chaining multiple query operations.
- If you want to make sure Mongoose treats the query as a real Promise.
- If you are using `.lean()`, `.populate()`, etc.

---

### **Conclusion**
- **Both versions work**, but `.exec()` is preferred for better clarity and reliability.
- If you're just using `find()`, it's **fine** to omit `.exec()`, but using it ensures safer and more predictable behavior.

### Another ways to do that:
```javascript

export const readStudents = function (req, res) {
    let query = {};
    let projection = 'Name Roll Class Remarks';

    StudentsModel.find(query, projection)
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
export const readStudents = function (req, res) {
    let query = {};
    let projection = 'Name Roll Class Remarks';

    StudentsModel.find(query, projection)
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