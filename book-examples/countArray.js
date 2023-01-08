function countArray(arr) {
  // Recursive Approach
      if(arr.length == 0){
          return 0;
      }
      return 1 + countArray(arr.slice(1));
  }
  
  console.log(countArray([10, 20, 30]));
  