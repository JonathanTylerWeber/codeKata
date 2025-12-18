// ts/test/binarySearch.test.ts
import { describe, it, expect } from "vitest";
import binarySearch from "../src/binarySearch";

describe("binarySearch", () => {
  it("returns -1 for empty array", () => {
    expect(binarySearch([], 10)).toBe(-1);
  });

  it("returns -1 when target is not found", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 2)).toBe(-1);
  });

  it("finds a value in the middle", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
  });

  it("finds the first element", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
  });

  it("finds the last element", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
  });

  it("works with negative numbers", () => {
    expect(binarySearch([-10, -3, 0, 4, 8], -3)).toBe(1);
    expect(binarySearch([-10, -3, 0, 4, 8], 8)).toBe(4);
  });

  it("works with a single-element array (found)", () => {
    expect(binarySearch([42], 42)).toBe(0);
  });

  it("works with a single-element array (not found)", () => {
    expect(binarySearch([42], 7)).toBe(-1);
  });

  it("works with duplicates (returns a valid matching index)", () => {
    const arr = [1, 2, 2, 2, 3, 4];
    const idx = binarySearch(arr, 2);
    expect(idx).toBeGreaterThanOrEqual(1);
    expect(idx).toBeLessThanOrEqual(3);
    expect(arr[idx]).toBe(2);
  });

  it("handles large-ish input", () => {
    const arr = Array.from({ length: 10_000 }, (_, i) => i * 2); // even numbers
    expect(binarySearch(arr, 0)).toBe(0);
    expect(binarySearch(arr, 19998)).toBe(9999);
    expect(binarySearch(arr, 19999)).toBe(-1);
  });

  it("does not mutate the array", () => {
    const arr = [1, 3, 5, 7, 9];
    const copy = [...arr];
    binarySearch(arr, 7);
    expect(arr).toEqual(copy);
  });
});
