# encryption_lib for Deno
A library with different methods to encode and decode data.

## Usage Example:  
### Caesar Cipher 

```ts
import { Caesar } from "https://deno.land/x/encryption_lib@0.1.0/src/caesar.ts"

const caesar_enc_text = "Hello World!"
const cipher = 5

//Caesar.CaesarEncoding
const caesar_encoded = Caesar.CaesarEncoding(caesar_enc_text,cipher)
console.log(caesar_encoded) // "Mjqqt Btwqi!"

const caesar_dec_text = "Mjqqt Btwqi!"

//Caesar.CaesarDecoding
const caesar_decoded = Caesar.CaesarDecoding(caesar_dec_text,cipher)
console.log(caesar_decoded) // "Hello World!"
```

### RSA  
```ts
import { RSA } from "https://deno.land/x/encryption_lib@0.1.0/src/rsa.ts"

// RSA.KeyGenrerator
const rsa_keys = RSA.KeyGenrerator()
console.log(rsa_keys) // [[3,1219],[763,1219]]

const rsa_enc_text = "Hello World"
const rsa_public_key = [3,1219]

// RSA.Encoding
const rsa_encoded = RSA.Encoding(rsa_enc_text,rsa_public_key)
console.log(rsa_encoded) // [234,246,485,485,1132,1074,243,1132,459,485,420]

const rsa_dec_list == [234,246,485,485,1132,1074,243,1132,459,485,420]
const rsa_private_key = [763,1219]

//RSA.Decoding
const rsa_decoded = RSA.Decoding(rsa_dec_list,rsa_private_key)
console.log(rsa_encoded) // "Hello World"
```
