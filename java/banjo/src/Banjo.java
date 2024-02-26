public class Banjo {

    public static String areYouPlayingBanjo(String name) {
        if (name.toLowerCase().startsWith("r")) {
            return name + " plays banjo";
        } else {
            return name + " does not play banjo";
        }
    }
    public static void main(String[] args) {
        System.out.println("Hello, let's check if you're playing banjo:");

        Banjo aBanjo = new Banjo();
        String result = aBanjo.areYouPlayingBanjo("Jack");
        System.out.println(result);

    }
    
}
