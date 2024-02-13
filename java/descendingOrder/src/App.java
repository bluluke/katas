import java.util.Arrays;

public class App {
    public static int descendingOrder(final int num) {
      String numString = Integer.toString(num);
      char[] charArray = numString.toCharArray();
      Arrays.sort(charArray);

      StringBuilder resultBuilder = new StringBuilder(new String(charArray));
      String resultString = resultBuilder.reverse().toString();

      return Integer.parseInt(resultString);
    }

    public static void main(String[] args)  {
        System.out.println(descendingOrder(42145)); 
        System.out.println(descendingOrder(145263)); 
        System.out.println(descendingOrder(123456789));
    }
  }