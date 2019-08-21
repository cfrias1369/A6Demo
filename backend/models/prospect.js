import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Prospect  = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    initialContactDate: {
        type: String // TODO: Convert this to a date later
    },
    initialContactNotes: {
        type: String
    },
});

export default mongoose.model('Prospects', Prospect, 'Prospects');

