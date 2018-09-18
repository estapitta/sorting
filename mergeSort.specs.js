describe('Split Array function', function() {
    let splitArray
    beforeEach(() =>{
        splitArray = [1,2,3,4,5]
    })
    it('is able to split an array into two halves', function() {
     expect(split(splitArray)).toEqual([[1,2],[3,4,5]])
    });
  });

  describe('Merge function', function(){
    let splitArray, sortedArr;
   
    beforeEach(() => {
      splitArray = [1, 2, 3, 4, 5]
      sortedArr = [6, 7, 8, 9, 10]
    })
   
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
      expect(merge(splitArray, sortedArr) ).toEqual( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );
    });
   });

   describe('Merge sort function', function(){
      it('is able to merge sort an array', function(){
        expect(mergeSort([8,1,2,5,6,0,2,1])).toEqual([0,1,1,2,2,5,6,8])
      })
   })