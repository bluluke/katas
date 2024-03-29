using System;
using System.Globalization; 
class Program {


    public static string CapitaliseFirstLetterEachWord(string inputString) {
        TextInfo textInfo = new CultureInfo("en-US", false).TextInfo;

        string[] words = inputString.Split(' '); 

        for(int i = 0; i < words.Length; i++) {
             if (!string.IsNullOrEmpty(words[i]))
            {
                char firstChar = words[i][0];
                if (char.IsLetter(firstChar))
                {
                    words[i] = textInfo.ToTitleCase(words[i]);
                }
            }

        }

        string result = string.Join(" ", words);

        return result; 
    }

    static void Main(string[] args) {
        Console.WriteLine(CapitaliseFirstLetterEachWord("eggs and spinach."));
        Console.WriteLine(CapitaliseFirstLetterEachWord(" kings s and q queens"));
        Console.WriteLine(CapitaliseFirstLetterEachWord("1234f abc567"));
    }
}