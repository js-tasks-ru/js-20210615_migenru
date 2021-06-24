/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let newStr = '';
  let result = '';

  for (let i = 0; i < string.length; i++) {
    newStr += (string[i] === string[i + 1]) ? string[i] : `${string[i]} `;
  }

  for (let i of newStr.split(' ')) {
    result += (i.length < size) ? i.substr(0, i.length) : i.substr(0, size);
  }
  return result;
}
