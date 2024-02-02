package triangleTester.src;



public class TriangleTester {

    public static boolean isTriangle(int a, int b, int c){
        int[] sideLengths = {a, b, c};

        for(int i = 0; i < sideLengths.length; i++) {
            int sum = 0;
            for(int j = 0; j < sideLengths.length; j++) {
                if(i != j) {
                    sum += sideLengths[j]; 
                }
            }
            if(sum <= sideLengths[i]) {
                return false; 
            }
        }
    
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isTriangle(2, 3, 4));
        System.out.println(isTriangle(20, 3, 4));
    }
}
