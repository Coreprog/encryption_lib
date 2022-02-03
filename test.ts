import {  assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Caesar } from "./src/caesar.ts";
import { RSA } from "./src/rsa.ts";

Deno.test("Caesar Encoding", () => {
    const result = Caesar.CaesarEncoding("Hello World!",5)
    assertEquals("Mjqqt Btwqi!", result);
  });

Deno.test("Caesar Decoding", () => {
  const result = Caesar.CaesarDecoding("Mjqqt Btwqi!",5)
  assertEquals("Hello World!", result);
});

Deno.test("Test", () => {
  const result = Caesar.tester()
  assertEquals("2", result);
});

//CURRENTLY NOT WORKING
Deno.test("RSA", () => {
 const result = RSA.KeyGenrerator(5,10)
  assertEquals("idk", result);
});

Deno.test("RSA ENC", () => {
  const result = RSA.Encrypt("B",[5,119])
   assertEquals([1067547], result);
 });

 Deno.test("RSA DEC", () => {
  const result = RSA.Decrypt([19],[77,119])
   assertEquals("B", result);
 });