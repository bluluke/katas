public class XO {
    public static boolean getXO (String str) {
    
        char[] arrayOfXOs = str.toCharArray();
        int xCount = 0;
        int oCount = 0; 

        for(char c: arrayOfXOs) {
            if(c == 'x') {
                xCount++;
            } else if(c == 'o') {
                oCount++;
            } 
        }
       return xCount == oCount;
        
      }
      public static void main(String[] args) {
        System.out.println(getXO("xoxooxx"));
        System.out.println(getXO("xoxoox"));
      }
}
