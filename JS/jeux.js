function checkIsGoodAnwser(goodAnswer) {
  const inputA = document.getElementById("reponseA");
  const inputB = document.getElementById("reponseB");
  const inputC = document.getElementById("reponseC");
  const inputD = document.getElementById("reponseD");

  let isGoodAnswer = false;

  if (
    (goodAnswer == "reponseA" && inputA.checked) ||
    (goodAnswer == "reponseB" && inputB.checked) ||
    (goodAnswer == "reponseC" && inputC.checked) ||
    (goodAnswer == "reponseD" && inputD.checked)
  ) {
    isGoodAnswer = true;
  }

  inputA.checked = false;
  inputB.checked = false;
  inputC.checked = false;
  inputD.checked = false;

  return isGoodAnswer;
}

// *******Liste des questions*********
const infos = [
  {
    question: "Quel jeu vidéo a popularisé le genre roguelike ?",
    reponseA: "The Binding of Issac",
    reponseB: "Hades",
    reponseC: "Risk of Rain",
    reponseD: "Darkest Dungeon",
    bonnereponse: "reponseA",
  },
  {
    question: "Quelle est la toute première extension de World of Warcraft ?",
    reponseA: "Mists of Pandaria",
    reponseB: "The Burning Crusade",
    reponseC: "Dragonflight",
    reponseD: "Shadowlands",
    bonnereponse: "reponseB",
  },
  {
    question: "Dans Final Fantasy XIV, quel primordial règne sur les tempêtes et est considéré comme le gardien du cristal du vent ?",
    reponseA: "Ifrit",
    reponseB: "Shiva",
    reponseC: "Ramuh",
    reponseD: "Garuda",
    bonnereponse: "reponseD",
  },
];

// *******Compteur question*********
let c = 1;

const compteur = document.getElementById("compteur");
const formulaire = document.getElementById("formulaire");
let score = 0;

// ********Forçage premiere question*************

document.getElementById("question").textContent = infos[0].question;
document.getElementById("labelA").textContent = infos[0].reponseA;
document.getElementById("labelB").textContent = infos[0].reponseB;
document.getElementById("labelC").textContent = infos[0].reponseC;
document.getElementById("labelD").textContent = infos[0].reponseD;

//********/ Evenements *********

formulaire.addEventListener("submit", function (e) {
  e.preventDefault();
  const bonnereponse = infos[c - 1].bonnereponse;
  const success = checkIsGoodAnwser(bonnereponse);
  if (success) {
    score = score + 1;
  }
  if (c > 2) {
    document.getElementById("principal").classList.add("invisible");
    document.getElementById("score").classList.add("visible");
    document.getElementById("monscore").textContent = score;

  } else {
    document.getElementById("question").textContent = infos[c].question;
    document.getElementById("labelA").textContent = infos[c].reponseA;
    document.getElementById("labelB").textContent = infos[c].reponseB;
    document.getElementById("labelC").textContent = infos[c].reponseC;
    document.getElementById("labelD").textContent = infos[c].reponseD;
    c = c + 1;
    compteur.textContent = c;
  }
});
