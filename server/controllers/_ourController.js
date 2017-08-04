const request = require('request');
exports.helloworld=function(req,res,next)
{
	res.status(200).json({
		message:"Hello world"
	})
}

exports.exapi=function(req,res,next)
{
 request("https://majesticerp-mymapi.herokuapp.com/get_all_fac_list_by_state_id/3",function(error,response,body)
{
	if(!error&&response.statusCode==200)
		{
			res.send(body);
		}
		else
			{
				res.json(error);
			}
})
}