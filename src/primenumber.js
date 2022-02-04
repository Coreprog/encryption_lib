
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





 export function encoding(text,key){
   let textnum = [];
   let k1= key[0];
   let k2= key[1];

   for (let i = 0; i < text.length; i++) {
       var e = text[i].charCodeAt(0)
       var en = (BigInt(e)**BigInt(k1))%BigInt(k2)
       textnum.push(Number(en))
   }
   return textnum
 }

 export function decoding(text,key){
    let textde = "";
    let k1= key[0];
    let k2= key[1];

    for (let i = 0; i < text.length; i++) {
        var dn = (BigInt(text[i])**BigInt(k1))%BigInt(k2);
        textde += String.fromCharCode(Number(dn));
      }
      return textde
    }