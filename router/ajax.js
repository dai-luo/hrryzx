const express=require('express');
const pool=require('../pool.js');
const r=express.Router();
r.get('/login/:uname&:upwd',(req,res)=>{
	var _uname=req.params.uname;
	var _upwd=req.params.upwd;
	var sql='select * from yc_user where uname=? and upwd=?';
	pool.query(sql,[_uname,_upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})
r.post('/buyers',(req,res)=>{
	var user=req.body;
	var sql='insert into yc_user set ?';
	pool.query(sql,[user],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})
module.exports=r;