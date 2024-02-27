public class SquareDigit {

    public int squareDigits(int n) {
        int result = 0;

        int position = 1;

        while(n > 0) {
            int digit = n % 10;

            int square = digit * digit;

            result = square * position + result; 

            position *= 100;

            n /= 10;
        }
        return result; 
    }
  
    public static void main(String[] args) {

        SquareDigit squareDigit = new SquareDigit();

        System.out.println(squareDigit.squareDigits(9119)); 
        System.out.println(squareDigit.squareDigits(765));  
    } 
  }