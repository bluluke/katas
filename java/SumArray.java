public class SumArray {

    public static double sum(double[] numbers) {
        if (numbers == null || numbers.length == 0) {
            return 0.0;
        }

        double sum = 0.0;
        for (double num : numbers) {
            sum += num;
        }
        return sum;
    }

    public static void main(String[] args) {
        double[] arr = {1.5, 2.7, -3.2, 4.0};
        double result = sum(arr);
        System.out.println("Sum: " + result);
    }
}
