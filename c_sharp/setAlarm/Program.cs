using System;



class Program 
{
    public static bool SetAlarm(bool employed, bool onVacation) {
    if(!employed) {
        return false;
    } else {
        if(onVacation) {
            return false;
        } else {
            return true;
        }
    }
}
    static void Main(string[] args)
    {
        Console.WriteLine(SetAlarm(true, true));
        Console.WriteLine(SetAlarm(false, true));
        Console.WriteLine(SetAlarm(false, false));
        Console.WriteLine(SetAlarm(true, false));
    }
}
