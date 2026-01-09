let UserScore = 0;
let ComputerScore = 0;
let msgPara = document.querySelector("#msg");

let Choices = document.querySelectorAll(".choice");

Choices.forEach((choice) => {
  // console.log(choice);
  const UserChoice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    //console.log("choice are clicked and its ID is :",UserChoice);
    playGame(UserChoice);
  });
});

const playGame = (UserChoice) => {
  console.log("User choice is : ", UserChoice);

  const computerChoice = generateComputerChoice();

  // check for draw

  if (UserChoice === computerChoice) {
    Draw();
  } 
  else {
   let Userwin = true; // by default user are winner 

   if(UserChoice === "rock"){

   // rock vs paper or scissors

      if(computerChoice == "paper")
      {
         Userwin = false;
         console.log("computer wins")
      }
      else{
         Userwin = true
         console.log("player wins")
      }
   }
   else{
      if(UserChoice == "paper")
      {
         // paper vs rock or scissors

        if(computerChoice == "rock" )
        {
         Userwin = true;
         console.log("player wins")
        }
        else{
         Userwin = false;
         console.log("computer winner")
        }
      }
      else {
         if(UserChoice == "scissors")
         {
            // scissors vs rock or paper 
            if(computerChoice == "rock")
            {
               Userwin = false;
               console.log("computer winner ")
            }
            else {
               Userwin = true;
               console.log("player wins")
            }
         }

      }

   }
      showWinningMsg( Userwin, UserChoice , computerChoice ); // calling function here
   
  }

};

const generateComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];

  let randomIndex = Math.floor(Math.random() * 3);
  console.log("computer choice is : ", options[randomIndex]);
  return options[randomIndex];
};

const Draw = () => {
  console.log("Match was draw");
      msgPara.innerText = "Match was draw";
      msgPara.style.backgroundColor = "yellow";
      msgPara.style.color = "black";

};


const showWinningMsg = (Userwin,UserChoice,computerChoice) =>{
   if(Userwin)
   {
      console.log("You win!");
      msgPara.innerText = `You win! your ${UserChoice} beat ${computerChoice} `;
      msgPara.style.backgroundColor = "green";
      msgPara.style.color = "white";


   }
   else
   {
      console.log("You lose!");
      msgPara.innerText = "You lose!";
            msgPara.innerText = `You lose! ${computerChoice} beat your ${UserChoice} `;

      msgPara.style.backgroundColor = "red";
      msgPara.style.color = "white";



   }
}