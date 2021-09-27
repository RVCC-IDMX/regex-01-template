/*
 * regex-01.js
 * Language: javascript
 * Test: tests/regex-01.test.js
 * Path: src/regex-01.js
 *
 *
 */

/**
 * Tests the string against a regular expression.
 * @param {string} str - the string to be tested
 * @param {regex} re - the regular expression to be tested
 * @returns {boolean} - true if the string matches the regular expression,
 * false otherwise
 * ? example: testString('abc', /abc/) // true
 * ? example: testString('abc', /def/) // false
 */
function testString(str, re) {
  // write your code here & return value
  return re.test(str);
}

/**
 * Tests the string for a match against an array of strings.
 * @param {string} str - the string to be tested
 * @param {Array} arr - an array of strings to be tested
 * @returns {boolean} - true if the string matches one of the strings in the array, false otherwise
 * ?example: testStringMatch('abc', ['abc', 'def', 'ghi']) // true
 * ?example: testStringMatch('abc', ['def', 'ghi']) // false
 * ? must use the constructor function new RegExp(str) to create a regular expression
 * ? https://mzl.la/3lWGpRa
 * ? hint: create a string with the join array method and the | character as the separator
 */
function testStringMatch(str, arr) {
  // write your code here & return value
}

module.exports = {
  testString,
  testStringMatch,
};
