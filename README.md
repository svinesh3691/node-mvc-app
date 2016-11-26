# node-mvc-app

MVC structure in node JS


This is a simple MVC structure created in node js

## Stuffs used

* Node js - High performance javascript framework
* Express js - Which makes building node app easier
* MySql - As database
* ejs - An engine for rendering html views

## Steps to use

Clone this repo into new project folder (e.g., `node-mvc-app`).
```bash
git clone  https://github.com/svinesh3691/node-mvc-app.git  node-mvc-app
cd angular2-app
```
## Install npm packages

Install the npm packages described in the `package.json`
```bash
npm install
```
## Create a mysql database

My database name is `contact`. You can create your own
And then create this table
``
CREATE TABLE IF NOT EXISTS `con` (
  `con_id` int(11) NOT NULL AUTO_INCREMENT,
  `con_name` varchar(50) NOT NULL,
  `con_num` varchar(20) NOT NULL,
  PRIMARY KEY (`con_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

``
Now you are good to go, just run
`node index` forom the project folder and browse to http://localhost:8081/ which will show you the awesome

Good luck! 
