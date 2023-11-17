const questions = [
    {
        question: "Quel personnage emblématique est le plombier Italien de Nintendo ? ",
        answers: ["Donkey Kong", "Luigi", "Yoshi", "Mario"],
        correctAnswer: 3, // Index de la réponse correcte (à partir de 0)
    },

    {
        question: "Quel est le nom du personnage principal dans la série de jeux « Metal Gear Solid » ?",
        answers: ["Solid Snake", "Big Boss", "Gray Fox", "Liquid Snake"],
        correctAnswer: 0, // Index de la réponse correcte (à partir de 0)
    },

    {
        question: "Dans Final Fantasy XIV, quel primordial règne sur les tempêtes et est considéré comme le gardien du cristal du vent ?",
        answers: ["Ramuh", "Ifrit", "Garuda", "Shiva"],
        correctAnswer: 2, // Index de la réponse correcte (à partir de 0)
    },

    {
        question: "Quel jeu a été développé par Hidetaka Miyazaki et est connu pour son niveau de difficulté élevé et son ambiance sombre ? ",
        answers: ["Dark Souls", "Bloodborne", "Nioh", "Sekiro: Shadows Die Twice"],
        correctAnswer: 1, // Index de la réponse correcte (à partir de 0)
    },

    {
        question: "Quelle est la toute première extension de World of Warcraft ?",
        answers: ["Mists of Pandaria", "Dragonflight", "Warlords of Draenor", "The Burning Crusade"],
        correctAnswer: 3, // Index de la réponse correcte (à partir de 0)
    },

    {
        question: "Quel jeu est souvent considéré comme le premier jeu vidéo de l’histoire ?",
        answers: ["Space Invaders", "Pong", "Tetris", "Super Mario Bros"],
        correctAnswer: 1, // Index de la réponse correcte (à partir de 0)
    },
    {
        question: "Quel jeu vidéo a popularisé le genre roguelike ?",
        answers: ["Hades", "The Binding of Isaac", "Risk of Rain", "Darkest Dungeon"],
        correctAnswer: 1, // Index de la réponse correcte (à partir de 0)
    },

    {
        question: "Dans quel jeu vidéo incarnez-vous le commandant Shepard, un protagoniste qui doit sauver la galaxie ? ",
        answers: ["Destiny", "No Man's Sky", "Mass Effect", "Star Wars: Knights of the Old Republic"],
        correctAnswer: 2, // Index de la réponse correcte (à partir de 0)
    },

    {
        question: "Quel jeu vidéo de survie populaire met en scène des joueurs luttant contre des monstres tout en collectant des ressources ?",
        answers: ["Minecraft", "Subnautica", "Stardew Valley", "Terraria"],
        correctAnswer: 3, // Index de la réponse correcte (à partir de 0)
    },

    {
        question: "Quel jeu de stratégie en temps se déroule dans un univers de fantasy où les joueurs peuvent incarner des races comme les Orcs, les Nains et les Hauts-Elfes ?",
        answers: ["Age of Mythology", "Warcraft III: Reign of Chaos", "Starcraft II", "Company of Heroes"],
        correctAnswer: 1, // Index de la réponse correcte (à partir de 0)
    },
    // Ajoutes des questions dans la même forme que précédement
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const answerDisplayElement = document.getElementById("answer-display");
const scoreElement = document.getElementById("score");

let timer; // Variable pour stocker le minuteur
let timeLeft; // Temps restant
let userAnswer = null; // Réponse sélectionnée par l'utilisateur

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.style.color = "black"; // Couleur des questions et du timer

        // Afficher l'énoncé de la question
        questionElement.textContent = currentQuestion.question;

        // Afficher les boutons de réponse
        answersElement.innerHTML = "";
        currentQuestion.answers.forEach((answer, index) => {
            const answerButton = document.createElement("button");
            answerButton.classList.add("answer-btn");
            answerButton.textContent = answer;
            answersElement.appendChild(answerButton);

            // Associer un gestionnaire d'événement au bouton de réponse
            answerButton.addEventListener("click", () => {
                if (userAnswer === index) {
                    // Désélectionner la réponse si elle est déjà sélectionnée
                    userAnswer = null;
                    answerButton.classList.remove("selected");
                } else {
                    // Désélectionner la réponse précédemment sélectionnée
                    if (userAnswer !== null) {
                        answersElement.childNodes[userAnswer].classList.remove("selected");
                    }
                    // Sélectionner la nouvelle réponse et mettre à jour son apparence
                    userAnswer = index;
                    answerButton.classList.add("selected");
                }
            });
        });

        // Afficher le timer des questions
        const timerElement = document.createElement("div");
        timerElement.id = "timer";
        questionElement.appendChild(timerElement);
        
        // Mettre à jour la durée d'une question en secondes
        timeLeft = 11;

        function updateTimer() {
            if (timeLeft > 0) {
                timeLeft--;
                timerElement.textContent = "Temps restant : " + timeLeft + " secondes";
            } else {
                // Le temps est écoulé, marquer la question comme incorrecte et passer à la question suivante
                clearTimeout(timer);
                questionElement.style.color = "red";
                questionElement.textContent = "Temps écoulé !";

                // Valider la réponse sélectionnée par l'utilisateur
                if (userAnswer !== null && userAnswer === currentQuestion.correctAnswer) {
                    correctAnswers++;
                }

                setTimeout(() => {
                    currentQuestionIndex++;
                    showQuestion();
                }, 2000); // Attendre 1 seconde avant de passer à la question suivante
            }
        }

        updateTimer();
        timer = setInterval(updateTimer, 1000);
    } else {
        // Plus de questions, afficher seulement le score sur 10
        questionElement.textContent = `Quiz terminé. Votre score : ${correctAnswers}/10`;
        answersElement.innerHTML = ""; // Effacer les boutons de réponse
        answerDisplayElement.style.display = "none";
        scoreElement.textContent = ""; // Ne pas afficher les questions correctes ou incorrectes
    }
}

showQuestion();