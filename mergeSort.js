function split(wholeArray) {
  let half1 = [];
  let half2 = [];
  let middlePoint = 0;
  middlePoint = Math.floor(wholeArray.length / 2);
  half1 = wholeArray.slice(0, middlePoint);
  half2 = wholeArray.slice(middlePoint);
  return [half1, half2];
}

function merge(arr, arr2) {
  let sortedArray = [];
  while (arr.length > 0 || arr2.length > 0) {
    if (arr.length === 0) {
      return sortedArray.concat(arr2);
    }
    if (arr2.length === 0) {
      return sortedArray.concat(arr);
    }
    if (arr[0] < arr2[0]) {
      sortedArray.push(arr.shift());
    } else {
      sortedArray.push(arr2.shift());
    }
  }
}

function mergeSort(hugeArray) {
    let splitArr = split(hugeArray)
    for(let i = 0; i < hugeArray.length; i++){
    if(splitArr[i].length > 1) {
        splitArr = splitArr.slice(1).concat(split(splitArr[0]))
        i = 0 
    }
     }
}
  
