import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Issue  = new Schema({
    vin: {
        type: String
    }, 
    description: {
        type: String
    },
    capacityInTons: {
        type: Number
    },
    capacityInCubicYards: {
        type: Number
    },
});

export default mongoose.model('Trucks', Issue, 'Trucks');

