const {inArray} = require('../inArray');

describe('inArray', () => { 
  test('Should take 2 matching single element arrays and return the single element', () => { 
    //arrange 
    const expected1 = ['apple']; 
    const expected2 = ['banana']; 
    const expected3 = ['orange']; 

    const input1a = ['apple']; 
    const input1b = ['apple']; 

    const input2a = ['banana']; 
    const input2b = ['banana']; 

    const input3a = ['orange']; 
    const input3b = ['orange']; 
    //act 
    const actual1 = inArray(input1a, input1a); 
    const actual2 = inArray(input2a, input2b); 
    const actual3 = inArray(input3a, input3b); 
    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3); 
  }); 
  test('Should take 2 matching single element arrays and return the single element', () => { 
    //arrange 
    const expected1 = ['pple']; 
    const expected2 = ['anana']; 
    const expected3 = ['range']; 

    const input1a = ['pple']; 
    const input1b = ['apple']; 

    const input2a = ['anana']; 
    const input2b = ['banana']; 

    const input3a = ['range']; 
    const input3b = ['orange']; 
    //act 
    const actual1 = inArray(input1a, input1a); 
    const actual2 = inArray(input2a, input2b); 
    const actual3 = inArray(input3a, input3b); 
    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3); 
  }); 
  test('Should take 2 multiple element arrays and return all the first argument arrays elements which are substrings of elements in second argument.', () => { 
    //arrange 
    const expected1 = ['ar', 'pple']; 
    const expected2 = ['anana', 'rain', 'us']; 
    const expected3 = ['elicopter', 'lane', 'oat', 'range']; 

    const input1a = ['ar', 'pple']; 
    const input1b = ['car', 'apple',]; 

    const input2a = ['anana', 'rain', 'us']; 
    const input2b = ['banana', 'train', 'bus']; 

    const input3a = ['elicopter', 'lane', 'oat', 'range']; 
    const input3b = ['helicopter', 'plane', 'boat', 'orange']; 
    //act 
    const actual1 = inArray(input1a, input1a); 
    const actual2 = inArray(input2a, input2b); 
    const actual3 = inArray(input3a, input3b); 
    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3); 
  }); 
  test('Should not return elements from first argument array which are not substrings of any second argument array element', () => { 
       //arrange 
       const expected1 = ['ar', 'pple',]; 
       const expected2 = ['anana', 'rain', 'us']; 
       const expected3 = ['elicopter', 'lane', 'oat', 'range']; 
   
       const input1a = ['ar', 'pple', 'hat']; 
       const input1b = ['car', 'apple',]; 
   
       const input2a = ['anana', 'pear', 'rain', 'us']; 
       const input2b = ['banana', 'train', 'bus']; 
   
       const input3a = ['strawberry', 'elicopter', 'lane', 'oat', 'range']; 
       const input3b = ['helicopter', 'plane', 'boat', 'orange']; 
       //act 
       const actual1 = inArray(input1a, input1b); 
       const actual2 = inArray(input2a, input2b); 
       const actual3 = inArray(input3a, input3b); 
       //assert 
       expect(actual1).toEqual(expected1); 
       expect(actual2).toEqual(expected2); 
       expect(actual3).toEqual(expected3); 
  });
  test('Should return elements in lexicographical order when they are not ordered so in the input', () => { 
    //arrange 
    const expected1 = ['ar', 'eep', 'pple',]; 
    const expected2 = ['anana', 'rain', 'us']; 
    const expected3 = ['elicopter', 'lane', 'oat', 'range']; 

    const input1a = ['eep', 'ar', 'pple', 'hat']; 
    const input1b = ['car', 'apple', 'jeep']; 

    const input2a = ['rain', 'us', 'anana', 'pear']; 
    const input2b = ['banana', 'train', 'bus']; 

    const input3a = ['oat', 'strawberry', 'elicopter', 'lane', 'range']; 
    const input3b = ['helicopter', 'plane', 'boat', 'orange']; 
    //act 
    const actual1 = inArray(input1a, input1b); 
    const actual2 = inArray(input2a, input2b); 
    const actual3 = inArray(input3a, input3b); 
    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3);
  });
  test('Should not duplicate elements from first argument which are substrings for more than one element in second argument', () => {
    //arrange 
    const expected1 = ['ar', 'eep', 'pple',]; 
    const expected2 = ['anana', 'rain', 'us']; 
    const expected3 = ['elicopter', 'lane', 'oat', 'range']; 

    const input1a = ['eep', 'ar', 'pple', 'hat']; 
    const input1b = ['car', 'apple', 'jeep', 'bar']; 

    const input2a = ['rain', 'us', 'anana', 'pear']; 
    const input2b = ['banana', 'train', 'bus', 'dust']; 

    const input3a = ['oat', 'strawberry', 'elicopter', 'lane', 'range']; 
    const input3b = ['helicopter', 'strange', 'ranger', 'plane', 'boat', 'orange']; 
    //act 
    const actual1 = inArray(input1a, input1b); 
    const actual2 = inArray(input2a, input2b); 
    const actual3 = inArray(input3a, input3b); 
    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3); 
  });
  test('Should return all subset elements from first argument array which match other elements in first argument array', () => { 
    //arrange 
    const expected1 = ['ar', 'ar', 'eep', 'pple',]; 
    const expected2 = ['anana', 'rain', 'rain', 'rain', 'us']; 
    const expected3 = ['elicopter', 'lane', 'lane', 'oat', 'oat', 'range', 'range']; 

    const input1a = ['eep', 'ar', 'pple', 'hat', 'ar']; 
    const input1b = ['car', 'apple', 'jeep', 'bar']; 

    const input2a = ['rain', 'us', 'anana', 'rain', 'pear', 'rain']; 
    const input2b = ['banana', 'train', 'bus', 'dust']; 

    const input3a = ['oat', 'strawberry', 'oat', 'elicopter', 'range', 'lane', 'range', 'lane']; 
    const input3b = ['helicopter', 'strange', 'ranger', 'plane', 'boat', 'orange']; 
    //act 
    const actual1 = inArray(input1a, input1b); 
    const actual2 = inArray(input2a, input2b); 
    const actual3 = inArray(input3a, input3b); 
    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3);
  });
});