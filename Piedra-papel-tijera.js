// Creo dos funciones una computadora y otra usario
// Ahora tengo que hacer que la computadora me genere un numero aletorio
// Ese numero aletorio tiene que ser en tre 1 y 3
// Si la computadora me da un numero aletorio 1 sera piedra
// y si me dame 2 sera papel y si me da 3 tijera
// ahora mi ronda le dire al usario que quiere piedra,papel o tijera atraves de un prompt
//  y luego comparen si piedra es igual al numero aletorio que me dio la computadora
// si es asi dire piedra a ganado la computadora
// si lo piedra y piedra son iguales entoce es un empate

// function getComputerChoice(num) {
//   num = Math.floor(Math.random() * 3) + 1;
//   if (num == 1) {
//     return (num = "Piedra");
//   } else if (num == 2) {
//     return (num = "Papel");
//   } else {
//     return (num = "Tijera");
//   }
// }
// alert(getComputerChoice());

// function TuRonda(Turno) {
//   Turno = prompt("Elige Piedra, Papel o Tijera");
//   if (Turno === null) {
//     alert("NO VAS A SEGUIR JUGANDO");
//   }
//    Turno = Turno.toLowerCase();
//   if (parseInt(Turno)) {
//     return console.log("deja de ser payaso");
//   } else if (Turno === "piedra") {
//     return (Turno = "Piedra");
//   } else if (Turno === "papel") {
//     return (Turno = "Papel");
//   } else if (Turno === "tijera") {
//     return (Turno = "Tijera");
//   } else {
//     console.log("lo siento no es Piedra, Papel, o Tijera");
//   }
// }
// // AHORA VAMOS A COMPARAR VALORES IF LA COMPUTADORA == Piedra y Turno es igual a Papel Gana Papel
// // de lo contrario si la computadora es Piedra y turno es Piedra Repetir de nuevo
// // si la computadora es Piedra y turno es tijera gana Piedra
// // ahora si la computadora es Papel y tu turno es Piedra  GAna la computadora
// // si la computadora es Papel y el turno es igual a papel se repite la jugada
// // si la computadora es Papel y el turno es igual a tijera entoce gana tijera
// // ahora  si Tijera es computadora y turno es Piedra  gana piedra
// // si la computadora es tijera y turno es papel gana tijera
// //  di ls computadora es igual a tijera y turno es igual a tijera entoce se repite

// function unaronda(playerSelection, computerSelection) {
//  if (getComputerChoice() == "Piedra" && TuRonda() == "Papel") {
//     return alert(`el Ganador eres Tu "Papel"`)
//  }
//  else if(getComputerChoice() == "Piedra" && TuRonda() == "Piedra"){
//     return getComputerChoice();
//  }
//  else if(getComputerChoice() == "Piedra" && TuRonda() == "Tijera") {
//     return alert(`El Ganador es la computadora " :) " `)
//  }
//  else if(getComputerChoice() == "Papel" && TuRonda() == "Papel"){
//     return getComputerChoice()
//  }
//  else if(getComputerChoice() == "Papel" && TuRonda() == "Tijera") {
//     return alert(`El Ganador eres Tu  ""`)
//  }
//  else if(getComputerChoice() == "Papel" && TuRonda() == "Piedra") {
//     return alert(`El ganador es la computadora`)
//  }
//  else if(getComputerChoice() == "Tijera" && TuRonda() == "Papel") {
//     return alert(`El ganador es la computadora`)
//  }
// }
// console.log(unaronda())

// function getComputerChoice() {
//   const choices = ["rock", "paper", "scissors"];
//   return choices[Math.floor(Math.random() * 3)];
// }

// function playRound(playerSelection, computerSelection) {
//   const results = {
//     rock: { beats: "scissors" },
//     paper: { beats: "rock" },
//     scissors: { beats: "paper" },
//   };

//   if (playerSelection === computerSelection) {
//     return "Tie!";
//   } else if (results[playerSelection].beats === computerSelection) {
//     return "You win!";
//   } else {
//     return "You lose!";
//   }
// }

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     const computerSelection = getComputerChoice();
//      alert(computerSelection)
//     const playerSelection = prompt("Choose rock, paper, or scissors: ");

//     const result = playRound(playerSelection, computerSelection);

//     if (result === "You win!") {
//       playerScore++;
//     } else if (result === "You lose!") {
//       computerScore++;
//     }
//   }

//   if (playerScore > computerScore) {
//     return "You won the game!";
//   } else if (playerScore < computerScore) {
//     return "You lost the game!";
//   } else {
//     return "The game was a tie!";
//   }
// }

// const result = game();
// console.log(result);

// function getComputerChoice() {
//   let num = Math.floor(Math.random() * 3) + 1;
//   if (num === 1) {
//     return "Piedra";
//   } else if (num === 2) {
//     return "Papel";
//   } else {
//     return "Tijera";
//   }
// }
// alert(getComputerChoice())

// function TuRonda() {
//   let Turno = prompt("Elige Piedra, Papel o Tijera");
//   if (Turno === null) {
//     alert("NO VAS A SEGUIR JUGANDO");
//   }
//   Turno = Turno.toLowerCase();
//   console.log(Turno)
//   if (!isNaN(Turno)) {
//     return console.log("deja de ser payaso");
//   } else if (Turno === "piedra" || Turno === "papel" || Turno === "tijera") {
//     return Turno;
//   } else {
//     console.log("lo siento no es Piedra, Papel, o Tijera");
//   }
// }

// function playRound() {
//   let playerSelection = TuRonda();
//   let computerSelection = getComputerChoice();

//   if (playerSelection) {
//     if (playerSelection === computerSelection) {
//       console.log("Empate!");
//     } else if (
//       (playerSelection === "piedra" && computerSelection === "Tijera") ||
//       (playerSelection === "tijera" && computerSelection === "Papel") ||
//       (playerSelection === "papel" && computerSelection === "Piedra")
//     ) {
//       console.log("¡Ganas!");
//     } else {
//       console.log("¡Pierdes!");
//     }
//   }
// }

// playRound();

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const TIE = 0;
const PLAYER_WIN = 1;
const PLAYER_LOST = 2;

const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scissorsBtn = document.getElementById("Scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("Machine-img");

rockBtn.addEventListener("click", () => {
  play(ROCK);
});

paperBtn.addEventListener("click", () => {
  play(PAPER);
});

scissorsBtn.addEventListener("click", () => {
  play(SCISSORS);
});

function play(userOption) {
  const machineOption = calcMachile();
  const result = determineResult(userOption, machineOption);
  userImg.src = "./img/"+ userOption + ".png";
  machineImg.src = "./img/"+ machineOption + ".png";
  switch (result) {
    case TIE:
      resultText.innerHTML = "You have tied";
      break;
    case PLAYER_LOST:
      resultText.innerHTML = "You win";
      break;
    case PLAYER_WIN:
      resultText.innerHTML = "You lost";
      break;
  }
}

function calcMachile() {
  const number = Math.floor(Math.random() * 3);

  switch (number) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
}
function determineResult(userOption, machineOption) {
  if (userOption === machineOption) {
    return TIE;
  } else if (userOption === ROCK) {
    if (machineOption === PAPER) return PLAYER_LOST;
    if (machineOption === SCISSORS) return PLAYER_WIN;
  } else if (userOption === PAPER) {
    if (machineOption === SCISSORS) return PLAYER_LOST;
    if (machineOption === ROCK) return PLAYER_WIN;
  } else if (userOption === SCISSORS) {
    if (machineOption === ROCK) return PLAYER_LOST;
    if (machineOption === PAPER) return PLAYER_WIN;
  }
}

