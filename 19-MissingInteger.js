/*

Write a function:

function solution(A);

that, given a non-empty zero-indexed array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A.

For example, given:

  A[0] = 1
  A[1] = 3
  A[2] = 6
  A[3] = 4
  A[4] = 1
  A[5] = 2
the function should return 5.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

*/

const solution = (A) => {
  const arr = [];
  const obj = {};
  let compare = 0;

  for (let i = 0; i < A.length; i += 1) {
    if (A[i] > 0) {
      arr.push(A[i]);
    }
  }

  if (arr.length === 0) {
    return 1;
  }

  for (let i = 0; i < arr.length; i += 1) {
    obj[arr[i]] = arr[i];
  }

  for (let key in obj) {
    if (compare + 1 === obj[key]) {
      compare = obj[key];
    } else {
      return compare + 1;
    }
  }
  return compare + 1;
};

console.log(1, solution([6,3,1,2,3,4,5,6,7,5,3,2,4,5,7,8,-1,-3,5])); // => 9
console.log(2, solution([0]));  // => 1
console.log(3, solution([-123124,1,5])); // => 2
console.log(4, solution([-1, -23]));  // => 1
