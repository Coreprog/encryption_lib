import {  assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Caesar } from "./src/caesar.ts";

Deno.test("Caesar Encoding", () => {
    const result = Caesar.CasaerEncoding("Hello World!",5)
    assertEquals("Mjqqt Btwqi!", result);
  });

Deno.test("Caesar Decoding", () => {
  const result = Caesar.CasaerDecoding("Mjqqt Btwqi!",5)
  assertEquals("Hello World!", result);
});