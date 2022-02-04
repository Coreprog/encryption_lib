import {  assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Caesar } from "./src/caesar.ts";
import { RSA } from "./src/rsa.ts";
import { Tester } from "./src/tester.ts";

// CAESAR CIPHER

Deno.test("Caesar Encoding", () => {
    const result = Caesar.CaesarEncoding("Hello World!",5)
    assertEquals("Mjqqt Btwqi!", result);
  });

Deno.test("Caesar Decoding", () => {
  const result = Caesar.CaesarDecoding("Mjqqt Btwqi!",5)
  assertEquals("Hello World!", result);
})

// RSA 
Deno.test("RSA", () => {
 const result = RSA.KeyGenrerator(5,10)
  assertEquals("Will fail, because keys are random generated", result);
});

Deno.test("RSA ENC", () => {
  const result = RSA.Encrypt("B",[5,91])
   assertEquals([40], result);
 });

 Deno.test("RSA DEC", () => {
  const result = RSA.Decrypt([40],[29,91])
   assertEquals("B", result);
 });

 //Tester for typescript and javascript test runs
 Deno.test("Test", () => {
  const result = Tester.tester()
  assertEquals(null, result);
});