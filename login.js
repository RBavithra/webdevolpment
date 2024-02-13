const form = document.getElementById('form');
const Username = document.getElementById('Username');
const Password = document.getElementById('Password');
console.log("User Agent:", window.navigator.userAgent);
const d= new Date();
console.log("Current Date and Time:", d);
form.addEventListener('submit', e => {// onsubmit event
  e.preventDefault();
  validateInputs();
});


var input = document.getElementById("Username");// onkeydown
input.onkeydown = function(event){
  console.log("keydown:" + event.key);
}
var button = document.getElementById("button")// onclick event 
button.addEventListener("click", function() {
  alert("Welcome to  TCE LIBRARY");
});

function onPageLoad() {// onload event
  alert("Page has finished loading!");
}
window.onload = onPageLoad;

const setError = (element, message) => {
  const inputcontrol = element.parentElement;
  const errorDisplay = inputcontrol.querySelector('.error');
  errorDisplay.innerText = message;
  inputcontrol.classList.add('error');
  inputcontrol.classList.remove('success');
}
const setSuccess = element => {
  const inputcontrol = element.parentElement;
  const errorDisplay = inputcontrol.querySelector('.error');
  errorDisplay.innerText = '';
  inputcontrol.classList.add('success');
  inputcontrol.classList.remove('error');
}

const validateInputs = () => {
  const UsernameValue = Username.value.trim();
  const PasswordValue = Password.value.trim();
  if (UsernameValue === '') {
    setError(Username, 'Username is required');
  } else {
    setSuccess(Username);
  }
  if (PasswordValue === '') {
    setError(Password, 'Password is required');
  } else if (PasswordValue.length < 8) {
    setError(Password, 'Password must be at least 8 characters.')
  } else {
    setSuccess(Password);
  }
};

