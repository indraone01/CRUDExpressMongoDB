/* MongoDB setup  */
const connect = require('./connect');
var mongoclient = connect('mongoclient');
var assert = connect('assert');
// Connection URL
var url = connect('url');

module.exports = (callback) => {
    mongoclient.connect(url, (err, db) => {
        assert.equal(null, err);

        console.log('Connected correctly to server');
        /*findAll(db, (err, data) => {
            assert.equal(err, null);
            res.json(data);
        });*/

        //get userlist form userlist collection
        var collection = db.collection('userlist');
        //find all data in userlist collection
        collection.find({}).toArray((err, data) => {
            console.log(data);
            (err) ? callback(err, ''): callback('', data);
        });

        db.close;
    });
}