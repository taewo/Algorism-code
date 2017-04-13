/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
  var data = array.sort(function(a,b){return a-b});
  var result1 = data[0] * data[1] * data[data.length-1];
  var result2 = data[data.length-3] * data[data.length-2] * data[data.length-1]

  return Math.max(result1, result2);
};

console.log(largestProductOfThree([2,3,4,5,-1,-4]))