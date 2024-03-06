public class MiddleCharacter {

    public static String getMiddleCharacter(String word) {
        int length = word.length();
        if (length % 2 == 0) {
            int mid = length / 2;
            return word.substring(mid - 1, mid + 1);
        } else {
            int mid = length / 2;
            return String.valueOf(word.charAt(mid));
        }
    }
    
    public static void main(String[] args) {
        System.out.println(getMiddleCharacter("word"));
        System.out.println(getMiddleCharacter("java")); 
        System.out.println(getMiddleCharacter("programming"));
    }


}