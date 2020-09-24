const express=require('express');
const ajaxRouter=require('./router/ajax.js');
const app=express();
app.listen(8080);
app.use(express.static('./public'));
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({
	extended:false
}))
app.use('/ajax',ajaxRouter);