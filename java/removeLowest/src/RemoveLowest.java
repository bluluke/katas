

public class RemoveLowest {
 
    public static int[] removesLowest(int[] numbers) {
        if(numbers == null || numbers.length == 0) {
            return null;
        }
        int[] returnArray = new int[] {1, 2, 3};
        return returnArray;
    }

    public static void main(String[] args) {

        int[] intArray = new int[0];
        System.out.println(removesLowest(intArray));
    }
}