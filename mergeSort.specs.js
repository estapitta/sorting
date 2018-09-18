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
      expect( merge(splitArray, sortedArr) ).toEqual( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );
    });
   });