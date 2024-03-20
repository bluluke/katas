using System;


class Program {
    public static int ReturnNegative(int num) {
    if(num <= 0) {
        return num;
    } else {
        return -num;
    }
}
    static void Main(String[] args) {
        Console.WriteLine(ReturnNegative(5));
        Console.WriteLine(ReturnNegative(-19));
        Console.WriteLine(ReturnNegative(0));
         
    }
}