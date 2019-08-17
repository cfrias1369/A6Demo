import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Truck from './models/Truck';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ShippingDB');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection established successfully.');
});

router.route('/trucks').get((req, res) => {
    Truck.find((err, trucks) => {
        if (err) {
            console.log(err);
        } else {
            res.json(trucks);
        }
    });
});

router.route('/trucks/:id').get((req, res) => {
    Truck.findById(req.params.id, (err, truck) => {
        if (err) {
            console.log(err);
        } else {
            res.json(truck);
        }
    });
});

router.route('/trucks/add').post((req, res) => {
    let truck = new Truck(req.body);
    truck.save()
        .then(truck => {
            res.status(200).json({'truck': 'Added successfully'});            
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/trucks/update/:id').post((req, res) => {
    Truck.findById(req.params.id, (err, truck) => {
        if (!truck) {
            return next(new Error('Could not load document'));
        } else {
            truck.vin = req.body.vin;
            truck.description = req.body.description;
            truck.capacityInTons = req.body.capacityInTons;
            truck.capacityInCubicYards = req.body.capacityInCubicYards;
            truck.save()
                .then(truck => {
                    res.json('Updated successfully');
                })
                .catch(err => {
                    res.status(400).send('Failed to update new record');
                });
        }
    });
});

router.route('/trucks/delete/:id').get((req, res) => {
    Truck.findByIdAndRemove({_id: req.params.id}, (err, truck) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            res.json('Removed successfully');
        }
    });
});



app.use('/', router);



app.listen(4000, () => console.log('Express Server running on port 4000'));
