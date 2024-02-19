let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper, scissor  
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissor  
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock paper 
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

const genCompChoice = (userChoice) => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        document.getElementById("user-score").innerText=userScore;
        msgPara.innerText =  `You win! Your ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor =  "green";
    } else{
        compScore++;
        document.getElementById("comp-score").innerText=compScore;
        msgPara.innerText =  `You lost. ${compChoice} beats your ${userChoice}`;
        msgPara.style.backgroundColor =  "red";
    }
}