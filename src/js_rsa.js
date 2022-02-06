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