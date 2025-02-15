let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const buttons = document.querySelectorAll(".btn");
const newGameBtn = document.querySelector("#new-game");
const main = document.querySelector(".main");
const homebtn = document.querySelector("#new-game");
const rule = document.querySelector("#rule");

const msg = document.querySelector("#msg");
const userScoreElement = document.querySelector("#user-score");
const compScoreElement = document.querySelector("#comp-score");

// New-Game button function.
const newGame = ()=>{
    userScore = 0;
    userScoreElement.innerText = 0;
    compScore = 0;
    compScoreElement.innerText = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
}


// Home button function.
const home = () =>{
    main.setAttribute("class","home");
    homebtn.innerText = "New Game";
    homebtn.setAttribute("id","new-game");
    rule.setAttribute("class","hide");
}


// Game-Rule button function.
const gameRule = ()=>{
    homebtn.innerText = "Home";
    main.setAttribute("class","hide");
    homebtn.setAttribute("id","home");
    rule.removeAttribute("class");
}


// Calling different button function according to their type
const buttonFunction = (buttonType)=>{
    if(buttonType === "new-game"){
        newGame();
    }
    else if(buttonType === "home"){
        home();
    }
    else{
        gameRule();
    }
}

// Selecting different types of button when clicked and adding event listener.
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const buttonType = button.getAttribute("id");
        buttonFunction(buttonType);
    })
})



// Generate computer choice randomly. 
const genComputerChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randIdx = parseInt(Math.random()*3);
    return options[randIdx];
}


// Game Draw function.
const drawGame = () =>{
    msg.innerText = "Game Draw ! Play again.";
    msg.style.backgroundColor = "#081b31";
}

// selecting winner.
const showWinner = (userWin,compChoice,userChoice) =>{
    if(userWin){
        userScoreElement.innerText = ++userScore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScoreElement.innerText = ++compScore;
        msg.innerText = `You Lose ! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


// Comparing between user choice and computer choice.
const playGame = (userChoice)=>{
    const compChoice = genComputerChoice();

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

// Selecting different object Rock, Paper or Scissor.
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})