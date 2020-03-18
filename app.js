// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

 

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // return s.reverse(); // lets pretend that I don't have access to a built in method called reverse. 
//array of seperate strings, mash them together 
// then after flipping the string, move them apart 
  let stringPutTogether = s.join(""); // joining string together
  let newString = ''; // establishing new string
  console.log(stringPutTogether)
  for(let i= s.length - 1; i >= 0; i--){ // iterating from the end moving to the left
    newString += s[i];   // adding the individual characters 
  }
  let seperateStringAgain = newString.split(""); // seperating the string again.
  console.log(seperateStringAgain,"seperateStringAGain")
  return seperateStringAgain;  
};

