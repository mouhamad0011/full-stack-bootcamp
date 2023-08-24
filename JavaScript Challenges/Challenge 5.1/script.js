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
const heading1=document.createElement("h1");
heading1.style.border="10px dotted green";
heading1.textContent="hello";
document.body.appendChild(heading1);
document.addEventListener('keydown', function(event) {
    switch (event.key) {
      case 'a':heading1.style.backgroundColor = 'red'; break;
      case 's': heading1.style.marginLeft = parseInt(getComputedStyle(heading1).marginLeft) + 10 + 'px'; break;
      case 'd': const newParagraph = document.createElement('p');
                newParagraph.textContent = 'Key D was pressed!';
                document.body.appendChild(newParagraph);break;
      case 'w':heading1.style.display = heading1.style.display === 'none' ? 'block' : 'none';break;
      case ' ':const currentFontSize = parseInt(getComputedStyle(heading1).fontSize);
               heading1.style.fontSize = (currentFontSize + 2) + 'px';break;
    }
  });
  