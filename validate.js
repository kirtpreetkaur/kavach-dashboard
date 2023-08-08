function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Perform your validation logic here
  if (username === "Kirtpreet" && password === "12345") {
    // Redirect to a success page
    window.location.href = "https://khushalj-streamlit-csv-pie-login-hg4xe8.streamlit.app/";
    return false; // Prevent the form from submitting
  } else {
    // Display an error message
    errorMessage.innerText = "Invalid username or password.";
    return false; // Prevent the form from submitting
  }
}




