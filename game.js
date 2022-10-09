
let userWinCount = 0;
let computerWinCount = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

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
    let result = playRound(userChoice, computerChoice);
    
}


// Generate a Random Number
function getRandomNumber(){
    return Math.floor((Math.random()*3));
}

// Get the Computer Choice

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
        return "";
    }

    return false;
}

// Display the Winner

function displayWinner(userWinCount, computerWinCount){

    if(userWinCount > computerWinCount){
        alert("Lets Celebrate! You are the Winner of this Game.");
    }
    else if(userWinCount < computerWinCount){
        alert("Computer is the Winner of this Game. Try Again!");
    }
    else{
        alert("It's a Tie! Better luck next time:)");
    }
    
}

   





