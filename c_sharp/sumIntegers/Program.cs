using System;


class Program {

    public static int SumIntegers(int num) {
        if(num < 1) {
            return 0; 
        }
        if(num == 1) {
            return 1;
        } 
        return num + SumIntegers(num - 1); 
    }
    static void Main(string[] args) {
        Console.WriteLine(SumIntegers(5)); 
        Console.WriteLine(SumIntegers(6)); 
        Console.WriteLine(SumIntegers(7)); 
        Console.WriteLine(SumIntegers(-1)); 
    }
}