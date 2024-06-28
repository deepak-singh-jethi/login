document.getElementById("signUp").addEventListener("click", () => {
  document.querySelector(".container").classList.add("right-panel-active");
});

document.getElementById("signIn").addEventListener("click", () => {
  document.querySelector(".container").classList.remove("right-panel-active");
});

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const loginError = document.getElementById("loginError");

    loginError.textContent = "";

    if (email === "" || password === "") {
      loginError.textContent = "All fields are required";
      return;
    }

    if (!validateEmail(email)) {
      loginError.textContent = "Invalid email format";
      return;
    }

    if (password.length < 8) {
      loginError.textContent = "Password must be at least 8 characters";
      return;
    }

    // Perform login (mock)
    alert("Logged in successfully!");
  });

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const registerError = document.getElementById("registerError");

    registerError.textContent = "";

    if (username === "" || email === "" || password === "") {
      registerError.textContent = "All fields are required";
      return;
    }

    if (!validateEmail(email)) {
      registerError.textContent = "Invalid email format";
      return;
    }

    if (password.length < 8) {
      registerError.textContent = "Password must be at least 8 characters";
      return;
    }

    // Perform registration (mock)
    alert("Registered successfully!");
  });

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
