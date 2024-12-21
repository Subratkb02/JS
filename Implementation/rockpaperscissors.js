const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Please choose a valid option: rock, paper, or scissors.');
    }
  };
  
  const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'User Won (Cheat Code Activated)';
    }
  
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
  
    if (userChoice === 'rock') {
      return computerChoice === 'paper' ? 'Computer Won' : 'User Won';
    }
  
    if (userChoice === 'paper') {
      return computerChoice === 'scissors' ? 'Computer Won' : 'User Won';
    }
  
    if (userChoice === 'scissors') {
      return computerChoice === 'rock' ? 'Computer Won' : 'User Won';
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('rock'); 
    if (!userChoice) {
      return;
    }
    const computerChoice = getComputerChoice();
    console.log(`User Choice: ${userChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  