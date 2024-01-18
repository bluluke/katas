const {isPangram, makeUppercase }= require("../isPangram");

describe('isPangram', () => {
    test('Should return false from input of empty string', () => {
        //arrange
        const expected = false;
        const input = '';
        //act
        const actual = isPangram(input);
        //assert
        expect(actual).toBe(expected);
    });
    test('Should return true from an input of the alphabet', () => {
        //arrange
        const expected = true;
        const input1 = 'abcdefghijklmnopqrstuvwxyz';
        const input2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        //act
        const actual1 = isPangram(input1)
        const actual2 = isPangram(input2)
        //assert
        expect(actual1).toBe(expected)
        expect(actual2).toBe(expected)
    })
    test('Should return true from an input that has non letter characters', () => {
          //arrange
          const expected = true;
          const input1 = 'abc&$%$&&defgh&%$&$%&ijklmnopqrstuvwxyz';
          const input2 = 'ABCDE*()*&@£FGHIJKLMNOPQR&%$&$&%STU&%$&%$VWXYZ';
          //act
          const actual1 = isPangram(input1)
          const actual2 = isPangram(input2)
          //assert
          expect(actual1).toBe(expected)
          expect(actual2).toBe(expected)
    })
    test('Should return true from an input of a complete pangram including extra instances of some letters', () => {
        //arrange
        const expected = true;
        const input1 = 'abacfffdehfghgkmhiuujvvkrlfmrngoHHpDFWWqrstRGEXCVDuvwxyz';
        const input2 = 'ABCDAAGGKKRRRLLTaajddjeoeoggnbjtpppPPrKKFEFGHIJKLMNOPQRSTUVWXYZ';
        //act
        const actual1 = isPangram(input1)
        const actual2 = isPangram(input2)
        //assert
        expect(actual1).toBe(expected)
        expect(actual2).toBe(expected)
    })
    test('Should return true from an input of complete pangram including whitespaces ', () => {
        //arrange
        const expected = true;
        const input1 = 'ab  cdefghi  jklmnop  qrstuv  wxy z';
        const input2 = 'ABCDEF  GHIJ   KLMN   OPQR  STU  VWX  YZ';
        //act
        const actual1 = isPangram(input1)
        const actual2 = isPangram(input2)
        //assert
        expect(actual1).toBe(expected)
        expect(actual2).toBe(expected)
    })
    test('Should return false from input of non pangram', () => {
        //arrange
        const expected = false;
        const input1 = 'askjhbf784bfkhf KGKG'; 
        const input2 = '94858 GKGK eocjn rjvbn';
        const input3 = 'fkaieuyrFKKGJG tiiFKFKF86994847';
        
        //act
        const actual1 = isPangram(input1);
        const actual2 = isPangram(input2);
        const actual3 = isPangram(input3);
        //assert
        expect(actual1).toBe(false);
        expect(actual2).toBe(false);
        expect(actual3).toBe(false);
    })
})

describe('makeUppercase', () => {
    test('Should return string input with all lowercase characters converted to uppercase', () => {
        //arrange 
        const expected1 = 'ABCDE123FG';
        const expected2 = 'CAKECAKE999CAKE';
        const expected3 = 'CATS!@£$%^?DOGS';

        const input1 = 'abcDE123fg';
        const input2 = 'CAKEcake999caKE';
        const input3 = 'caTs!@£$%^?Dogs';
        //arrange
        const actual1 = makeUppercase(input1);
        const actual2 = makeUppercase(input2);
        const actual3 = makeUppercase(input3);
        //act        
        expect(actual1).toBe(expected1)
        expect(actual2).toBe(expected2)
        expect(actual3).toBe(expected3)
    })
})



