var express=require("express");
var mysql=require("node-querybuilder");
var app=express();
var server=express();
var cors=require("cors");
const settings = {
    host: 'localhost',
    database: 'todo',
    user: 'root',
    password: ''
};
server.use(express.json())
server.use(cors())
var pool = new mysql(settings, 'mysql', 'pool');

server.post("/api/login",function(req,res){
    var data=req.body
    pool.get_connection(function(qb,error){
        if(error){
            res.send(JSON.stringify(error))
        }
        qb.select("*").where(data).get("login",function(err,user){
            if(err)
            {
                res.send(JSON.stringify(err))
            }
            else{
                res.send(JSON.stringify(user[0]));
            }
        })
    })
  })
server.post("/api/todo",function(req,res){
    var data=req.body
    pool.get_connection(function(qb,error){
        if(error){
            res.send(JSON.stringify(error))
        }
        qb.select("*").where(data).get("todo",function(err,todo){
            if(err)
            {
                res.send(JSON.stringify(err))
            }
            else{
                res.send(JSON.stringify(todo));
            }
        })
    })
})
server.post("/api/todo/add",function(req,res){
    var data=req.body
    pool.get_connection(function(qb,error){
        if(error){
            res.send(JSON.stringify(error))
        }
        qb.insert("todo",data,function(err,data){
            if(err)
            {
                res.send(JSON.stringify(err))
            }
            else{
                res.send(JSON.stringify(data));
            }
        })
    })
})
server.post("/api/todo/delete",function(req,res){
    var data=req.body
    pool.get_connection(function(qb,error){
        if(error){
            res.send(JSON.stringify(error))
        }
        console.log(data)
        qb.delete("todo",data,function(err,data){
            if(err)
            {
                res.send(JSON.stringify(err))
            }
            else{
                res.send(JSON.stringify(data));
            }
        })
    })
})
server.post("/api/todo/update",function(req,res){
    var data=req.body
    pool.get_connection(function(qb,error){
        if(error){
            res.send(JSON.stringify(error))
        }
        var id=data.id;
        delete data.id;
        qb.update("todo",data,{id:id},function(err,data){
            if(err)
            {
                res.send(JSON.stringify(err))
            }
            else{
                res.send(JSON.stringify(data));
            }
        })
    })
})
app.use("/",express.static("public"))
app.listen(8081,function(){
    console.log("application started")
})
server.listen(8080,function(){
    console.log("Server started")
})