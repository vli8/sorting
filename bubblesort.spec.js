describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles one item', function(){
    expect(bubbleSort([1])).toEqual([1]);
  })
  it('handles multiple items',function(){
    expect(bubbleSort([3,2,1])).toEqual([1,2,3]);
  })
  it('handles a complicated array',function(){
    expect(bubbleSort([56,40,82,12,100])).toEqual([12,40,56,82,100]);
  })
});
