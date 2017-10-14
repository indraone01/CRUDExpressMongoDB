var express = require('express');
var router = express.Router();
// Command
var findAll = require('../query/findAll');

/* get userlist from collections in nodetest2 db  */
router.get('/userlist', (req, res, next) => {
    findAll((err, data) => {
        if (err === '') {
            res.json(data);
        } else {
            assert.equal(err, null);
            console.log(err);
        }
    });
});

module.exports = router;