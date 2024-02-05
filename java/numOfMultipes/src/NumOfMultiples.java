import java.util.ArrayList;
import java.util.List;

public class NumOfMultiples {

    public static List<Integer> createArrayOfMultiples(int commonFactor, int numMultiples) {
        List<Integer> listOfMultiples = new ArrayList<>();
        for(int i = 1; i <= numMultiples; i++) {
            listOfMultiples.add(commonFactor * i);
        }
        return listOfMultiples;
    }
    public static void main(String[] args) {
        System.out.println(createArrayOfMultiples(5, 2));
        System.out.println(createArrayOfMultiples(4, 10));
        System.out.println(createArrayOfMultiples(3, 9));

    }
}
