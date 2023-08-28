const container = document.createElement('div');
container.className = 'container';
const loginContainer = document.createElement('div');
loginContainer.className = 'login__container';
const loginSignin = document.createElement('div');
loginSignin.className = 'login__signin';
const loginSigninNow = document.createElement('div');
loginSigninNow.className = 'login__signin-now';
const h1 = document.createElement('h1');
h1.textContent = 'Sign up NOW!';
const h3 = document.createElement('h3');
h3.textContent = 'Enter your details';
const form = document.createElement('form');
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email';
const emailInput = document.createElement('input');
emailInput.className = 'input-field';
emailInput.type = 'email';
emailInput.placeholder = 'Email';
emailInput.required = true;
emailLabel.appendChild(emailInput);
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password';
const passwordInput = document.createElement('input');
passwordInput.className = 'input-field';
passwordInput.type = 'password';
passwordInput.placeholder = 'Password';
passwordInput.required = true;
passwordLabel.appendChild(passwordInput);
const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.textContent = 'Confirm Password';
const confirmPasswordInput = document.createElement('input');
confirmPasswordInput.className = 'input-field';
confirmPasswordInput.type = 'password';
confirmPasswordInput.placeholder = 'Confirm Password';
confirmPasswordInput.required = true;
confirmPasswordLabel.appendChild(confirmPasswordInput);
const submitButton = document.createElement('button');
submitButton.className = 'filled-btn';
submitButton.id = 'submit-btn';
submitButton.textContent = 'Submit';
form.appendChild(emailLabel);
form.appendChild(passwordLabel);
form.appendChild(confirmPasswordLabel);
form.appendChild(submitButton);
loginSigninNow.appendChild(h1);
loginSigninNow.appendChild(h3);
loginSigninNow.appendChild(form);
loginSignin.appendChild(loginSigninNow);
loginContainer.appendChild(loginSignin);
container.appendChild(loginContainer);
document.body.appendChild(container);

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-btn');
    const confirmPasswordInput = document.querySelector('input[type="password"][placeholder="Confirm Password"]');
    const errorMessage = document.createElement('p');
    errorMessage.className = 'error-message';
    errorMessage.style.color = 'red';
    errorMessage.style.display = 'none';
    errorMessage.textContent = 'Passwords do not match';
    confirmPasswordInput.parentNode.appendChild(errorMessage);
  
    submitButton.addEventListener('click', function (event) {
      event.preventDefault();
  
      const passwordInput = document.querySelector('input[type="password"][placeholder="Password"]');
      if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessage.style.display = 'block';
      } else {
        errorMessage.style.display = 'none';
        window.location.href = 'quote.html';
      }
    });
  });
  