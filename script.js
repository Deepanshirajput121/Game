let userScore = 0;                                             
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    msg.innerText = "Game Was Draw. Play Again!";
    msg.style.backgroundColor="#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    } else {
     compScore++;
     compScorePara.innerText = compScore;
        // (`)ye sign left side me top pr hai
        msg.innerText = `you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame = (userChoice) => {
    // generate computer choice -> modular;
    // its mean we are cerate the one particular work doing a one particular function
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});