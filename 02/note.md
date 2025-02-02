## Commit 06: Default Value & Version key
- ### Default value hocce - jodi kono property er default value amra declare kore dei, sheikhetre oi property er value jodi amra supply kora na kori, ba oi property ta mention kora na hoi, tar pore o oi property create hoye jabe default value ta niye. for example:

```javascript
    date:{
        type: Date,
        default: Date.now
    }  
```
- ### Version key: Jokon amra mongodb te mongoose use kore data insert kori, tokon document tar niche dekben `__v` name a akta notun property generate hoi, ai property mongoose nijer tekhe create kore. Atakei muloto version key bola hocce. Beshibag khetrei atar proyojon hoi na. Toh jodi apnr ai version key tar proyojon na hoi tahole shekhetre apni jta korte paren: version key ta k apni false kore rakhte paren. False korer jonno apnake schema er moddhe likhte hobe:

```javascript
{
    versionKey:false
}
```

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
        type: string,
        default:"No Remarks"
    },
    Adult:{
        type: Boolean
    },
    Comments:[],
    details:{},
    DOB:Date
},{versionKey:false});
 
const DemoModel = mongoose.model('students', DataSchema);

export default DemoModel;

```
