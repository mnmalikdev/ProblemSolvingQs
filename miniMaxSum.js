function miniMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      // find the current minimum value
      if (min > arr[i]) {
        min = arr[i];
      }
      if (max < arr[i]) {
        max = arr[i];
      }
      sum += arr[i];
    }
    //to find max sum. just subtract min from sum. the remaining will be max sum
    let maxSum = sum - min;
    //to find min sum. just subtract max from sum. the remaining will be min sum
    let minSum = sum - max;
    console.log(minSum + " " + maxSum);
  }
}

miniMaxSum([1, 2, 3, 4, 5]);
