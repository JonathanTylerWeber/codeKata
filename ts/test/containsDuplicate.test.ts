import { describe, it, expect } from "vitest";
import containsDuplicate from "../src/containsDuplicate";

describe("containsDuplicate", () => {
  it("returns false for empty array", () => {
    expect(containsDuplicate([])).toBe(false);
  });

  it("returns false for single element", () => {
    expect(containsDuplicate([1])).toBe(false);
  });

  it("returns true when a duplicate exists", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it("returns false when all values are unique", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it("handles multiple duplicates", () => {
    expect(containsDuplicate([1, 1, 2, 2, 3])).toBe(true);
  });

  it("handles negative numbers", () => {
    expect(containsDuplicate([-1, -2, -3, -1])).toBe(true);
    expect(containsDuplicate([-1, -2, -3])).toBe(false);
  });

  it("handles zeros", () => {
    expect(containsDuplicate([0, 1, 2, 0])).toBe(true);
    expect(containsDuplicate([0, 1, 2])).toBe(false);
  });

  it("does not mutate the input array", () => {
    const nums = [3, 2, 1, 0];
    const copy = [...nums];
    containsDuplicate(nums);
    expect(nums).toEqual(copy);
  });
});
