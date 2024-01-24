let maxNum = parseInt(prompt("Enter Max Number"))
while (!maxNum) {
  maxNum = parseInt(prompt("Enter Valid Number"))
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;
console.log(targetNum)

//guessing target number

// let guess = parseInt(prompt("Enter your first guess"))

let guess = prompt("Enter your first guess or enter 'q' to quit")


let attempts = 1;

// while (!guess) {
//   guess = parseInt(prompt("Enter a foggin number"))
// }

while(parseInt(guess) !== targetNum) {
  
  if  (guess === 'q') break;
  guess = parseInt(guess)
  

  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess:")
    attempts++
  }

  else if(guess < targetNum) {
    guess = prompt("Too Low! Enter a new guess")
    attempts++
  }

  else {
    guess = prompt("Invalid number. Please enter a number or 'q' to quit")
  }
   

  

  
 
}


if( guess === 'q'){
  console.log("YOU QUIT DAWG")
}
 else {
  console.log( `Congrats`)
console.log(`Nice one twat. You guessed: ${guess}. You guessed ${attempts} time(s) though ssksks;`) }


