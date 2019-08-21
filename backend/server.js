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

const environmentVars = {};

{
    environmentVars.MONGODB_URI = 'mongodb://localhost:27017/RELeadsDB';
    environmentVars.API_URI_PORT = '4001';
}

mongoose.connect(environmentVars.MONGODB_URI, { useFindAndModify: false });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection established successfully.');
});

app.use('/', router);

function populateItemId(o) {
    o.id = o._id;
}

function createNewItemWithId(id) {
    return new Object({ _id: id });
}



router.route('/prospects/').get((req, res) => {
    Prospect.find((err, prospects) => {
        if (err) {
            console.error(err);
        } else {
            prospects.map((item) => {populateItemId(item);});
            res.json(prospects);
        }
    });
});

router.route('/prospects/:id').get((req, res) => {
    Prospect.findById(req.params.id, (err, prospect) => {
        if (err) {
            console.error(err);
        } else {
            populateItemId(prospect);
            res.json(prospect);
        }
    });
});

router.route('/prospects/').post((req, res) => {
    let prospect = new Prospect(req.body);
    prospect.save()
        .then(prospect => {
            res.status(200).json({'prospect': 'Added successfully'});            
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/prospects/:id').put((req, res) => {
    Prospect.findById(req.params.id, (err, prospect) => {
        if (!prospect) {
            return next(new Error('Could not load document'));
        } else {
            prospect.id = req.params.id; // TODO: Perhaps this should be checked against the payload for consistency
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

router.route('/prospects/:id').delete((req, res) => {
    Prospect.findByIdAndRemove(createNewItemWithId(req.params.id), (err, prospect) => {
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
            clients.map((item) => {populateItemId(item)});
            res.json(clients);
        }
    });
});

router.route('/clients/:id').get((req, res) => {
    Client.findById(req.params.id, (err, client) => {
        if (err) {
            console.error(err);
        } else {
            populateItemId(client);
            res.json(client);
        }
    });
});

router.route('/clients/').post((req, res) => {
    let client = new Client(req.body);
    client.save()
        .then(client => {
            res.status(200).json({'client': 'Added successfully'});            
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/clients/:id').put((req, res) => {
    Client.findById(req.params.id, (err, client) => {
        if (!client) {
            return next(new Error('Could not load document'));
        } else {
            client.id = req.params.id; // TODO: Perhaps this should be checked against the payload for consistency
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

router.route('/clients/:id').delete((req, res) => {
    Client.findByIdAndRemove(createNewItemWithId(req.params.id), (err, client) => {
        if (err) {
            console.error(err);
            res.json(err);
        } else {
            res.json('Removed successfully');
        }
    });
});        



app.listen(environmentVars.API_URI_PORT, () => console.log(`Express Server running on port ${environmentVars.API_URI_PORT}`));
