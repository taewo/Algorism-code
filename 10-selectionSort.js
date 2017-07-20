// 선택 정렬
//
// 선택 정렬은 합병 정렬이랑 반대 개념인듯하다.
// 합병 정렬은 큰 값을 가장 뒤로 보내는 것이라면
// 선택 정렬은 for문을 한번씩 돌면서 가장 작은 값을 가장 앞으로 보내는 정렬이라 생각하면 될 것 같다.

// [4, 3, 2, 1]에서 0번째 값을 minValue 변수에 담는고, 두번째 for문을 돌면서 더 작은 값을 만나면 minValue에 담고 더 없으면 자리를 바꾼다.
// [1, 3, 2, 4]
// [1, 2, 3, 4] 이런 식으로.


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

console.log(selectionSort([4,3,2,1]));
// [1,2,3,4]


// ES5 code.
//
// var array = [4,3,2,1,9,8,7,6];
//
// var selectionSort = function(arr){
// 	var minIndex, temp;
// 	for(var i=0; i<arr.length; i++){
// 		minIndex = i;
// 		for(var j=i+1; j<arr.length; j++){
// 			if(arr[minIndex] > arr[j]){
// 				minIndex = j;
// 			}
// 			temp = arr[i];
// 			arr[i] = arr[minIndex];
// 			arr[minIndex] = temp;
// 		}
// 	}
// 	return arr;
// }
