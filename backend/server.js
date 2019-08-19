import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Prospect from './models/prospect';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

const mongoDB_URI = 'mongodb://localhost:27017/RELeadsDB';
mongoose.connect(mongoDB_URI, { useFindAndModify: false });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection established successfully.');
});

router.route('/prospects').get((req, res) => {
    Prospect.find((err, prospects) => {
        if (err) {
            console.log(err);
        } else {
            res.json(prospects);
        }
    });
});

router.route('/prospects/:id').get((req, res) => {
    Prospect.findById(req.params.id, (err, prospect) => {
        if (err) {
            console.log(err);
        } else {
            res.json(prospect);
        }
    });
});

router.route('/prospects/add').post((req, res) => {
    let prospect = new Prospect(req.body);
    prospect.save()
        .then(prospect => {
            res.status(200).json({'prospect': 'Added successfully'});            
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/prospects/update/:id').post((req, res) => {
    Prospect.findById(req.params.id, (err, prospect) => {
        if (!prospect) {
            return next(new Error('Could not load document'));
        } else {
            prospect.name = req.body.name;
            prospect.phoneNumber = req.body.phoneNumber;
            prospect.initialContactNotes = req.body.initialContactNotes;
            prospect.initialContactDate = req.body.initialContactDate;
            prospect.save()
                .then(prospect => {
                    res.json('Updated successfully');
                })
                .catch(err => {
                    res.status(400).send('Failed to update new record');
                });
        }
    });
});

router.route('/prospects/delete/:id').get((req, res) => {
    Prospect.findByIdAndRemove({_id: req.params.id}, (err, prospect) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            res.json('Removed successfully');
        }
    });
});



app.use('/', router);



app.listen(4001, () => console.log('Express Server running on port 4001'));
