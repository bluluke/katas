public class SquareChecker {

        public static boolean checkForSquare(int inputNum) {
            if(inputNum < 0) {
                return false;
            }
            return true;
        }
    public static void main(String[] args) {
        System.out.println(checkForSquare(-1));
    }
}