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

<td>${w.damage}</td>

<td>

<button onclick="showImage(${w.id})">图片</button>

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
let damage=document.getElementById("damage").value;
let image=document.getElementById("image").value;

weapons.push({

id:Date.now(),

name:name,

type:type,

damage:damage,

image:image

});

render(weapons);

}

function deleteWeapon(id){

weapons=weapons.filter(w=>w.id!==id);

render(weapons);

}

function editWeapon(id){

let weapon=weapons.find(w=>w.id===id);

weapon.name=prompt("修改名称",weapon.name);
weapon.type=prompt("修改类型",weapon.type);
weapon.damage=prompt("修改伤害",weapon.damage);
weapon.image=prompt("修改图片URL",weapon.image);

render(weapons);

}


function showImage(id){

let img=document.getElementById("weaponImage");

img.src="images/"+id+".avif";

document.getElementById("imageViewer").style.display="flex";

}

function closeImage(){

document.getElementById("imageViewer").style.display="none";

}