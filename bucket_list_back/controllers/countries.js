var express = require( 'express' );
var Country = require( '../models/country.js' );
var countriesRouter = express.Router();
var MongoClient = require( 'mongodb' ).MongoClient;
var db;

MongoClient.connect( 'mongodb://localhost:27017/world', function( err, database ){
  if ( err ) return;
  db = database;
});

// countries INDEX

countriesRouter.get( '/', function( req, res) {
  db.collection( 'countries' ).find().toArray( function( err, results ){
    if ( err ) console.log( "Error: " + err.toString() );
    res.json( results );
  })
} )

module.exports = countriesRouter;