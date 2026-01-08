let UserScore = 0;
let ComputerScore = 0;

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

  if (UserChoice=== computerChoice) {
    Draw();
  } 
  else {
   let Userwin = true; // by default user are winner 

   if(UserChoice === "rock"){

   // rock vs paper or scissors

      if(computerChoice == "paper")
      {
         Userwin = false;
      }
      else{
         Userwin = true
      }
   }
   else{
      if(UserChoice == "paper")
      {
         // paper vs rock or scissors

        if(computerChoice == "rock" )
        {
         userwin = true;
        }
        else{
         userwin = false;
        }
      }
   }
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
};
