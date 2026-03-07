let equipment=[];

fetch("weapons.json")
.then(res=>res.json())
.then(data=>{

equipment=data;

let weaponSelect=document.getElementById("weapon");
let helmetSelect=document.getElementById("helmet");
let armorSelect=document.getElementById("armor");

data.forEach(item=>{

let option=document.createElement("option");

option.value=item.id;
option.text=item.name+" ($"+item.price+")";

if(item.type==="weapon")
weaponSelect.appendChild(option);

if(item.type==="helmet")
helmetSelect.appendChild(option);

if(item.type==="armor")
armorSelect.appendChild(option);

});

});

function calculateLoadout(){

let budget=parseInt(document.getElementById("budget").value);

let weaponID=document.getElementById("weapon").value;
let helmetID=document.getElementById("helmet").value;
let armorID=document.getElementById("armor").value;

let weapon=equipment.find(i=>i.id==weaponID);
let helmet=equipment.find(i=>i.id==helmetID);
let armor=equipment.find(i=>i.id==armorID);

let totalPrice=weapon.price+helmet.price+armor.price;

let totalWeight=weapon.weight+helmet.weight+armor.weight;

let totalDurability=helmet.durability+armor.durability;

let result="";

if(totalPrice>budget){

result=`
装备价格：${totalPrice}

预算：${budget}

⚠ 超出预算
`;

}else{

let remain=budget-totalPrice;

result=`
主武器：${weapon.name}

头盔：${helmet.name}

防弹衣：${armor.name}

总价值：${totalPrice}

剩余预算：${remain}

总重量：${totalWeight} kg

总防具耐久：${totalDurability}
`;

}

document.getElementById("result").innerHTML=result;

}