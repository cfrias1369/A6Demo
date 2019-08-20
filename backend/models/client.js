import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Client  = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    middleName: {
        type: String
    },
    nickName: {
        type: String
    },
    phoneNumber1: {
        type: String
    },
    phoneNumber2: {
        type: String
    },
    address1: {
        type: String
    },
    address2: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    initialContactDate: {
        type: String // TODO: Convert this to a date later
    },
    initialContactNotes: {
        type: String
    },
    spouseName: {
        type: String
    },
    birthDate: {
        type: String
    },
    additionalNotes: {
        type: String
    },
});

export default mongoose.model('Clients', Client, 'Clients');

