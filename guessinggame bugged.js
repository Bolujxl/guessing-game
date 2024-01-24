let maxNum = parseInt(prompt("Enter Max Number"))
while (!maxNum) {
  maxNum = parseInt(prompt("Enter Valid Number"))
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;
console.log(targetNum)

//guessing target number

let guess = parseInt(prompt("Enter your first guess"))

let attempts = 1;

// while (!guess) {
//   guess = parseInt(prompt("Enter a foggin number"))
// }

// while(parseInt(guess) !== targetNum) {
  
//   if  (guess === 'q') break;
  
//   attempts++

  

//   if (guess > targetNum) {
//     guess = prompt("Too high! Enter a new guess:")
//   }
//   else {
//     guess = prompt("Too Low! Enter a new guess")
//   }
 
// }

while (true) { // Changed to an infinite loop for repeated prompting
  if (isNaN(guess)) {
    guess = prompt("Invalid input. Please enter a number (or 'q' to quit):");
  } else if (guess === 'quit')  {
    break; // Exit the loop if 'q' is entered
  } else if (guess !== targetNum) {
    attempts++;
    if (guess > targetNum) {
      guess = prompt("Too high! Enter a new guess:");
    } else {
      guess = prompt("Too Low! Enter a new guess:");
    }
  } else {
    break; // Exit the loop if the guess is correct
  }

  
}

// if( guess === 'q'){
//   console.log("YOU QUIT DAWG")
// } else {

// console.log(`Nice one twat. You guessed: ${guess}. You guessed ${attempts} time(s) though ssksks;`) }
