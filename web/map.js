function showPoint(point){

let text="";

if(point==="A"){

text="A点：资源区，适合防守";

}

if(point==="B"){

text="B点：中心战斗区";

}

if(point==="C"){

text="C点：狙击高地";

}

document.getElementById("info").innerText=text;

}