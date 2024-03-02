

public class RemoveLowest {
 
    public static int[] removesLowest(int[] numbers) {
        if(numbers == null || numbers.length == 0) {
            return null;
        }


        int minIndex = 0;
        for(int i = 1; i < numbers.length; i++) {
            if(numbers[i] < numbers[minIndex]) {
                minIndex = i; 
            }
        }

        int[] result = new int[numbers.length - 1];

        for(int i = 0, j = 0; i < numbers.length; i++) {
            if(i != minIndex) {
                result[j++] = numbers[i];
            }
        }

        return result;
    }

    public static void main(String[] args) {

        int[] emptyIntArray = new int[0];
        System.out.println(removesLowest(emptyIntArray));

        int[] intArray = new int[] {9, 2, 5, 87, 1};
        int[] result2 = removesLowest(intArray);
        for (int num : result2) {
            System.out.print(num + " ");
        }

    }
}