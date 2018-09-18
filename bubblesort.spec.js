describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it ('hanles an empty array',function(){
        expect( bubbleSort([2,3,1])).toEqual([1,2,3])
    })
  });

  