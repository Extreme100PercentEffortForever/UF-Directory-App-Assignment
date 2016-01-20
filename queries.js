var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
	Listing.find({ code: 'LBW' }, function(err, entry) {
		if (err) throw err;
		console.log(entry);
	});
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   //findOneAndRemove works as well
   Listing.find({ code: 'CABL' }, function(err, entries) {
	  if (err) throw err;
	  var entry = entries[0];
	  entry.remove(function(err) {
		if (err) throw err;
		console.log('It\'s gone, baby!  It will never come back!');
	  });
   });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.find({ code: 'PHL' }, function(err, entries) {
	   if (err) throw err;
	   var entry = entries[0];
	   entry.address = '102 Phelps Lab, Museum Road, Gainesville, FL 32603';
	   entry.coordinates.latitude = 29.644611;
	   entry.coordinates.longitude = -82.348852;
	   entry.save(function(err) {
		   if (err) throw err;
		   console.log(entry);
	   });
   });
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, entries) {
	  var entryMap = {};
	  entries.forEach(function(entry) {
		  entryMap[entry._id] = entry;
	  });
	  console.log(entryMap);
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
