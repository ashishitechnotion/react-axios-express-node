const express=require('express');
const request = require('request');
const _ourController=require('./controllers/_ourController');
module.exports =function(app)
{
	const apiRoutes=express.Router();
	app.use('/api',apiRoutes);
	apiRoutes.get('/helloworld',_ourController.helloworld);
	apiRoutes.get('/exapi',_ourController.exapi)
}