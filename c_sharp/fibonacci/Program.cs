using System;


class Program {

    public static int Fibonacci(int num) {
        if(num == 0) {
            return 0;
        } else if (num == 1) {
            return 1;
        }
        else {
            return Fibonacci(num - 1) + Fibonacci(num - 2);
        }
    }
    static void Main(string[] args) {
        Console.WriteLine(Fibonacci(0));
        Console.WriteLine(Fibonacci(1));
        Console.WriteLine(Fibonacci(2));
        Console.WriteLine(Fibonacci(3));
        Console.WriteLine(Fibonacci(4));
        Console.WriteLine(Fibonacci(5));
        Console.WriteLine(Fibonacci(6));
        Console.WriteLine(Fibonacci(7));
    }
}