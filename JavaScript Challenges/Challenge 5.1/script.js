const button=document.createElement("button");
button.style.padding="10px 20px";
button.style.fontSize="16px";
button.style.backgroundColor="#3498db";
button.style.color="#ffffff";
button.style.border="none";
button.style.cursor="pointer";
document.body.appendChild(button);
button.addEventListener("click",function(){
    button.style.backgroundColor="red";
    button.style.color="white";
    button.textContent="Clicked "+Math.random()*1000+1;
})