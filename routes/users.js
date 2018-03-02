var express = require('express');
var router = express.Router();
// Command
var findAll = require('../query/findAll');
var findOne = require('../query/findOne');
var findMatch = require('../query/findMatch');

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

/* get a userlist from collections in nodetest2 db  */
router.get('/userlist/showinfo/:id', (req, res, next) => {

});

router.get('/userlist/update/:id', (req, res, next) => {

});

/* get the match userlist from collections in nodetest2 db  */
router.get('/userlist/search/:param', (req, res, next) => {

});

module.exports = router;