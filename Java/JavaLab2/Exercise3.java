package JavaLab2;

import java.util.Scanner;

public class Exercise3 {
    public static void main(String[] args) {
        System.out.println("############################");
        System.out.println("Welcome to the Word Spelling");
        System.out.println("############################\n");

        System.out.println("Enter a word");
        Scanner scanner = new Scanner(System.in);
        String word = scanner.nextLine();

        for (int i = 0; i < word.length(); i++) {
            System.out.println(word.charAt(i));
        }
    }
}
