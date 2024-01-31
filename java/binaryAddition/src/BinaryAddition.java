package binaryAddition.src;

public class BinaryAddition {
    public static String convertAdditionToBinary(int a, int b) {
        int sum = a + b;
        String binaryConversion = Integer.toBinaryString(sum);
        return binaryConversion;
    }

    public static void main(String[] args) {
        System.out.println(convertAdditionToBinary(5, 7));

    }


}
