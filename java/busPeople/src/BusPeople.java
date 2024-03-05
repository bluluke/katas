import java.util.ArrayList;
import java.util.List;


public class BusPeople {


    public static int countPassengers(ArrayList<int[]> stops) {
        int totalPassengers = 0;

        for(int[] stop : stops) {
            totalPassengers += stop[0];
            totalPassengers -= stop[1]; 
        }
        return totalPassengers; 
    }
    public static void main(String[] args) {

        ArrayList<int[]> stops = new ArrayList<>();
        stops.add(new int[]{10,0});
        stops.add(new int[]{3,5});
        stops.add(new int[]{15,8});

        int totalPassengers = countPassengers(stops);
        System.out.println("Total number of people on the bus: " + totalPassengers); 
    }
}