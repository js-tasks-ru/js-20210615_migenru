/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const newArray = [...arr];
  let collator = new Intl.Collator('ru-RU', {caseFirst: 'upper'});

  if (param === 'asc') {
    return newArray.sort((a, b) => {
      return collator.compare(a, b);
    });
  } else if (param === 'desc') {
    return newArray.sort((a, b) => {
      return collator.compare(b, a);
    });
  }
}
