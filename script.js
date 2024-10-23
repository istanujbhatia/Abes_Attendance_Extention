// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  submitBtn = document.getElementById("submitBtn")
  submitBtn.innerHTML="Credentials Saved !!"
  submitBtn.disabled=true;
  submitBtn.style.backgroundColor="grey";
  redirectWithLoader()
  // Get values from input fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Save credentials to localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  // Alert user that credentials are saved (for demonstration purposes)
  // alert(`Credentials saved! Click on extention`);
});
//loader function 

function redirectWithLoader() {
  // Show loader and overlay
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("loader").style.display = "block";

  // Simulate a delay before redirect (e.g., 2 seconds)
  setTimeout(function() {
    window.location.href = "chart.html"; // Redirect to another page
  }, 3000); // 3000ms = 3 seconds
}

// Function to retrieve saved credentials from localStorage
function getSavedCredentials() {
  var savedUsername = localStorage.getItem('username');
  var savedPassword = localStorage.getItem('password');
  return {
    username: savedUsername,
    password: savedPassword
  };
}
// Load saved credentials on page load
window.addEventListener('load', function () {
  const savedCredentials = getSavedCredentials();
  // Populate input fields with saved credentials
  if (savedCredentials.username) {
    document.getElementById('username').value = savedCredentials.username
  }

  if (savedCredentials.password) {
    document.getElementById('password').value = savedCredentials.password
  }


});

document.addEventListener("DOMContentLoaded", function() {
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');

  togglePassword.addEventListener('click', function () {
      // Toggle the type attribute using getAttribute and setAttribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // Toggle the eye icon
      document.getElementById('eye').classList.toggle('fa-eye');
      document.getElementById('eye').classList.toggle('fa-eye-slash');
  });
});





