function maxNumber(arr){
    // Normal Approach
    let max = 0;
    for(let i = 0 ; i < arr.length; i++){
        if( arr[i] > max ){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxNumber([10,50,5,3,2,90,30]));

// Recursive Approach

function max(array) {
    if (array.length === 2) return array[0] > array[1] ? array[0] : array[1];
    let sub_max = max(array.slice(1));
    return array[0] > sub_max ? array[0] : sub_max;
  }

console.log(max([10,50,5,3,2,90,30]));