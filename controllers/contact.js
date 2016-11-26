
// File : controller/contact.js --> 							

//Contact controller
function contact(){
	data 	= {};
	tomodel = {};
	model 	= require('../models/contact_model');
};
contact.prototype.constructor = contact;

//Function to list all contacts
contact.prototype.list =  function(req, res) {
	data.title = 'My Contacts';
	model.all_contacts(tomodel,function(err,rows){
		data.rows = rows;
	  	res.render('../views/all',data);
	});
}

//Function to show the add new form
contact.prototype.add_form =  function(req, res) {
	data.title = 'Add New Contats';
	res.render('../views/new',data);
}

//Function to insert a new contact
contact.prototype.add_insert =  function(req, res) {
	
	tomodel.con_name = req.body.con_name;
	tomodel.con_num = req.body.con_num;
	model.insert(tomodel,function(err,rows){
	  	res.redirect('/');
	});

}

//Function to edit contact
contact.prototype.edit =  function(req, res) {
	
	data.title = 'Edit Contats';
	tomodel.con_id = req.params.id;
	model.select_contact(tomodel,function(err,rows){
	  		data.rows = rows;
	  		res.render('../views/edit',data);
	});

}

//Function to save the editted contact
contact.prototype.edit_save =  function(req, res) {
	
	tomodel.con_name = req.body.con_name;
	tomodel.con_num = req.body.con_num;
	tomodel.con_id = req.body.con_id;
	model.save(tomodel,function(err,rows){
	  	res.redirect('/');
	});

}

module.exports = new contact();

