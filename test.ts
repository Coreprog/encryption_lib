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
 const result = RSA.KeyGenrerator()
  assertEquals("Will fail, because keys are random generated", result);
});

Deno.test("RSA ENC", () => {
  const result = RSA.Encoding("Hello World",[3,1219])
   assertEquals([234,246,485,485,1132,1074,243,1132,459,485,420], result);
 });

 Deno.test("RSA DEC", () => {
  const result = RSA.Decoding([234,246,485,485,1132,1074,243,1132,459,485,420],[763,1219])
   assertEquals("Hello World", result);
 });

 //Tester for typescript and javascript test runs
 Deno.test("Test", () => {
  const result = Tester.tester()
  assertEquals(null, result);
});