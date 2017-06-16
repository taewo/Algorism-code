/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

const firstNonRepeatedCharacter = (string) => {
  const data = string;
  const dataBoard = {};
  for (let i = 0; i < data.length; i += 1) {
    if (!dataBoard[data[i]]) {
      dataBoard[data[i]] = 1;
    } else {
      dataBoard[data[i]] += 1;
    }
  }
  for (const key in dataBoard) {
    if (dataBoard[key] === 1) {
      return key;
    }
  }
};

console.log(firstNonRepeatedCharacter('AACBDBC'));