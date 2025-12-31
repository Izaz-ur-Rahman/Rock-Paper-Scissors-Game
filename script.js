let UserScore = 0;
let ComputerScore = 0;

let Choices = document.querySelectorAll(".choice");

Choices.forEach((choice)=>{
   // console.log(choice);
   const UserChoice = choice.getAttribute("id");
   choice.addEventListener("click",() => {
    //console.log("choice are clicked and its ID is :",UserChoice);
    playGame(UserChoice);
   })
})


const playGame = (choice) => {
console.log("User choice is : ", choice);
}
