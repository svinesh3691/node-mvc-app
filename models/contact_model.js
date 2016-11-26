// File : models/contact_model.js --> 							

//Common-parts-of-all-models++++++++++++++++++++++++++++++++++
model 					= require('./model');
var contact_model 			= function(){ };
contact_model.prototype.constructor  	= contact_model;
contact_model.prototype     		= model;
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Fetch all contacts
contact_model.prototype.all_contacts = function(data,callback) {
	sql = "SELECT * FROM con";
	this.execute(sql,callback);
};

//Fetch a particular contact
contact_model.prototype.select_contact = function(data,callback) {
	sql = "SELECT * FROM con WHERE con_id = "+data.con_id;
	this.execute(sql,callback);
};

//Insert a new contact
contact_model.prototype.insert = function(data,callback) {
	sql = "INSERT INTO con (con_id,con_name,con_num) VALUES ('','"+data.con_name+"','"+data.con_num+"')";
	
	this.execute(sql,callback);

};

//Update a contact detail
contact_model.prototype.save = function(data,callback) {
	sql = "UPDATE  con SET con_name = '"+data.con_name+"',con_num='"+data.con_num+"' WHERE con_id='"+data.con_id+"'  ";
	
	this.execute(sql,callback);

};

module.exports = new contact_model();