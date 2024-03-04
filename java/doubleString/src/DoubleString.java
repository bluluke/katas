public class DoubleString {


    public static String doublesString(String str) {
       StringBuilder result = new StringBuilder();
       for(int i = 0; i < str.length(); i++) {
        char c = str.charAt(i);
        result.append(c).append(c);
       }
        return result.toString(); 
    }
    public static void main(String[] args) {
        String str1 = "abcde";
        System.out.println(doublesString(str1));
        String str2 = "I love carrots!";
        System.out.println(doublesString(str2));
        String str3 = "1235678 67";
        System.out.println(doublesString(str3));
    }

}