$(document).ready(function() {
    const form = $('#form');
    const Username = $('#Username');
    const Password = $('#Password');
    console.log("User Agent:", window.navigator.userAgent);
    const d = new Date();
    console.log("Current Date and Time:", d);
  
    form.on('submit', function(e) {
      e.preventDefault();
      validateInputs();
    });
  
    const input = $('#Username');
    input.on('keydown', function(event) {
      console.log("keydown:" + event.key);
    });
  
    const button = $('#button');
    button.on('click', function() {
      alert("Welcome to TCE LIBRARY");
    });
  
    $(window).on('load', function() {
      alert("Page has finished loading!");
    });
  
    const setError = (element, message) => {
      const inputControl = element.parent();
      const errorDisplay = inputControl.find('.error');
      errorDisplay.text(message);
      inputControl.addClass('error').removeClass('success');
    };
  
    const setSuccess = element => {
      const inputControl = element.parent();
      const errorDisplay = inputControl.find('.error');
      errorDisplay.text('');
      inputControl.addClass('success').removeClass('error');
    };
  
    const validateInputs = () => {
      const UsernameValue = Username.val().trim();
      const PasswordValue = Password.val().trim();
      if (UsernameValue === '') {
        setError(Username, 'Username is required');
      } else {
        setSuccess(Username);
      }
      if (PasswordValue === '') {
        setError(Password, 'Password is required');
      } else if (PasswordValue.length < 8) {
        setError(Password, 'Password must be at least 8 characters.');
      } else {
        setSuccess(Password);
      }
    };
  });
  