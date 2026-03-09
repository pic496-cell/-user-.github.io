const api="https://user-github-io.onrender.com";

/* 提交留言 */

function addMessage(){

let username=document.getElementById("username").value;
let content=document.getElementById("content").value;

fetch(api+"/api/addMessage",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
username,
content
})

})
.then(res=>res.json())
.then(data=>{

alert("留言成功");

loadMessage();

});

}

/* 加载留言 */

function loadMessage(){

fetch(api+"/api/getMessage")

.then(res=>res.json())

.then(data=>{

let html="";

data.forEach(msg=>{

html+=`
<div class="msg">
<b>${msg.username}</b>
<p>${msg.content}</p>
<hr>
</div>
`;

});

document.getElementById("messageList").innerHTML=html;

});

}

loadMessage();