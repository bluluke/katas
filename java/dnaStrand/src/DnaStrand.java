public class DnaStrand {


    public static String findComplementaryStrand(String dnaStrand) {
        StringBuilder complementaryStrand = new StringBuilder();
        for(char nucleotide : dnaStrand.toCharArray()) {
            switch (nucleotide) {
                case 'A':
                    complementaryStrand.append('T');
                    break;
                case 'T':
                    complementaryStrand.append('A');
                    break;
                case 'C':
                    complementaryStrand.append('G');
                    break;
                case 'G':
                    complementaryStrand.append('C');
                    break;
                default:

                break;
            }
        }
        return complementaryStrand.toString();

    }
    public static void main(String[] args) {
        String dnaStrand1 = "ATTGC";
        String dnaStrand2 = "GTAT";

        System.out.println(findComplementaryStrand(dnaStrand1)); 
        System.out.println(findComplementaryStrand(dnaStrand2));
    }
}
