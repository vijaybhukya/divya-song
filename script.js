const audio = document.getElementById("audio");
const btn = document.getElementById("playBtn");
const icon = document.getElementById("icon");

const progressFill = document.getElementById("progressFill");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 110;

let audioCtx;
let analyser;
let source;
let dataArray;

const typing = document.getElementById("typing");

const message =
"You sang something beautiful. So I wrote some code for you.";

let i=0;

function type(){
if(i<message.length){
typing.innerHTML+=message.charAt(i);
i++;
setTimeout(type,40);
}
}
type();

btn.onclick = () => {

if(audio.paused){

audio.play();
icon.innerHTML="⏸";

if(!audioCtx){

audioCtx = new AudioContext();

source = audioCtx.createMediaElementSource(audio);
analyser = audioCtx.createAnalyser();

source.connect(analyser);
analyser.connect(audioCtx.destination);

analyser.fftSize = 128;

dataArray = new Uint8Array(analyser.frequencyBinCount);

draw();

}

startHearts();

}else{

audio.pause();
icon.innerHTML="▶";

}

};

function draw(){

requestAnimationFrame(draw);

analyser.getByteFrequencyData(dataArray);

ctx.clearRect(0,0,canvas.width,canvas.height);

let barWidth = canvas.width / dataArray.length;

for(let i=0;i<dataArray.length;i++){

let height = dataArray[i]/2;

let x = i*barWidth;

ctx.fillStyle = "rgb("+(200+i*2)+",80,255)";
ctx.fillRect(x,canvas.height-height,barWidth-2,height);

}

}

audio.addEventListener("timeupdate",()=>{

let percent=(audio.currentTime/audio.duration)*100;

progressFill.style.width=percent+"%";

current.textContent=format(audio.currentTime);

});

audio.addEventListener("loadedmetadata",()=>{

duration.textContent=format(audio.duration);

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

document.addEventListener("click", function(e){

for(let i=0;i<10;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";

heart.style.position="fixed";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),1200);

}

});
