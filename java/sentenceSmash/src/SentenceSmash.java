public class SentenceSmash {

public static String smashWords(String... words) {
    if(words.length == 0) 
        return "";
        return "Hello smashWords!";
}
    public static void main(String[] args) {
        String[] input = new String[] {}; 
        System.out.println(smashWords("abc"));
        System.out.println(smashWords());
        System.out.println(smashWords(input));
    }
}