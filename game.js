
let userWinCount = 0;
let computerWinCount = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const p = document.getElementById("vs");
const message = document.getElementById("message");
const countOfUserWins = document.getElementById("userWinCount");
const countOfComputerWins = document.getElementById("computerWinCount");
const winner = document.getElementById("winner");


rock.addEventListener("click", giveRockAsUserInput);
paper.addEventListener("click", givePaperAsUserInput);
scissor.addEventListener("click", giveScissorAsUserInput);

function giveRockAsUserInput(){
    let computerChoice = getComputerChoice();
    playGame("Rock", computerChoice);
}

function givePaperAsUserInput(){
    let computerChoice = getComputerChoice();
    playGame("Paper", computerChoice);
}

function giveScissorAsUserInput(){
    let computerChoice = getComputerChoice();
    playGame("Scissor", computerChoice);
}


function playGame(userChoice, computerChoice){

    if(userWinCount == 5 || computerWinCount == 5){
        
        userWinCount = 0; 
        computerWinCount = 0;

        countOfUserWins.innerText = userWinCount;
        countOfComputerWins.innerText = computerWinCount;
        message.innerText = "Can You Beat Computer?";

    }

    let result = playRound(userChoice, computerChoice);

    if(result == true){

        userWinCount++;

        p.innerText = "You Win";
        winner.innerText = `${userChoice} beats ${computerChoice}`;
        countOfUserWins.innerText = userWinCount;
    }
    else if(result == false){

        computerWinCount++;

        p.innerText = "You Loose";
        winner.innerText = `${computerChoice} beats ${userChoice}`;
        countOfComputerWins.innerText = computerWinCount;
    }
    else{
        p.innerText = "No Winner";
        winner.innerText = `It's a Tie!`;
    }

    if(userWinCount == 5 || computerWinCount == 5){
        displayWinner(userWinCount, computerWinCount);
    }

}

function getRandomNumber(){
    return Math.floor((Math.random()*3));
}

function getComputerChoice(){
    let num = getRandomNumber();
    
    switch(num){
        case 0:
            return "Rock";

        case 1: 
            return "Paper";

        case 2: 
            return "Scissor";

        default:
            alert("Something went wrong");
    }
}

// PlayRound - Check the winner

function playRound(userChoice, computerChoice){


    if(userChoice == "Rock" && computerChoice == "Scissor"){
        return true;
    }
    else if(userChoice == "Paper" && computerChoice == "Rock"){
        return true;
    }
    else if(userChoice == "Scissor" && computerChoice == "Paper"){
        return true;
    }else if(userChoice == computerChoice){
        return "Tie";
    }

    return false;
}

function displayWinner(userWinCount, computerWinCount){

    if(userWinCount > computerWinCount){
        message.innerText = "Lets Celebrate! You are the Winner of this Game.";
    }
    else if(userWinCount < computerWinCount){
        message.innerText = "Computer Wins this Game. Try Again!";
    }
    else{
        message.innerText = "It's a Tie! Better luck next time:)";
    }
    
}

   





