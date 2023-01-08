function findSum(arr) {
  //   Normal Approach
  //   let total = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     total = total + arr[i];
  //   }
  //   return total;

  // Recursive Approach
  if (arr.length == 0) {
    return 0;
  }
  return arr[0] + findSum(arr.slice(1));
}

console.log(findSum([10, 20, 30]));
