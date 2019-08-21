import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Prospect from './models/prospect';
import Client from './models/client';

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

app.use('/', router);



router.route('/prospects/').get((req, res) => {
    Prospect.find((err, prospects) => {
        if (err) {
            console.error(err);
        } else {
            res.json(prospects);
        }
    });
});

router.route('/prospects/:id').get((req, res) => {
    Prospect.findById(req.params.id, (err, prospect) => {
        if (err) {
            console.error(err);
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
            prospect.initialContactDate = req.body.initialContactDate;
            prospect.initialContactNotes = req.body.initialContactNotes;
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
            console.error(err);
            res.json(err);
        } else {
            res.json('Removed successfully');
        }
    });
});        



router.route('/clients/').get((req, res) => {
    Client.find((err, clients) => {
        if (err) {
            console.error(err);
        } else {
            res.json(clients);
        }
    });
});

router.route('/clients/:id').get((req, res) => {
    Client.findById(req.params.id, (err, client) => {
        if (err) {
            console.error(err);
        } else {
            res.json(client);
        }
    });
});

router.route('/clients/add').post((req, res) => {
    let client = new Client(req.body);
    client.save()
        .then(client => {
            res.status(200).json({'client': 'Added successfully'});            
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/clients/update/:id').post((req, res) => {
    Client.findById(req.params.id, (err, client) => {
        if (!client) {
            return next(new Error('Could not load document'));
        } else {
            client.firstName = req.body.firstName;
            client.lastName = req.body.lastName;
            client.phoneNumber1 = req.body.phoneNumber1;
            client.initialContactDate = req.body.initialContactDate;
            client.initialContactNotes = req.body.initialContactNotes;
            client.save()
                .then(client => {
                    res.json('Updated successfully');
                })
                .catch(err => {
                    res.status(400).send('Failed to update new record');
                });
        }
    });
});

router.route('/clients/delete/:id').get((req, res) => {
    Client.findByIdAndRemove({_id: req.params.id}, (err, client) => {
        if (err) {
            console.error(err);
            res.json(err);
        } else {
            res.json('Removed successfully');
        }
    });
});        



app.listen(4001, () => console.log('Express Server running on port 4001'));
