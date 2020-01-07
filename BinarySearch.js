const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = low + high;

    let guess = list[mid];

    if (guess == item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};

myList = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(myList, 3));
