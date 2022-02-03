
function isPrime(num) { // returns boolean
   if (num <= 1) return false; // negatives
   if (num % 2 == 0 && num > 2) return false; // even numbers
   const s = Math.sqrt(num); // store the square to loop faster
   for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
       if(num % i === 0) return false; // modulo shows a divisor was found
   }
   return true;
 }

 export function getPrime(min, max){
    var x = Math.floor(Math.random() * max) + min;
    if(isPrime(x)) return x;
    else return getPrime(min, max);
 }