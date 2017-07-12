const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i - 1] > arr[i]) {
      for (let j = 0; j < i; j += 1) {
        if (arr[j] > arr[i]) {
          const temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
  }
  return arr;
};

const array = [3, 1, 4, 2, 0, 9];

console.log(insertionSort(array));
// [ 0, 1, 2, 3, 4, 9 ]
