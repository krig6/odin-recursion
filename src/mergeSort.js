export const mergeSort = (array) => {
  // Base case: arrays with 0 or 1 element are already sorted
  if (array.length < 2) return array;

  // Find the middle index to split the array
  const middleIndex = Math.floor(array.length / 2);

  // Recursively sort the left half
  const leftArray = mergeSort(array.slice(0, middleIndex));
  // Recursively sort the right half
  const rightArray = mergeSort(array.slice(middleIndex));

  // Array to hold the merged and sorted result
  const sortedArray = [];
  // Pointers to track positions in the left and right arrays
  let leftPointer = 0;
  let rightPointer = 0;

  // Merge the two sorted halves
  while (leftPointer < leftArray.length && rightPointer < rightArray.length) {
    if (leftArray[leftPointer] < rightArray[rightPointer]) {
      // Take element from left array if smaller
      sortedArray.push(leftArray[leftPointer]);
      leftPointer++;
    } else {
      // Take element from right array if smaller or equal
      sortedArray.push(rightArray[rightPointer]);
      rightPointer++;
    }
  }

  // Append any remaining elements from left or right arrays
  // Only one of these slices will have elements left at this point
  return sortedArray.concat(
    leftArray.slice(leftPointer),
    rightArray.slice(rightPointer)
  );
};
