import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    Roll: {
        type: Number,
        min: [6, "Minimum Roll is 6, but got value {VALUE}"],
        max: [12, "Maximum Roll is 12, but got value {VALUE}"]
    },
    Class: {
        type: String
    },
    Remarks: {
        type: String
    },
    Mobile: {
        type: String,
        validate: {
            validator: function (value) {
                // Corrected Regex for Bangladeshi mobile numbers
                return /^(?:\+?88|0088)?01[15-9]\d{8}$/.test(value);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    }
});

const DemoModel = mongoose.model('democollection', DataSchema);

export default DemoModel;





