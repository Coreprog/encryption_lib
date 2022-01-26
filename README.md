# encryption_lib
A library for diffrent kind of encoding and decoding of data.

## Caesar Cipher
It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. 
(https://en.wikipedia.org/wiki/Caesar_cipher)

###Caesar.CaesarEncoding(txt,key)
Example:
Caesar.CaesarEncoding("Hello World!",5) --> "Mjqqt Btwqi!"


###Caesar.CaesarDecoding(txt,key)
Example:
Caesar.CaesarDecoding("Mjqqt Btwqi!",5) --> "Hello World!"
