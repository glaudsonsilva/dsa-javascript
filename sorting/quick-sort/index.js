// Simpler solution, however it takes more memory
// function quickSort(array) {
//   if (array.length <= 1) return array;
//   let pivot = array[0];
//   let smallers = [];
//   let greaters = [];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < pivot) smallers.push(array[i]);
//     else greaters.push(array[i]);
//   }
//   return [...quickSort(smallers), pivot, ...quickSort(greaters)];
// }

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
}

// space complecity = O(1)
function quickSort(array, left = 0, rigth = array.length - 1) {
  if (left < rigth) {
    let pivotIndex = pivot(array, left, rigth);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, rigth);
  }
  return array;
}

let array = [4, 6, 1, 7, 3, 2, 5];

quickSort(array);
console.log(array);
