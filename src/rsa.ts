// NOT READY FOR USAGE




import { getHighestCommonDenominator } from "https://deno.land/x/gethighestcommondenominator/mod.ts"
import {getPrime} from "./primenumber.js"

export class RSA{

    public static KeyGenrerator(min:number,max:number) {
        let p = getPrime(min, max);
        let q = getPrime(min, max);
        while(q==p){
            q = getPrime(min, max);
        }

        console.log(p,q)

        let N = q*p;
        let phi = (q-1)*(p-1);
        var e=0;
        var d=0;
        var b=0;
        for (let i = phi; i>0; i--) {
            if (getHighestCommonDenominator(i,phi)==1){
                e += i;
                console.log(e,"1")
                break
            }
        }

        if(q<p){
            b += p;
            console.log(b)
        }else{
            b += q;
            console.log(b)
        }

        for (let i = 2; i < b**10; i++) {
            if(((i*e)%phi) == 1){
                if(i==e){
                }else{
                d += i;
                console.log(d,"2")
                break
            }
            }
        }
        let pubkey = [e,N];
        let prikey = [d,N];
        return [pubkey,prikey]
}

    public static Encrypt(text:string,key:any){
        let textnum = [];
        let k1= key[0];
        let k2= key[1];

        for (let i = 0; i < text.length; i++) {
            var e = text[i].charCodeAt(0)
            console.log(e)
            var en = (e**k1)%k2
            textnum.push(en)
        }
        return textnum


    }
    
    public static Decrypt(text:any,key:any) {
        let textde = "";
        let k1= key[0];
        let k2= key[1];

        for (let i = 0; i < text.length; i++) {
            let dn = (text[i]**k1)%k2;
            console.log(dn)
            textde += String.fromCharCode(dn);
        }
        return textde
        
    }


}