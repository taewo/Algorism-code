
// 선택정렬

// 0번째를 건너뛰고 1번째 요소를 기준으로 시작한다.
// 1번째 요소가 0번째 요소보다 작으면 한칸씩 뒤로 미루고 적절한 자리에 1번째 요소를 넣는다.
// 2번째 요소가 1번째 요소보다 작으면 자리를 한칸씩 밀고, 0번째 요소보다 작으면 또 한칸씩 밀고
// 그렇게 작은 요소부터 앞에서부터 채워나간다

// 참고링크
// https://ko.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort

const insertionSort = (arr) => {
  let pivot;  //  비교될 요소들의 인덱스
  let temp;   //  기준값을 잠시 저장하는 변수
  for (let i = 1; i < arr.length; i += 1) { // 0번째 건너뛰고 1번째 요소부터 시작한다.
    pivot = i;  //  초기에는 i를 넣고 while 문을 돌면서 -1씩 변한다.
    temp = arr[i];  //  temp에 기준값을 넣고
    while (temp < arr[pivot - 1]) { // 작을때 까지 반복
      arr[pivot] = arr[pivot - 1];  //  한칸씩 뒤로 채우주고
      pivot--;  //  비교될 요소의 인덱스를 줄여주고
    }
    arr[pivot] = temp;  // while문이 끝났을때 temp를 넣어준다.
  }
  return arr;
};

console.log(insertionSort([4,3,2,1,9,8,7,6]));
//  [ 1, 2, 3, 4, 6, 7, 8, 9 ]
