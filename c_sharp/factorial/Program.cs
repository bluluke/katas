using System;


class Program {

    public static int Factorial(int num) {
        if(num == 0) {
            return 1;
        } else {
            return num * Factorial( num - 1);
        }
    }
    static void Main(string[] args) {
        Console.WriteLine(Factorial(0));
        Console.WriteLine(Factorial(1));
        Console.WriteLine(Factorial(2));
        Console.WriteLine(Factorial(3));
        Console.WriteLine(Factorial(4));
        Console.WriteLine(Factorial(5));
    }
}