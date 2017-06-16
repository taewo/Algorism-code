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
//   */


  
var deepEqual = function (x, y) {
  if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var prop in x) {
      console.log(111, prop)
      if (y.hasOwnProperty(prop)){  
        if (! deepEqual(x[prop], y[prop])){
          return false;
        }
      }
      else
        return false;
    }
    console.log(55)
    return true;
  }
  else if (x !== y){
    console.log(222)
    return false;
  }
  else{
    console.log(333)
    return true;
  }
}
var a = {a: 1, b:1}
var b = {a: 1, b:1}


console.log(444, deepEqual(a,b))
