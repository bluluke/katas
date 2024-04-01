using System;

class Program {

    public static string ReverseString(string inputString) {
        char[] charArray = inputString.ToCharArray();
        Array.Reverse(charArray); 
        string reversedString = new string(charArray);
        return reversedString;
    }
    static void Main(string[] args) {
        Console.WriteLine(ReverseString("eggs"));
        Console.WriteLine(ReverseString("cheese and onion"));
        Console.WriteLine(ReverseString("1 2 3 4 5 6 7 8 9 10"));
    }
}
