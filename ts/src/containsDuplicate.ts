export default function containsDuplicate(nums: number[]): boolean {
  const seen = new Set();

  for (const n of nums) {
    if (seen.has(n)) {
      return true;
    } else {
      seen.add(n);
    }
  }

  return false;
}
