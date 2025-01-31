import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    Name: String,
    Roll: String,
    Class: String,
    Remarks: String
});
 
const StudentsModel = mongoose.model('students', DataSchema);

export default StudentsModel;
