## Commit 06: Schema Types 
![](./mdAssets/1.png)

```javascript
//models/demoModel.js
import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    Name: String,
    Roll: Number,
    Class: String,
    Remarks:String,
    Adult:Boolean,
    Comments:[],
    details:{},
    DOB:Date
});
 
const DemoModel = mongoose.model('students', DataSchema);

export default DemoModel;
```
## Akhon ai data type k amra chaile nicher moto koreo likhte pari:
```javascript
import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    Roll: {
        type: Number
    },
    Class:{
        type: String
    },
    Remarks:{
        type: string
    },
    Adult:{
        type: Boolean
    },
    Comments:[],
    details:{},
    DOB:Date
});
 
const DemoModel = mongoose.model('students', DataSchema);

export default DemoModel;

```