using System;


class Program {

    public static int CountArrays(object[] array) {
        int count = 0; 
        foreach (var item in array) {
            if(item is object[]) {
                count++;
                count += CountArrays((object[])item);
            }
        }
        return count; 
    }
    static void Main(string[] args) {

        object[] nestedArray = new object[]
        {
            1,
            new object[] {2, 3},
            new object[] { 4, new object[] { 5, 6, new object[] {7, 8 }}}
        };
        int arrayCount = CountArrays(nestedArray);

        object[] anotherNestedArray = new object[]
{
    "A",
    new object[] { "B", "C" },
    new object[] { "D", new object[] { "E", "F", new object[] {"G", "H", new object[] { "I", "J" } } } },
    new object[] { "K", "L", new object[] { "M", "N", new object[] {"O", "P" } } }
};
int anotherArrayCount = CountArrays(anotherNestedArray);
        Console.WriteLine(arrayCount);
        Console.WriteLine(anotherArrayCount);

    }
}