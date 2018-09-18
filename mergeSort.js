function split(wholeArray) {
let middleIndex = parseInt(wholeArray.length / 2)
let firstHalf = wholeArray.slice(0,middleIndex)
let secondHalf = wholeArray.slice(middleIndex)


  return [firstHalf, secondHalf];
}

const merge = (arr1,arr2) => {
let newArr = [];
  while(arr1.length !==0 && arr2.length !== 0){
    if(arr1[0] > arr2[0]){
      newArr.push(arr2[0])
      arr2.shift()
    } else {
      newArr.push(arr1[0])
      arr1.shift()
    }
  }
  while(arr1.length !==0){
    newArr.push(arr1[0])
    arr1.shift()
  }
  while(arr2.length !== 0){
    newArr.push(arr2[0])
    arr2.shift()
  }
  return newArr
}

const mergeSort = (array) => {
if(array.length === 0 || array.length === 1){
  return array 
   } else{
     let splitArray = split(array)
     let mergedArray = merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]))

     return mergedArray
   }
}

