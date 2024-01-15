// Function to get the user's choice, ensuring it is a valid option
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Error");
    }
  };
  

// Function to get a random computer choice
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
    switch (randomNumber) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
    }
  };

// Function to determine the winner based on user and computer choices
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "bomb") {
      return "Congratulations, you won!";
    }
    if (userChoice === computerChoice) {
      return "The game was a tie";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
  };
  //console.log(determineWinner("paper", "scissors"));
  //console.log(determineWinner("paper", "paper"));

// Function to play the game, making use of the above functions
  function playGame() {
    let userChoice = getUserChoice("paper");
    let computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw:" + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
