document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();

  if (firstName && lastName && email) {
    document.getElementById("message").textContent = `Thanks for registering, ${firstName}!`;
    document.getElementById("registrationForm").reset();
  } else {
    document.getElementById("message").textContent = "Please fill out all fields.";
  }
});
