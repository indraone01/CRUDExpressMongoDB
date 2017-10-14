var express = require('express');
var router = express.Router();

/* MongoDB setup  */
var mongoclient = require('mongodb').MongoClient;
var assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/nodetest2';

/* get userlist from collections in nodetest2 db  */
router.get('/userlist', (req, res, next) => {
    mongoclient.connect(url, (err, db) => {
        assert.equal(null, err);

        console.log('Connected correctly to server');
        db.close;
    });
});

module.exports = router;