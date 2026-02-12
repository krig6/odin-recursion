import { fibs } from "./fibs.js";
import { fibsRec } from "./fibsRec.js";
import { mergeSort } from "./mergeSort.js";

// Demo: Fibonacci(iterative)
console.log('Fibonacci (iterative):');
console.log('fibs(0):', fibs(0));
console.log('fibs(1):', fibs(1));
console.log('fibs(8):', fibs(8));

// Demo: Fibonacci(recursive)
console.log('\nFibonacci (recursive):');
console.log('fibsRec(0):', fibsRec(0));
console.log('fibsRec(1):', fibsRec(1));
console.log('fibsRec(8):', fibsRec(8));

// Demo: Merge Sort
console.log('\nMerge Sort:');
console.log('mergeSort([]):', mergeSort([]));
console.log('mergeSort([73]):', mergeSort([73]));
console.log(
  'mergeSort([3, 2, 1, 13, 8, 5, 0, 1]):',
  mergeSort([3, 2, 1, 13, 8, 5, 0, 1])
);
console.log(
  'mergeSort([105, 79, 100, 110]):',
  mergeSort([105, 79, 100, 110])
);
