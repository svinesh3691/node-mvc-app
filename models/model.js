// File : models/model.js --> 							
var model = function() {
	db = require('../config/db'); 
};
model.prototype.execute = function(sql,callback){
	db.query(sql,function(err,rows){
		  		callback(err, rows);
	});
};
module.exports = new model();
