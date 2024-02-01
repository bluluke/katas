package twoToOne.src;

import java.util.stream.Collectors;

public class TwoToOne {

    public String twoToOne(String a, String b) {

        String combined = a + b;

        String result = combined.chars()
            .mapToObj(c -> String.valueOf((char) c))
            .collect(Collectors.joining());
        return result;
    }

    public static void main(String[] args) {

        TwoToOne twoToOne = new TwoToOne(); 

        String s1 = "xyaabbbccccdefww";
        String s2 = "xxxxyyyyabklmopq";
        String result = twoToOne.twoToOne(s1, s2);

        System.out.println("Combined and sorted result: " + result);
    }
}
