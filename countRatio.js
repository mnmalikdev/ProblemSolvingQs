// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
const countRatio = (arr) => {
  //check if array lenght is greater than zero and does not contain more than a 100 elements
  if (arr.length > 0 || arr.length <= 100) {
    //using array. filter
    const positives = arr.filter((number) => number > 0 && (number >= -100 || number <= 100)).length / arr.length;
    const negetives = arr.filter((number) => number < 0 && (number >= -100 || number <= 100)).length / arr.length;
    const zeroes = arr.filter((number) => number == 0 && (number >= -100 || number <= 100)).length / arr.length;
    // print
    console.log(positives.toFixed(6));
    console.log(negetives.toFixed(6));
    console.log(zeroes.toFixed(6));
  }
};
countRatio([1, 2, 3, -1, -2, -3, 0, 0]);
