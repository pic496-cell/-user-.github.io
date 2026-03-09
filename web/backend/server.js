const express=require("express");
const fs=require("fs");
const cors=require("cors");

const app=express();

app.use(cors());
app.use(express.json());

/* 获取留言 */

app.get("/api/getMessage",(req,res)=>{

fs.readFile("message.json","utf8",(err,data)=>{

let list=err?[]:JSON.parse(data);

res.json(list);

});

});

/* 添加留言 */

app.post("/api/addMessage",(req,res)=>{

const {username,content}=req.body;

let newMsg={
id:Date.now(),
username,
content
};

fs.readFile("message.json","utf8",(err,data)=>{

let list=err?[]:JSON.parse(data);

list.push(newMsg);

fs.writeFile("message.json",JSON.stringify(list,null,2),()=>{

res.json({msg:"success"});

});

});

});

app.listen(3000);

app.get("/",(req,res)=>{
res.send("API server running");
});

app.listen(3000,()=>{
console.log("server running");
});