// NOT READY FOR USAGE




import { getHighestCommonDenominator } from "https://deno.land/x/gethighestcommondenominator/mod.ts" 
import { encrypt, decrypt } from "./primenumber.js"
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
        for (let i = 2; i>0; i++) {
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
        let result = encrypt(text,key)
        return result
    }
    
    public static Decrypt(text:any,key:any) {
        let result = decrypt(text,key)
        return result
    }


}