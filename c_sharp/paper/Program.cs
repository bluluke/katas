using System; 

class Program
{
    public static int Paper(int people, int piecesPerPerson) {
        return people * piecesPerPerson;
    }
    static void Main(String[] args)
    {
        Console.WriteLine(Paper(1, 3)); 
        Console.WriteLine(Paper(10, 9));
        Console.WriteLine(Paper(44, 18));
        Console.WriteLine(Paper(200, 6));
    }
}
