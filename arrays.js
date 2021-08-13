//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

const colorCopy = faveColors.slice();
//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE

colorCopy.push(`blue`);

console.log(colorCopy);
//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE
const middleNums = numbers[2];
console.log(middleNums);


//////////////////PROBLEM 4////////////////////
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr', 
  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the
  array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
  Return the answers array inside of the function.
*/

// CODE 


// Stuck on this, can't figure it out. Been googling on how to do this type of function.

// the arr parameter needs to be inside the foor loop.
// i > arr.length
// then after that, the arr[i] will need to be inside the if statement 
// then have the return statement needs to be in line 62
function bigOrSmall (arr) {
  let answers = [];
  for(i = 0; i > arr.length; i++) {
    if (arr[i] > 100) {
      answers.push(`big`); 
    } else if (arr[i] <= 100) {
      answers.push(`small`);
    } else {
    }
    return answers;
  }
}
// bigorSmall(101);
// make sure to put the bigOrSmall(parameters) and fill in the numbers. Must be in brackets because it is an array
// EXAMPLE: console.log(bigOrSmall([]))
console.log(bigOrSmall([100, 10, 200, 20]));