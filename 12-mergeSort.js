/*

Conceptually, a merge sort works as follows:

Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.

*/


const mergeSort = (arr) => {
	const length = arr.length;
	if(length === 1) {
		return arr;
	}

	const middle = Math.floor(length/2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle, length);

	return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
	let result = [];
	while(left.length && right.length) {
		if(left[0] > right[0]){
			result.push(right.shift())
		} else {
			result.push(left.shift())
		}
	}

	while(left.length) {
		result.push(left.shift());
	};

	while(right.length) {
		result.push(right.shift());
	};

	return result;
}

console.log(mergeSort([4,3,2,1,9,8,7,6]))
// [ 1, 2, 3, 4, 6, 7, 8, 9 ]
