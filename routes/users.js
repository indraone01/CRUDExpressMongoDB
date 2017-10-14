var express = require('express');
var router = express.Router();

/* get userlist from usercollection in contactexpress db  */
router.get('/userlist', (req, res, next) => {
    /*var db = req.db;
    var collection = db.get('usercollection');
    collection.find({}, {}, (e, docs) => {
        res.json(docs);
    });*/
});

module.exports = router;