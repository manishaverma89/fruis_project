const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// connection url
const url ="mongodb://localhost:27017";

// Database Name
const dbName = "fruitsDB";

// Create a new MongoClient
const client = new MongoClient(url);

// use connect method to connect to the server
client.connect(function(err){
 assert.equal(null, err);
 console.log("connected successfully to server");
 const db = client.db(dbName);
 client.close();

});