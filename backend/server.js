const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
  res.send("API server running");
});

/* 获取留言 */

app.get("/api/getMessage",(req,res)=>{

fs.readFile("message.json","utf8",(err,data)=>{

let list = err ? [] : JSON.parse(data);

res.json(list);

});

});

app.listen(3000,()=>{
console.log("server running");
});