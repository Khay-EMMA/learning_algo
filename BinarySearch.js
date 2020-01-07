const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let middle = low + high;

    let guess = list[mid];

    if (guess == item) {
      return middle;
    } else if (guess > item) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
};

myList = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(myList, 3));
