// //Q1 create two constants, add them assign to a new constants

// const a = 10
// const b = '10'
// const c =a + b
// console.log(c) 


// //Check below code, output should be false by comparing. console.log the answer
// const a = 10
// const b = '10'

// console.log(a===b)




// generate a random number between 0 and 5, if it is lesser than 3,
//console.log "lesser than 3" else "Greater"

// Generate a random number between 0 and 5
const randomNumber = Math.floor(Math.random() * 6); // Random number between 0 (inclusive) and 6 (exclusive)

// Check if the random number is less than 3
if (randomNumber < 3) {
    console.log("lesser than 3");
} else {
    console.log("Greater");
}
