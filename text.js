let userScore = 0;
let compScore = 0;

const userscore = document.querySelector("#userscore");
const compscore = document.querySelector("#compscore");


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const gencompchoice = () => {
    const options = ["rock", "paper" , "scissors"];
    const randomindex = Math.floor(Math.random() *3);
    return options[randomindex];
    
};

const drawgame = () => {
    console.log("game was draw");
    msg.innerText = "It's a draw. Play Again.";
    msg.style.backgroundColor = "#2D3047";
       msg.style.color = " #B8C5D6";
}

const showWinner = (userwin , userChoice , compchoice) => {
    if(userwin){
        console.log("user won");
        userScore++;
        userscore.innerText = userScore;
        msg.innerText = `Your choice -  ${userChoice}.  Computer's choice - ${compchoice}.  You won!`;
        msg.style.backgroundColor = "#408632";
        msg.style.color = " #B8C5D6";   
    } else {
        console.log("computer won");
        compScore++;
        compscore.innerText = compScore;
         msg.innerText = `Your choice -  ${userChoice}.  Computer's choice - ${compchoice}.  You lost!`;
          msg.style.backgroundColor = "#6B0504";
          msg.style.color = " #B8C5D6";
    }
}

const playGame= (userChoice) => {
console.log("userchoice =", userChoice);
const compchoice = gencompchoice();
console.log("compchoice = " ,compchoice);

if(userChoice === compchoice){
    //drawgame
    drawgame();
} 
else {
    let userwin = true;

    if(userChoice === "rock"){
        userwin = compchoice === "paper" ? false : true;
    }
    else if (userChoice==="paper")
         {
         userwin = compchoice === "scissors" ? false : true;
 }
 else
    {
     userwin = compchoice === "rock" ? false : true;
 }
 showWinner(userwin,userChoice,compchoice);
}

};
 
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);  
    });
    
});