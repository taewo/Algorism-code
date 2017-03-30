/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

const rockPaperScissors = function rockPaperScissors(n) {
  const result = [];
//add rock, scissors, papers
  const possible = ['rock', 'scissors', 'papers'];
//push into subresults for 3^n times, each times with n number of elements
  for (let i = 0; i < Math.pow(3, n); i += 1) {
    let subresults = [];
    for (let j = n - 1; j >= 0; j -= 1) {
      //With n number of elements, push into subresult for j with certain index value
      if (j === 0) {
        subresults.push(possible[i % 3]);
      } else {
        subresults.push(possible[Math.floor(i / Math.pow(3, j) % 3)]);
      }
    }
    result.push(subresults);
  }
  return result;
};

console.log(rockPaperScissors(3))