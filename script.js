const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const icon = document.getElementById("icon");

const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

playBtn.onclick = () => {

if(audio.paused){
audio.play();
playBtn.classList.add("playing");
icon.textContent="⏸";
createHeart();
}
else{
audio.pause();
playBtn.classList.remove("playing");
icon.textContent="▶";
}

};

audio.addEventListener("loadedmetadata",()=>{
duration.textContent=format(audio.duration);
});

audio.addEventListener("timeupdate",()=>{

let percent=(audio.currentTime/audio.duration)*100;
progressFill.style.width=percent+"%";
currentTime.textContent=format(audio.currentTime);

});

progressBar.onclick=(e)=>{

let rect=progressBar.getBoundingClientRect();
let percent=(e.clientX-rect.left)/rect.width;

audio.currentTime=percent*audio.duration;

};

function format(sec){

let m=Math.floor(sec/60);
let s=Math.floor(sec%60);

if(s<10)s="0"+s;

return m+":"+s;

}

function createHeart(){

setInterval(()=>{

let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

},600);

}
