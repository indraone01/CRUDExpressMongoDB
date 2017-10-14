/* MongoDB setup  */
const mongoclient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017/nodetest2';

module.exports = (req) => {
    switch (req) {
        case 'mongoclient':
            return mongoclient;
            break;
        case 'assert':
            return assert;
            break;
        case 'url':
            return url;
            break;
        default:
            break;
    }
}