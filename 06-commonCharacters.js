/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  var charactersObj = {};
  var result = '';
  for(var i=0; i<string1.length; i++){
  	if(!charactersObj[string1[i]]){
  		charactersObj[string1[i]] = 1;
  	}
  }
	for(var j=0; j<string2.length; j++){
		if(charactersObj[string2[j]]){
			charactersObj[string2[j]] += 1;
		}
	}
	for(var key in charactersObj){
		if(charactersObj[key] > 1){
			result += key;
		}
	}
	return result;
};

console.log(commonCharacters('acexivou', 'aegihobuv')) // aeivou