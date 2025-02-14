let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScoreElement = document.querySelector("#user-score");
const compScoreElement = document.querySelector("#comp-score");

const genComputerChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randIdx = parseInt(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game Draw");
    msg.innerText = "Game Draw ! Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,compChoice,userChoice) =>{
    if(userWin){
        userScoreElement.innerText = ++userScore;
        console.log("You win !");
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScoreElement.innerText = ++compScore;
        console.log("computer win !");
        msg.innerText = `You Lose ! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice)=>{
    console.log(userChoice);
    const compChoice = genComputerChoice();
    console.log(compChoice);

    if(userChoice === compChoice){
        // Game Draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            // computer choice parer , scissor
            userWin = compChoice === "paper" ? false : true;
        }
         else if(userChoice === "paper"){
            // rock , scissor
            userWin = compChoice === "rock" ? true : false;
        }
         else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,compChoice,userChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})