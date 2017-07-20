
const quickSort = (arr) => {
  const length = arr.length;
  if (length === 0) {
    return [];
  }

  const left = [];
  const right = [];
  const pivot = arr[0];

  for (let i = 1; i < length; i += 1) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

console.log(quickSort([4,3,2,1,9,8,7,6]));
// [ 1, 2, 3, 4, 6, 7, 8, 9 ]
