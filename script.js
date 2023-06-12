document.getElementById("registerButton").addEventListener("click", function(event) {
  event.preventDefault();

  var username = document.getElementById("registerUsername").value;
  var email = document.getElementById("registerEmail").value;
  var password = document.getElementById("registerPassword").value;



 function validateEmail(emailId)
{
var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(emailId.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("Invalid email address.");
document.form1.text1.focus();
return alert false;
}

  // Replace the following code with your actual registration logic
  if (username && email && password) {
    document.getElementById("welcomeMessage").textContent = "Welcome " + username;
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("welcomePage").style.display = "block";
  } else {
    displayErrorMessage("Please fill in all fields.");
  }
});

document.getElementById("loginButton").addEventListener("click", function(event) {
  event.preventDefault();

  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  // Replace the following code with your actual login logic
  if (username && password) {
    document.getElementById("welcomeMessage").textContent = "Welcome " + username;
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("welcomePage").style.display = "block";
  } else {
    displayErrorMessage("Invalid username or password.");
  }
});

document.getElementById("logoutButton").addEventListener("click", function() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("welcomePage").style.display = "none";
  clearFields();
});

function displayErrorMessage(message) {
  var errorElement = document.getElementById("error");
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function clearFields() {
  document.getElementById("registerUsername").value = "";
  document.getElementById("registerEmail").value = "";
  document.getElementById("registerPassword").value = "";
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";
  document.getElementById("error").style.display = "none";
}
