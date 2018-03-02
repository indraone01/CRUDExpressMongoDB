/* MongoDB setup  */
const connect = require('./connect');
var mongoclient = connect('mongoclient');
var assert = connect('assert');
// Connection URL
var url = connect('url');

module.exports = (param, callback) => {
    mongoclient.connect(url, (err, db) => {
        assert.equal(err, null);

        console.log('Connected correctly to server');

        //get a userlist form userlist collection
        var collection = db.collection('userlist');
        collection.find({ _id: param }).toArray((err, data) => {
            (err) ? callback(err, ''): callback('', data);
        });

        db.close;
    });
}