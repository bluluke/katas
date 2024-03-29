public class OddOrEven {
    
public static String oddOrEven (int[] array) {
    int sum = 0;
    for(int num : array) {
        sum += num;
    }
    return (sum % 2 == 0) ? "even" : "odd"; 
}

    public static void main(String[] args) {
        System.out.println(oddOrEven(new int[]{0}));
        System.out.println(oddOrEven(new int[]{0, 1, 4}));
        System.out.println(oddOrEven(new int[]{0, -1, -5}));
        System.out.println(oddOrEven(new int[]{0, 9, 8, -1}));
    }
}
