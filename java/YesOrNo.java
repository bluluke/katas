public class YesOrNo {

public static String boolToWord(boolean b) {
    if(b) {
        return "Yes";
    } else {
        return "No";
    }
}
    public static void main(String[] args) {
        System.out.println(boolToWord(true));
        System.out.println(boolToWord(false));
    }
}