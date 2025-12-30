import { describe, it, expect } from "vitest";
import validAnagram from "../src/validAnagram";

describe("validAnagram", () => {
  it("returns true for simple anagram", () => {
    expect(validAnagram("racecar", "carrace")).toBe(true);
  });

  it("returns false when characters differ", () => {
    expect(validAnagram("jar", "jam")).toBe(false);
  });

  it("returns true for identical strings", () => {
    expect(validAnagram("abc", "abc")).toBe(true);
  });

  it("returns false when lengths differ", () => {
    expect(validAnagram("ab", "abc")).toBe(false);
  });

  it("handles repeated characters", () => {
    expect(validAnagram("aabbcc", "ccbbaa")).toBe(true);
    expect(validAnagram("aabbcc", "ccbbba")).toBe(false);
  });

  it("handles single-character strings", () => {
    expect(validAnagram("a", "a")).toBe(true);
    expect(validAnagram("a", "b")).toBe(false);
  });

  it("returns true for empty strings", () => {
    expect(validAnagram("", "")).toBe(true);
  });

  it("does not mutate input strings", () => {
    const s = "anagram";
    const t = "nagaram";
    validAnagram(s, t);
    expect(s).toBe("anagram");
    expect(t).toBe("nagaram");
  });
});
