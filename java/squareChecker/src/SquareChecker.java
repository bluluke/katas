public class SquareChecker {

        public static boolean checkForSquare(int inputNum) {
            if(inputNum < 0) {
                return false;
            }

            int sqrt = (int) Math.sqrt(inputNum); 


            return sqrt * sqrt == inputNum;
        }
    public static void main(String[] args) {
        System.out.println(checkForSquare(-1));
        System.out.println(checkForSquare(0)); 
        System.out.println(checkForSquare(3));  
        System.out.println(checkForSquare(4));  
        System.out.println(checkForSquare(25)); 
        System.out.println(checkForSquare(26)); 
    }
}