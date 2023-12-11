public class FakeBinary {
    public static String fakeBin(String numberString) {
        StringBuilder result = new StringBuilder();

        for (char digit : numberString.toCharArray()) {
            if (digit < '5') {
                result.append('0');
            } else {
                result.append('1');
            }
        }

        return result.toString();
    }

    public static void main(String[] args) {
        String input = "354923499"; 
        String output = fakeBin(input);
        System.out.println(output);
    }
}
