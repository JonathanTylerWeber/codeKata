import { describe, it, expect } from "vitest";
import { encode, decode } from "../src/alphabetCipher";

describe("Alphabet Cipher", () => {
  it("encodes the sample from the prompt", () => {
    expect(encode("meetmebythetree", "scones")).toBe("egsgqwtahuiljgs");
  });

  it("decodes the sample from the prompt", () => {
    expect(decode("egsgqwtahuiljgs", "scones")).toBe("meetmebythetree");
  });

  it("round-trips for simple inputs", () => {
    const msg = "helloworld";
    const key = "abc";
    const c = encode(msg, key);
    expect(decode(c, key)).toBe(msg);
  });

  it("normalizes case (lowercases both message and keyword)", () => {
    expect(encode("MeetMeByTheTree", "SCONES")).toBe("egsgqwtahuiljgs");
  });

  it("ignores non-letters in message + keyword (per starter rules)", () => {
    expect(encode("meet me by the tree!!", "sco-nes")).toBe("egsgqwtahuiljgs");
  });

  it("returns empty string if message becomes empty after normalization", () => {
    expect(encode("!!!", "scones")).toBe("");
  });

  it("throws if keyword has no letters after normalization", () => {
    expect(() => encode("meetmebythetree", "!!!")).toThrow();
    expect(() => decode("egsgqwtahuiljgs", "!!!")).toThrow();
  });
});
