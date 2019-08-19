import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Prospect  = new Schema({
    name: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    initialContactNotes: {
        type: String
    },
    initialContactDate: {
        type: String // TODO: Convert this to a date later
    }
});

export default mongoose.model('Prospects', Prospect, 'Prospects');

