function verifyLetter() {
  const DNInumber = parseInt(document.getElementById("number").value);
  const letter = document.getElementById("letter").value;
  //const numberArray = [DNInumber];
  if (DNInumber > 99999999 || DNInumber < 0) {
    alert("Revisa lo que has escrito, algo está mal.");
    return;
  }
  const letterEquivalence = {
    0: "T",
    1: "R",
    2: "W",
    3: "A",
    4: "G",
    5: "M",
    6: "Y",
    7: "F",
    8: "P",
    9: "D",
    10: "X",
    11: "B",
    12: "N",
    13: "J",
    14: "Z",
    15: "S",
    16: "Q",
    17: "V",
    18: "H",
    19: "L",
    20: "C",
    21: "K",
    22: "E",
  };
  const countDNI = DNInumber % 23;
  console.log(countDNI);
  const calculateLetter = letterEquivalence[countDNI];
  console.log(calculateLetter);
  const answerHTML = document.getElementById("answer");
  const correctAnswer = `Exacto!! La letra de tu DNI es ${letter}`;
  const wrongAnswer = `Erroooooor!! La letra de tu DNI es ${calculateLetter}`;

  if (calculateLetter === letter) {
    answerHTML.innerHTML = correctAnswer;
  }
  if (calculateLetter !== letter) {
    answerHTML.innerHTML = wrongAnswer;
  }
}
