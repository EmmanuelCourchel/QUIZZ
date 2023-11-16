document.getElementById("inscriptionForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const pseudo = document.getElementById("pseudo").value;
    const mdp = document.getElementById("mdp").value;

    let newUser = { nom, prenom, email, pseudo, mdp };
    let users = [
        { nom: "", prenom: "", email: "", pseudo: "", mdp: "" },
    ];

    users.push(newUser);

    let resultElement = document.getElementById("inscriptionResult");
    resultElement.textContent = "Inscription réussie!";
    resultElement.style.color = "green";
});
