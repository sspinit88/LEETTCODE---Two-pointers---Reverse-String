/*

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 
Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

    1 <= s.length <= 105
    s[i] is a printable ascii character.


*/

//// ЛУЧШЕЕ РЕШЕНИЕ:

var reverseStringA = function (s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }

  return s;
};

console.log(reverseStringA(['h', 'e', 'l', 'l', 'o'])); /// ["o","l","l","e","h"]
console.log(reverseStringA(['H', 'a', 'n', 'n', 'a', 'h'])); // ["h","a","n","n","a","H"]

//// Простое решение

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  const res = [];

  while (left <= right) {
    res.push(s[right]);
    right--;
  }

  return res;
};

// console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); /// ["o","l","l","e","h"]
// console.log(reverseString(["H","a","n","n","a","h"])); /// ["h","a","n","n","a","H"]
