function register(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Save user locally (temporary)
  const user = { name, email };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration successful!");
  window.location.href = "dashboard.html";
}
