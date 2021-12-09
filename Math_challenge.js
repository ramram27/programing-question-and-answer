/*

Math Challenge
Have the function MathChallenge(num) take the num parameter being passed and return the next number greater than num using the same digits. 
For example: if num is 123 return 132, if it's 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999).
Examples
Input: 11121
Output: 11211
Input: 41352
Output: 41523

*/

function MathChallenge(num) { 

  // code goes here  
  var newNum = num.toString().split("");

   if(newNum.length === 1) {
     return -1;
   }
   for(let i=(newNum.length - 1); i>=0; i--) {
     if(newNum[i]> newNum[i-1]) {
       newNum.splice(i-1,2,newNum[i],newNum[i-1]);
       var firHalf = newNum.slice(0,i);
       var secHalf = newNum.slice(i);
       var sorted = secHalf.sort((a,b) => a-b);

      return firHalf.concat(sorted).join("");
     }
     
   }
 
  return -1;

}
  
console.log(MathChallenge(readline()));
