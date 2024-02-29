public class SentenceSmash {

public static String smashWords(String... words) {
    if(words.length == 0) 
        return "";

        StringBuilder sentence = new StringBuilder(words[0]); 

        for(int i = 1; i < words.length; i++) {
            sentence.append(" ").append(words[i]);
        }


        return sentence.toString();
}
    public static void main(String[] args) {
        String[] input = new String[] {}; 
        System.out.println(smashWords("abc"));
        System.out.println(smashWords());
        System.out.println(smashWords(input));
        System.out.println(smashWords("abc", "def"));
        System.out.println(smashWords("ab", "cdef", "ghi", "jklmn"));
    }
}