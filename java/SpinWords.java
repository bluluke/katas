public class SpinWords {

    public String spinWords(String sentence) {
        StringBuilder result = new StringBuilder();

        String[] words = sentence.split(" ");

        for (String word : words) {
            if (word.length() >= 5) {
                result.append(reverseWord(word)).append(" ");
            } else {
                result.append(word).append(" ");
            }
        }

        return result.toString().trim();
    }

    private String reverseWord(String word) {
        return new StringBuilder(word).reverse().toString();
    }

    public static void main(String[] args) {
        SpinWords spinWords = new SpinWords();

        System.out.println(spinWords.spinWords("Hey fellow warriors")); 

    }
}
