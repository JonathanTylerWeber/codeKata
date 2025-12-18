export default function binarySearch(arr: number[], target: number): number {
  if (!arr.length) {
    return -1;
  }

  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);
    const midVal = arr[mid];
    if (midVal === undefined) {
      return -1;
    }

    if (midVal === target) {
      return mid;
    } else if (midVal > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
