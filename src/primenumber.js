
function isPrime(num) { 
   if (num <= 1) return false;
   if (num % 2 == 0 && num > 2) return false; 
   const s = Math.sqrt(num); 
   for(let i = 3; i <= s; i += 2) { 
       if(num % i === 0) return false; 
   }
   return true;
 }

 export function getPrime(min, max){
    var x = Math.floor(Math.random() * max) + min;
    if(isPrime(x)) return x;
    else return getPrime(min, max);
 }