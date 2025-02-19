function bubbleSort(arr) {
  const result = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    console.log("외부 for문", result);
    let swapped = false;
    for (let j = 0; j < result.length - 1 - i; j++) {
      console.log("내부 for문", result);
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return result;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));
