using System;


class Program {


    public static double CalculateCircleArea(double radius) {
        double area = Math.PI * radius * radius; 
        return area;
    }
    static void Main(string[] args) {
        Console.WriteLine(CalculateCircleArea(5.0));
        Console.WriteLine(CalculateCircleArea(7.0));
        Console.WriteLine(CalculateCircleArea(20.5));
    }
}