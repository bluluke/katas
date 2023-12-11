public class EnoughFuel {
    public static boolean zeroFuel(double distanceToPump, double mpg, double fuelLeft) {
        return fuelLeft * mpg >= distanceToPump;
    }

    public static void main(String[] args) {

        double distance = 50; 
        double carMPG = 25; 
        double fuelLeft = 2; 
        boolean canReachPump = zeroFuel(distance, carMPG, fuelLeft);
        System.out.println("Is it possible to reach the pump? " + canReachPump);
    }
}