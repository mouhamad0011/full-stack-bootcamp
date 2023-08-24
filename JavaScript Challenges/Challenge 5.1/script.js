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
  const form = document.createElement('form');
  const fullNameInput = document.createElement('input');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const confirmPasswordInput = document.createElement('input');
  const but=document.createElement("button");
  const errorMessage = document.createElement('p');
  const successMessage = document.createElement('p');
  document.body.appendChild(form);
  form.appendChild(fullNameInput);
  form.appendChild(emailInput);
  form.appendChild(passwordInput);
  form.appendChild(confirmPasswordInput);
  form.appendChild(but);
  document.body.appendChild(errorMessage);
  document.body.appendChild(successMessage);
  but.textContent="submit";
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    errorMessage.textContent = '';
    successMessage.textContent = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
      errorMessage.textContent = 'Please enter a valid email address.';
    } else if (passwordInput.value !== confirmPasswordInput.value) {
      errorMessage.textContent = 'Passwords do not match.';
    } else {
      successMessage.textContent = 'Form submitted successfully!';
    }
  });

  document.addEventListener('click', function(event) {
    if (!event.target.matches('input')) {
      fullNameInput.style.backgroundColor = '';
      emailInput.style.backgroundColor = '';
      passwordInput.style.backgroundColor = '';
      confirmPasswordInput.style.backgroundColor = '';
    }
  });

  fullNameInput.addEventListener('focus', () => {
    fullNameInput.style.backgroundColor = '#f0f0f0';
  });

  emailInput.addEventListener('focus', () => {
    emailInput.style.backgroundColor = '#f0f0f0';
  });

  passwordInput.addEventListener('focus', () => {
    passwordInput.style.backgroundColor = '#f0f0f0';
  });

  confirmPasswordInput.addEventListener('focus', () => {
    confirmPasswordInput.style.backgroundColor = '#f0f0f0';
  });