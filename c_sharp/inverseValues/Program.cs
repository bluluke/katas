using System;
using System.Linq;

class Program {
    public static List<int> ArraysInversion(int[] numArray) {
        List<int> inverseArray = new List<int>(); 
        foreach(int num in numArray) {
            inverseArray.Add(-num);
        }
return inverseArray;
}

    static void Main(string[] args) {
        int[] arrayOfInts = new int[] {1, 4, 6, -5, -9, 0};
        List<int> result = ArraysInversion(arrayOfInts);
        foreach(int num in result) {
            Console.WriteLine(num);
        }
    }

}