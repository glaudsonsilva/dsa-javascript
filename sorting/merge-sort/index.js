function merge(array1, array2) {
  let combined = [];

  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] < array2[0]) {
      combined.push(array1[0]);
      array1.splice(0, 1);
    } else {
      combined.push(array2[0]);
      array2.splice(0, 1);
    }
  }

  if (array1.length > 0) {
    for (let i = 0; i < array1.length; i++) {
      combined.push(array1[i]);
    }
  } else if (array2.length > 0) {
    for (let i = 0; i < array2.length; i++) {
      combined.push(array2[i]);
    }
  }

  return combined;
}

function mergeSort(array) {
  if (array.length > 1) {
    const middle = Math.floor(array.length / 2);
    const array1 = mergeSort(array.slice(0, middle));
    const array2 = mergeSort(array.slice(middle));

    return merge(array1, array2);
  }

  return array;
}

let array = [1, 5, 58, 22, 46, 9, 3, 4, 2];

console.log(mergeSort(array));
