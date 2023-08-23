// Aqui llamos a las etiquetas y propiedades de html

const bottoms = document.querySelectorAll("button");
let resultDiv = document.getElementById("result");
let scoreDiv = document.getElementById("score");
const again = document.getElementById("again");
let countdownDiv = document.getElementById("countdown");
const h1 = document.querySelector("h1");
// Aqui inicializamos el conteo de cada jugador
let playerScore = 0;
let computerScore = 0;

// Aqui hacemos una cadena sicustancia o lenta 
 const text = "Rock Paper Scissors"
 let index = 0;

 function mostrarText() {
  h1.textContent += text[index]
  index++;

  if(index < text.length){
    setTimeout(mostrarText, 40)
  }
 }
 mostrarText()

// Aqui tomamos todo los botones de html y lo recorremos y hacemos un evento que cuando haga click se ejecutara una funcion
// para tomar el id o la clase de los botones y llamar a otra funcion por parametro o mostralo
bottoms.forEach(button => {
  button.addEventListener("click", function () {
    if (playerScore < 5 && computerScore < 5) {
      let playerSelection = this.id.toLowerCase();
      playRound(playerSelection);
    }
  });
});




// Aqui la funcion llamada es la condicion de el juego 
function playRound(playerSelection) {
  const choices = ["piedra", "papel", "tijeras"];
  // primero hace que la computadora atraves de un numero ramdom seleciones 0,1,2
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
// Que serian piedra, papel, tijera y se lo mostramo al jugador
  let resultMessage = `<b>El jugador seleccionó:</b> ${playerSelection}<br> <b>Computadora seleccionó:</b> ${computerSelection} <br>`;
// Ahora creamos una condicion del juego con if else if  con lo que selecionen los jugadores y la computadora
// y hacemos validaciones hasta que sea una true o false
  if (playerSelection === computerSelection) {
    resultMessage = "Empate";
  } else if (
    (playerSelection === "piedra" && computerSelection === "tijeras") ||
    (playerSelection === "papel" && computerSelection === "piedra") ||
    (playerSelection === "tijeras" && computerSelection === "papel")
  ) {
// y ya cuando termine de la codicion tendra un valor que dependiendo si es true o false
// se le incremetaran los puntos al jugador o computadora y se mostrara quien gano
    playerScore++;
    resultMessage = " Ganaste esta ronda";
  } else {
    resultMessage += " gano la computadora";
    computerScore++;
  }
  // aqui mostramos la felicitaciones de quien gano la ronda atraves de una etiqueta html llamada
  resultDiv.innerHTML = resultMessage;
// y esta no permite mostrar los puntos de cada jugado de cada ronda atraves de una etiqueta  html o div
  scoreDiv.textContent = ` Player: ${playerScore}, Computer: ${computerScore}`;
  // ahora hacemos una validacion o codicion para determinar que cuando un jugador tenga 5 puntos gana el juego 
  // y llamamos a una function para mostrale al usario quien gano y detener el juego 
  if (playerScore >= 5) {
    announceWinner("player");
  } else if (computerScore >= 5) {
    announceWinner("Computer");
  }
}
// aqui tenemos la funcion del ganador con todas su validaciones cuando se llame ejecutara todo su cuerpo 
function announceWinner(winner) {
  // Aqui le anuncia al ganador atraves de el parametro quien gano 
  // Y tambien desativar lo botones para quien gano para no continuar jugado  
  resultDiv.textContent = `${winner}: gano este juego`;
  bottoms.forEach(button => (button.disabled = true));
  // ya que el juego no tiene un sitio o un lugar o bottom que le permitar repeditr el juego 
  // aqui tenemos una variable segundo en 4s que se le mostrara al usario cuando se va  reiniciar el juego 
    let segundo = 4;
    countdownDiv.textContent = `Se reiniciara en ${segundo} segundos`;
  //  ahora hacemos la codicion para que eso funciones atraves de un setInterval deminuento sus segundoy mostrandoselo al jugador  
    const diminirsegun = setInterval( () =>{
      segundo--;
      countdownDiv.textContent = `Se reiniciara en ${segundo} segundos`;

  //  Si lo segundo llegan a 0 entoce se hace una codicion que dice se limpiar el clearInterval o se para de deminiur los segundo
  // y se llamara una funcion que reset el juego y se limpiara los resultado de la otra ronda o jugado del jugador
    
      if(segundo === 0){
        clearInterval(diminirsegun);
        resetGame();
        resultDiv.textContent = "";
        countdownDiv.textContent = "";
      }
    },1000)

}
// Y aqui tenemos la funcion que reset el juego para los contadores todo lo reicia y activa los botones muestra los mismo resultado pero en cero
// reinica todo lo que el usario o la computadora por ronda habian jugado  
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  index = 0;
  h1.textContent = "";
  mostrarText()
  scoreDiv.textContent = "Player: 0, Computer: 0";
  bottoms.forEach(button => (button.disabled = false));
}