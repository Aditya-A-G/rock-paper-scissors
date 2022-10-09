
let userWinCount = 0;
let computerWinCount = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const p = document.getElementById("vs");
console.log(p);
const message = document.getElementById("message");
const setUserWinCount = document.getElementById("userWinCount");
const setComputerWinCount = document.getElementById("computerWinCount");
const winner = document.getElementById("winner");
console.log(winner);

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
        setUserWinCount.innerText = userWinCount;
        setComputerWinCount.innerText = computerWinCount;
        message.innerText = "Can You Beat Computer?";
        console.log("it reaches")
        console.log(p);
        p.textContent = "vs";
        winner.textContent = "Let's Play";
    }

    let result = playRound(userChoice, computerChoice);

    if(result == true){
        p.innerText = "You Win";
        winner.innerText = `${userChoice} beats ${computerChoice}`;
        userWinCount++;
        setUserWinCount.innerText = userWinCount;
    }
    else if(result == false){
        p.innerText = "You Loose";
        winner.innerText = `${computerChoice} beats ${userChoice}`;
        computerWinCount++;
        setComputerWinCount.innerText = computerWinCount;
    }
    else{
        p.innerText = "No Winner";
        winner.innerText = `It's a Tie!`;
    }

    if(userWinCount == 5 || computerWinCount == 5){
        displayWinner(userWinCount, computerWinCount);

    }

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
        return "Tie";
    }

    return false;
}

// Display the Winner

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

   





