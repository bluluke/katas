public class Maps {
    public static int[] map(int[] arr) {
        int[] doubledArray = new int[arr.length]; 
        
        for (int i = 0; i < arr.length; i++) {
            doubledArray[i] = arr[i] * 2; 
        }
        
        return doubledArray; 
    }
}