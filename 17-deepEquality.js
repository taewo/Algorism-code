/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */


const deepEqual = (x, y) => {
  if ((typeof x === 'object' && x != null) && (typeof y === 'object' && y != null)) {
    if (Object.keys(x).length !== Object.keys(y).length) {
      console.log(1)
      return false;
    }
    for (let key in x) {
      if (y.hasOwnProperty(key)) {
        console.log(2)
        if (!deepEqual(x[key], y[key])) {
          console.log(3)
          return false;
        }
      } else {
        console.log(4)
        return false;
      }
    }
    return true;
  } else if (x !== y) {
    console.log(5)
    return false;
  } else {
    console.log(6)
    return true;
  }
};

const a = { a: 1, b: { a: { v: 1 } } };
const b = { a: 1, b: { a: { v: 3 } } };
console.log(deepEqual(a, b));
