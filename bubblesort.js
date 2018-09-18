const swap = (arr, index1,index2) =>{
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr 
}




const bubbleSort = (array) => {
    let currentIndex = 0;
    let swappedElement = false
    while(currentIndex < array.length -1){
      if(array[currentIndex] > array[currentIndex +1]){
        swap(array,currentIndex,currentIndex+1)
           swappedElement = true
      }
       if(swappedElement){
         currentIndex = 0
     } else {
       currentIndex +=1
     }
     swappedElement = false 
    }
    return array
}