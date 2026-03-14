const audio = document.getElementById("audio");
const btn = document.getElementById("playBtn");
const icon = document.getElementById("icon");

const bars = document.querySelectorAll(".bar");
const progressFill = document.getElementById("progressFill");

const current = document.getElementById("current");
const duration = document.getElementById("duration");

const typing = document.getElementById("typing");

const message =
"You sang something beautiful. So I wrote some code for you.";

let index=0;

function type(){

if(index<message.length){
typing.innerHTML+=message.charAt(index);
index++;
setTimeout(type,40);
}

}

type();

btn.onclick=()=>{

if(audio.paused){

audio.play();
icon.innerHTML="⏸";

bars.forEach(b=>b.style.animationPlayState="running");

startHearts();

}else{

audio.pause();
icon.innerHTML="▶";

bars.forEach(b=>b.style.animationPlayState="paused");

}

};

audio.addEventListener("loadedmetadata",()=>{
duration.textContent=format(audio.duration);
});

audio.addEventListener("timeupdate",()=>{

let percent=(audio.currentTime/audio.duration)*100;
progressFill.style.width=percent+"%";

current.textContent=format(audio.currentTime);

});

function format(sec){

let m=Math.floor(sec/60);
let s=Math.floor(sec%60);

if(s<10)s="0"+s;

return m+":"+s;

}

function startHearts(){

setInterval(()=>{

let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>heart.remove(),7000);

},500);

}
