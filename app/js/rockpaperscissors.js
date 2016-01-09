// Rock Paper Scissors Homework

function getInput() {
   console.log("Please choose either 'rock', 'paper', or 'scissors'.")
   var answer = prompt();
   return answer;
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || randomPlay();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
    if (playerMove=='rock'&&computerMove=='scissors'
    ||playerMove=='scissors'&&computerMove=='paper'
    ||playerMove=='paper'&&computerMove=='rock') {
        return 'player';
    } else if (playerMove=='rock'&&computerMove=='paper'
    ||playerMove=='paper'&&computerMove=='scissors'
    ||playerMove=='scissors'&&computerMove=='rock') {
        return 'computer';
    } return 'tie';
}

function playTo(max) {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  
  while (playerWins < max && computerWins < max){
      var playerMove = getPlayerMove();
      var computerMove = getComputerMove();
      if (getWinner(playerMove,computerMove)=='player') {
          playerWins++;
          console.log ('Player played ' + playerMove + ' and Computer played ' + computerMove);
          console.log ('Player wins this round.');
          console.log ('The Score is currently ' + playerWins + ' to ' + computerWins)
      } else if (getWinner(playerMove,computerMove)=='computer') {
          computerWins++;
          console.log ('Player played ' + playerMove + ' and Computer played ' + computerMove);
          console.log ('Computer wins this round.');
          console.log ('The Score is currently ' + playerWins + ' to ' + computerWins)
      } else {
          console.log ('Player played ' + playerMove + ' and Computer played ' + computerMove);
          console.log ('It is a tie.');
          console.log ('The Score is currently ' + playerWins + ' to ' + computerWins)
      }
  }
  
  return [playerWins, computerWins];
}

playTo(3)