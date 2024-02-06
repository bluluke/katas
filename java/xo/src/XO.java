public class XO {
    public static boolean getXO (String str) {
    
        String[] arrayOfXOs = str.split(",");

        for(String s: arrayOfXOs) {
            System.out.println(s);
        }
       return true;
        
      }
      public static void main(String[] args) {
        getXO("xoxooxx");
      }
}
