/*

Conceptually, a merge sort works as follows:

Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.

*/


const mergeSort = array => {
  let result = [];
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  const merge = (leftSide, rightSide) => {
    while (leftSide.length && rightSide.length) {
      if (leftSide[0] >= rightSide[0]) {
        result.push(rightSide.shift());
      } else {
        result.push(leftSide.shift());
      }
    }
    while (leftSide.length || rightSide.length) {
      if (leftSide.length) {
        result.push(leftSide.shift());
      } else {
        result.push(rightSide.shift());
      }
    }
    return result;
  };
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([8, 3, 6, 9, 3, 1, 4, 6, 9]));
// [ 1, 3, 3, 4, 6, 6, 8, 9, 9 ]
