document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let users = [
      { username: "nico", password: "123" },
      { username: "manu", password: "123" },
      { username: "mathieu", password: "123" },
      { username: "alex", password: "123" },
      { username: "florie", password: "123" },
    ];

    let isValidUser = users.some(function (user) {
      return user.username === username && user.password === password;
    });

    let resultElement = document.getElementById("loginResult");
    if (isValidUser) {
      resultElement.textContent = "Connexion réussie!";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent =
        "Échec de la connexion. Vérifiez vos identifiants.";
      resultElement.style.color = "red";
    }
  });
