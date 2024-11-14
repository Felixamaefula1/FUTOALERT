// Validate the form on submit
function validateForm(event) {
    event.preventDefault();
  
    // Get form inputs and error elements
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
  
    let isValid = true;
  
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }
  
    // Validate password
    if (password.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters long";
      passwordError.style.display = "block";
      isValid = false;
    } else {
      passwordError.style.display = "none";
    }
  
    // Submit form if valid
    if (isValid) {
      alert("Sign-In Successful!");
      // Here you can add actual form submission logic
      // For example, sending data to the server
    }
  }
  