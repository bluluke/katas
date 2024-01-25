const { longest } =  require('../longest');

describe('longest', () => {
    test('Should return empty string from input of 2 empty strings', () => {
        //arrange
        const expected = '';

        const inputA = '';
        const inputB = '';

        //act
        const actual = longest(inputA, inputB);

        //assert
        expect(actual).toBe(expected);
    });
    test('Should return single character string from input of 1 emty string and 1 single character string', () => {
          //arrange
          const expected1 = 'a';
          const expected2 = 'b';
          const expected3 = 'c';

          const input1A = 'a';
          const input1B = '';
          const input2A = 'b';
          const input2B = '';
          const input3A = 'c';
          const input3B = '';
  
          //act
          const actual1 = longest(input1A, input1B);
          const actual2 = longest(input2A, input2B);
          const actual3 = longest(input3A, input3B);
  
          //assert
          expect(actual1).toBe(expected1);
          expect(actual2).toBe(expected2);
          expect(actual3).toBe(expected3);
    });
    test('Should return 2 character string equal to concatenation of 2 input single character strings', () => {
         //arrange
         const expected1 = 'ab';
         const expected2 = 'cd';
         const expected3 = 'ef';

         const input1A = 'a';
         const input1B = 'b';
         const input2A = 'c';
         const input2B = 'd';
         const input3A = 'e';
         const input3B = 'f';
 
         //act
         const actual1 = longest(input1A, input1B);
         const actual2 = longest(input2A, input2B);
         const actual3 = longest(input3A, input3B);
 
         //assert
         expect(actual1).toBe(expected1);
         expect(actual2).toBe(expected2);
         expect(actual3).toBe(expected3);
    });
    test('Should return multiple character string equal to concatenation of 2 multiple character input strings', () => {
        //arrange
        const expected1 = 'abcdef';
        const expected2 = 'ghijklmno';
        const expected3 = 'pqrstuvwxy';

        const input1A = 'abc';
        const input1B = 'def';
        const input2A = 'ghij';
        const input2B = 'klmno';
        const input3A = 'pqrs';
        const input3B = 'tuvwxy';

        //act
        const actual1 = longest(input1A, input1B);
        const actual2 = longest(input2A, input2B);
        const actual3 = longest(input3A, input3B);

        //assert
        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
        expect(actual3).toBe(expected3);
    });
    test('Should return all unique characters from both input string in alphabetical order', () => {
          //arrange
          const expected1 = 'abcdef';
          const expected2 = 'ghijklmno';
          const expected3 = 'pqrstuvwxy';
  
          const input1A = 'bef';
          const input1B = 'adc';
          const input2A = 'klmno';
          const input2B = 'ghij';
          const input3A = 'sqvpxy';
          const input3B = 'wurt';
  
          //act
          const actual1 = longest(input1A, input1B);
          const actual2 = longest(input2A, input2B);
          const actual3 = longest(input3A, input3B);
  
          //assert
          expect(actual1).toBe(expected1);
          expect(actual2).toBe(expected2);
          expect(actual3).toBe(expected3);
    }); 
    test('Should return string containing only one instance of each letter present in both input strings', () => {
        //arrange
        const expected1 = 'abcdef';
        const expected2 = 'ghijklmno';
        const expected3 = 'pqrstuvwxy';

        const input1A = 'bbbef';
        const input1B = 'cccadddc';
        const input2A = 'kllllmnon';
        const input2B = 'gihjjij';
        const input3A = 'sqvvvpxyx';
        const input3B = 'wrurwt';

        //act
        const actual1 = longest(input1A, input1B);
        const actual2 = longest(input2A, input2B);
        const actual3 = longest(input3A, input3B);

        //assert
        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
        expect(actual3).toBe(expected3);
  }); 
  test('Should return all characters in lowercase from input strings which include uppercase letters', () => {
        //arrange
        const expected1 = 'abcdef';
        const expected2 = 'ghijklmno';
        const expected3 = 'pqrstuvwxy';

        const input1A = 'BbbEf';
        const input1B = 'cCcAdddc';
        const input2A = 'KllllMnon';
        const input2B = 'GihJjij';
        const input3A = 'SqvVvpxyx';
        const input3B = 'WrUrwt';

        //act
        const actual1 = longest(input1A, input1B);
        const actual2 = longest(input2A, input2B);
        const actual3 = longest(input3A, input3B);

        //assert
        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
        expect(actual3).toBe(expected3);
  });
    test('Should only return lowercase letters from input strings including non letter characters', () => {
        //arrange
        const expected1 = 'abcdef';
        const expected2 = 'ghijklmno';
        const expected3 = 'pqrstuvwxy';

        const input1A = 'Bb//bEf';
        const input1B = 'cCc-Ad++dd<c';
        const input2A = 'Kll//ll^^Mn.on';
        const input2B = '^*Gih$$Jj"ij';
        const input3A = '>SqvV(vpxyx';
        const input3B = 'WrUr:wt;';

        //act
        const actual1 = longest(input1A, input1B);
        const actual2 = longest(input2A, input2B);
        const actual3 = longest(input3A, input3B);

        //assert
        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
        expect(actual3).toBe(expected3);
    });

})