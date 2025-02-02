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
},{versionKey:false});
 
const DemoModel = mongoose.model('students', DataSchema);

export default DemoModel;
