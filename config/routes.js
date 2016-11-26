// File : config/routes.js --> 							

module.exports = function(app){

	//Controllers++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	var contactcontroller     	= require('../controllers/contact');
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	//Routes+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	app.get('/', contactcontroller.list);
	app.get('/new', contactcontroller.add_form);
	app.post('/add', contactcontroller.add_insert);
	app.get('/edit/:id', contactcontroller.edit);
	app.post('/edit_save', contactcontroller.edit_save);
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

}