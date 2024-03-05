function validateForm() {
  
    clearErrorMessages();
  
    // Validate name
    const name = document.forms["registrationForm"]["name"].value;
    if (name === "") {
      displayErrorMessage("name", "Please enter your name.");
      return false;
    }
  
    // Validate register number
    const registerno = document.forms["registrationForm"]["registerno"].value;
    if (registerno === "") {
      displayErrorMessage("registerno", "Please enter your register number.");
      return false;
    }
  
    // Validate course
    const course = document.forms["registrationForm"]["Course"].value;
    if (course === "Course") {
      displayErrorMessage("Course", "Please select a course.");
      return false;
    }
  
    // Validate department
    const department = document.forms["registrationForm"]["Department"].value;
    if (department === "Department") {
      displayErrorMessage("Department", "Please select a department.");
      return false;
    }
  
    // Validate date of birth
    const dob = document.forms["registrationForm"]["DOB"].value;
    if (dob === "") {
      displayErrorMessage("DOB", "Please enter your date of birth.");
      return false;
    }
  
    // Validate phone number
    const phone = document.forms["registrationForm"]["phone"].value;
    if (!isValidPhoneNumber(phone)) {
      displayErrorMessage("phone", "Please enter a valid phone number.");
      return false;
    }
  
    // Validate gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      displayErrorMessage("gender", "Please select your gender.");
      return false;
    }
  
    // Validate email
    const email = document.forms["registrationForm"]["Email"].value;
    if (!isValidEmail(email)) {
      displayErrorMessage("Email", "Please enter a valid email address.");
      return false;
    }
  
    // Validate year
    const year = document.querySelector('input[name="Year"]:checked');
    if (!year) {
      displayErrorMessage("Year", "Please select your year.");
      return false;
    }
  
    // Validate college name
    const clg = document.forms["registrationForm"]["clg"].value;
    if (clg === "") {
      displayErrorMessage("clg", "Please enter your college name.");
      return false;
    }
  
    // If all validations pass, submit the form
    return true;
  }
  
  function clearErrorMessages() {
    // Remove any existing error messages
    const errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach((message) => (message.textContent = ""));
  }
  
  
  function displayErrorMessage(fieldName, message) {
    // Display error message next to the input field
    const inputField = document.querySelector(`[name="${fieldName}"]`);
    if (inputField) {
      const errorElement = document.createElement("div");
      errorElement.classList.add("error");
      errorElement.textContent = message;
      inputField.parentNode.appendChild(errorElement);
    } else {
      console.error(`Input field with name "${fieldName}" not found.`);
    }
  }
  
  function isValidPhoneNumber(phone) {
    // Implement your phone number validation logic here
     // (e.g., using a regular expression)
     const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
     return phoneRegex.test(phone);
   }
   
   function isValidEmail(email) {
     // Implement your email validation logic here
     // (e.g., using a regular expression)
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
   }
   
  function myalert() {
    if (validateForm()){
      alert('Registration completed successfully');
    }
  }
  if (!validateForm()){
  window.console.error("Inputfields required");
  }
  function myopen() {
    window.open("https://books.google.com/books?uid=117522004192189783614");
  }
  function mouseDown() {
    document.getElementById("myP").style.color = "white";
  }
  
  function mouseUp() {
    document.getElementById("myP").style.color = "blue";
  }
  function myonchange() {
    var x = document.getElementById("Course").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
  }
  
  
  
  
  
  
  