let weapons=[];

fetch("weapons.json")
.then(res=>res.json())
.then(data=>{
weapons=data;
render(weapons);
});

function render(list){

let html="";

list.forEach(w=>{

html+=`
<tr>
<td>${w.id}</td>
<td>${w.name}</td>
<td>${w.type}</td>

<td>

<button onclick="editWeapon(${w.id})">修改</button>

<button onclick="deleteWeapon(${w.id})">删除</button>

</td>

</tr>
`;

});

document.getElementById("weaponTable").innerHTML=html;

}

function searchWeapon(){

let keyword=document.getElementById("search").value;

let result=weapons.filter(w=>w.name.includes(keyword));

render(result);

}

function addWeapon(){

let name=document.getElementById("name").value;
let type=document.getElementById("type").value;

if(!name||!type) return alert("请输入完整信息");

weapons.push({
id:Date.now(),
name:name,
type:type
});

render(weapons);

}

function deleteWeapon(id){

weapons=weapons.filter(w=>w.id!==id);

render(weapons);

}

function editWeapon(id){

let weapon=weapons.find(w=>w.id===id);

let newName=prompt("修改名称",weapon.name);
let newType=prompt("修改类型",weapon.type);

weapon.name=newName;
weapon.type=newType;

render(weapons);

}