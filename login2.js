$(document).ready(function() {
    const form = $('#form');
    const username = $('#Username');
    const password = $('#Password');
    
    console.log("User Agent:", window.navigator.userAgent);
    const currentDate = new Date();
    console.log("Current Date and Time:", currentDate);
    
    form.submit(function(e) {
        e.preventDefault();
        validateInputs();
    });
    
    username.keydown(function(event) {
        console.log("keydown:" + event.key);
    });
    
    $('#button').click(function() {
        alert("Welcome to TCE LIBRARY");
    });
    
    function onPageLoad() {
        alert("Page has finished loading!");
    }
    onPageLoad();
    
    function setError(element, message) {
        const inputControl = element.parent();
        const errorDisplay = inputControl.find('.error');
        errorDisplay.text(message);
        inputControl.addClass('error').removeClass('success');
    }
    
    function setSuccess(element) {
        const inputControl = element.parent();
        const errorDisplay = inputControl.find('.error');
        errorDisplay.text('');
        inputControl.addClass('success').removeClass('error');
    }
    
    function validateInputs() {
        const usernameValue = username.val().trim();
        const passwordValue = password.val().trim();
        
        if (usernameValue === '') {
            setError(username, 'Username is required');
        } else {
            setSuccess(username);
        }
        
        if (passwordValue === '') {
            setError(password, 'Password is required');
        } else if (passwordValue.length < 8) {
            setError(password, 'Password must be at least 8 characters.');
        } else {
            setSuccess(password);
        }
    }
});