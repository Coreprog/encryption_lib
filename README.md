# encryption_lib for Deno
A library with different methods to encode and decode data.


## Caesar Cipher
It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. 
(https://en.wikipedia.org/wiki/Caesar_cipher)

### Caesar.CaesarEncoding(txt,key)  
Example:
>Caesar.CaesarEncoding("Hello World!",5) --> "Mjqqt Btwqi!"  

### Caesar.CaesarDecoding(txt,key)  
Example:
>Caesar.CaesarDecoding("Mjqqt Btwqi!",5) --> "Hello World!"  

## RSA
RSA public-key / private-key cryptosystem. On base of two prime numbers (at the moment)...

### RSA.KeyGenrerator()  
first array is the public key  
second array is the private key  

Example:  
> RSA.KeyGenrerator() --> [[3,1219],[763,1219]]  

### RSA.Encoding(text,public key)  
Example:
> RSA.Encoding("Hello World",[3,1219]) --> [234,246,485,485,1132,1074,243,1132,459,485,420]  

### RSA.Decoding(list,private key)  
Example:  
> RSA.Decoding([234,246,485,485,1132,1074,243,1132,459,485,420],[763,1219]) --> "Hello World"

