using System;
using System.Linq;


public static class Program {

    public static List<int> CountByX(int x, int n) {

        List<int> listOfMultiples = new List<int>();
        int currentMultiple = 0;
        for(int i = 0; i < x; i++) {
            currentMultiple += n;
            listOfMultiples.Add(currentMultiple);
        }
        return listOfMultiples;
    }
    static void Main(string[] args) {
        List<int> result1 = CountByX(4, 10);
        List<int> result2 = CountByX(11, 6);
        List<int> result3 = CountByX(8, 3);
        foreach(int num in result1) {
            Console.WriteLine(num);
        }
        foreach(int num in result2) {
            Console.WriteLine(num);
        }
        foreach(int num in result3) {
            Console.WriteLine(num);
        }
    }
}