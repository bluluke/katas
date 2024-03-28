using System;


class Program {


public static double SecondsToHours(int seconds)
    {
        double hours = seconds / 3600.0; 
        return hours;
    }
    static void Main(string[] args) {
        Console.WriteLine(SecondsToHours(7200));
        Console.WriteLine(SecondsToHours(7500));
        Console.WriteLine(SecondsToHours(10800));
        Console.WriteLine(SecondsToHours(10850));
    }
}