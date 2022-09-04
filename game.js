
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

// Get the User Choice

function getUserChoice(){
    let input = prompt("Enter your choice: ")
    let ans = input.toLowerCase();
    ans = ans.charAt(0).toUpperCase() + ans.slice(1);
    return ans;
}

// Check user Input

function checkUserChoice(userChoice){
    switch(userChoice){
        case "Rock": 
            return true;
        case "Paper": 
            return true;
        case "Scissor":
            return true;
        default:
            alert("Input is wrong!");
            return false;
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

// game - to play 5 rounds

function game(){
    let round = 0;
    let user = 0;
    let computer = 0;
    while(round<5){
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();

        let check = checkUserChoice(userChoice);

        if(check){
            let result = playRound(userChoice,computerChoice);

                if(result == true){
                    alert(`Yor Win! ${userChoice} beats ${computerChoice}`);
                    user++;
                }
                else if(result = false){
                    alert(`Yor Loose! ${computerChoice} beats ${userChoice}`)
                    computer++;
                }
                else{
                    alert("It's a Tie!");
                }

            round++;
         }else{
            alert("Please select correct choice");
        }

        alert(`Total Round = ${round}`);
        alert(`Your Wins = ${user} & Computer Wins = ${computer}`);
    }

    displayWinner(user, computer);


}

// Display the Winner

function displayWinner(user, computer){

    if(user > computer){
        alert("Lets Celebrate! Your are the Winner of this Game.");
    }
    else if(user < computer){
        alert("Computer is the Winner of this Game. Try Again!");
    }
    else{
        alert("It's a Tie! Better luck next time:)");
    }
    
}

