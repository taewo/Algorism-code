
const mergeSort = (arr) => {
	const len = arr.length;
	if (len === 1) {
		return arr;
	}
	const middle = Math.floor(len / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle, len);

	return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
	const result = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while (left.length) {
		result.push(left.shift());
	}

	while (right.length) {
		result.push(right.shift());
	}

	return result;
};

console.log(mergeSort([4,3,2,1,9,8,7,6]))
// [ 1, 2, 3, 4, 6, 7, 8, 9 ]
