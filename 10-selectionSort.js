const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};

console.log(selectionSort([9, 2, 3, 7, 3, 2, 8, 3]));
// [ 2, 2, 3, 3, 3, 7, 8, 9 ]
