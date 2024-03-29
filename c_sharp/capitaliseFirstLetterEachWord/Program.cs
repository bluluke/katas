using System;
using System.Globalization; 
class Program {


    public static string CapitaliseFirstLetterEachWord(string inputString) {
        TextInfo textInfo = new CultureInfo("en-US", false).TextInfo;

        string[] words = inputString.Split(' '); 

        for(int i = 0; i < words.Length; i++) {
            words[i] = textInfo.ToTitleCase(words[i]);
        }

        string result = string.Join(" ", words);

        return result; 
    }

    static void Main(string[] args) {
        Console.WriteLine(CapitaliseFirstLetterEachWord("eggs and spinach."));
    }
}