package JavaLab2;

import java.util.Scanner;

public class Exercise1 {
    public static void main(String[] args) {
        System.out.println("############################");
        System.out.println("Welcome to the Useless Program");
        System.out.println("############################\n");

        System.out.println("Enter the Starting Value");
        Scanner scanner = new Scanner(System.in);
        int start_n = Integer.parseInt(scanner.nextLine());

        System.out.println("Enter the End Value");
        int end_n = Integer.parseInt(scanner.nextLine());

        while (start_n <= end_n) {
            System.out.println(start_n);
            start_n++;
        }
    }
}
