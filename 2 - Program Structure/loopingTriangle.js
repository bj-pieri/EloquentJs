/* 
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### 

It may be useful to know that you can find the length of a string by writing length after it.

let abc = "abc";
console.log(abc.length);
// → 3
*/


// First Solution

let triangle = '';
let limit = 7;
let initial = 0;

while (initial <= limit) {
  console.log('* '.repeat(initial))
  initial++;
}




/* Second Solution

let triangle = '';
let limit = 7;

for (let i = 0; i <= limit; i++) {
  for(let j = 0; j < i; j++){
    triangle += '*'
  }
  triangle += '\n';
}
console.log(triangle)
*/
