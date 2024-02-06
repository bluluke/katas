public class XO {
    public static boolean getXO (String str) {
    
        String[] arrayOfXOs = str.split("");
        int xCount = 0;
        int yCount = 0; 

        for(String s: arrayOfXOs) {
            if(s.equals("x")) {
                xCount++;
            } else if(s.equals("o")) {
                yCount++;
            } 
        }
       return true;
        
      }
      public static void main(String[] args) {
        getXO("xoxooxx");
      }
}
