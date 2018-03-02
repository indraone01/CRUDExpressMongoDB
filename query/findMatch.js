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

        //get the match userlist form userlist collection
        var collection = db.collection('userlist');
        var username = param.username;
        var email = param.email;
        collection.find($or[{ username: username }, { email: email }]).toArray((err, data) => {
            (err) ? callback(err, ''): callback('', data);
        });

        db.close;
    });
}