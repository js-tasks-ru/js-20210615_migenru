/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  function foo(obj) {
    let result = obj;
    for (const item of path.split('.')) {
      result = (result !== undefined) ? result[item] : undefined;
    }
    return result;
  }
  return foo;
}
