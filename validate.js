// Define variables to track login attempts and lockout status
let loginAttempts = 0;
let isLocked = false;

function validateLogin() {
  if (isLocked) {
    document.getElementById("error-message").innerText = "Account locked. Please try again later.";
    return false; // Prevent form submission
  }

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Perform your validation logic here
  if (username === "Kirtpreet" && password === "12345") {
    // Successful login
    loginAttempts = 0; // Reset login attempts
    window.location.href = "https://khushalj-streamlit-csv-pie-login-hg4xe8.streamlit.app/"; // Replace with your actual success page URL
    return false; // Prevent form submission
  } else {
    // Incorrect login attempt
    loginAttempts++;

    if (loginAttempts >= 2) {
      isLocked = true;
      setTimeout(() => {
        isLocked = false;
        loginAttempts = 0; // Reset login attempts after lockout period
      }, 300000); // Lockout period: 300 seconds (5 minutes)
    }

    errorMessage.innerText = "Invalid username or password.";
    return false; // Prevent form submission
  }
}
