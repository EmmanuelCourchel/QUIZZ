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
    question: "Quelle est la couleur du cheval blanc d'Henri IV ?",
    reponseA: "Noir",
    reponseB: "Bleu",
    reponseC: "Blanc",
    reponseD: "Gris",
    bonnereponse: "reponseC",
  },
  {
    question: "Quel est le meilleur formateur de la NURSERIE ?",
    reponseA: "Wahim",
    reponseB: "Yéli",
    reponseC: "Raphael",
    reponseD: "Peter",
    bonnereponse: "reponseD",
  },
  {
    question: "Comment appelle-t-on le fruit du chêne ?",
    reponseA: "La noix",
    reponseB: "La châtaigne",
    reponseC: "Le gland",
    reponseD: "Le marron",
    bonnereponse: "reponseC",
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

console.log(c);