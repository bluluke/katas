import java.util.List;
import java.util.stream.Collectors;


public class FilterList {
    

    public static List<Object> filterList(final List<Object> list) {
        return list.stream()
                .filter(item -> item instanceof Integer)
                .collect(Collectors.toList()); 
    }
    public static void main(String[] args) {
        List<Object> inputList = List.of(1, 2, "a", "b", 0, 15);
        List<Object> filteredList = filterList(inputList);
        System.out.println("Filtered List: " + filteredList);

    }
}
