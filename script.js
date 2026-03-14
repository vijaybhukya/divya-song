document.addEventListener("click", function(e){

for(let i=0;i<12;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";

heart.style.position="fixed";

let x=(Math.random()-0.5)*200;
let y=(Math.random()-0.5)*200;

heart.style.transform=`translate(${x}px,${y}px)`;

heart.style.transition="all 1.2s ease-out";

document.body.appendChild(heart);

setTimeout(()=>{
heart.style.opacity="0";
heart.style.transform=`translate(${x*2}px,${y*2}px)`;
},10);

setTimeout(()=>{
heart.remove();
},1200);

}

});
