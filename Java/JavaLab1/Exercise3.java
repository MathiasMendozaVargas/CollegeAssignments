package JavaLab1;

import java.util.Scanner;

public class Exercise3 {
    public static void main(String[] args) {
        System.out.println("#########################################");
        System.out.println("Welcome to your Multiplication Table!");
        System.out.println("#########################################\n");

        System.out.println("Enter a Number");
        try (Scanner scanner = new Scanner(System.in)) {
            int number = Integer.parseInt(scanner.nextLine());

            multiplyTable(number);
        } catch (NumberFormatException e) {
            // TODO Auto-generated catch block
            System.out.println("Ups, wrong format!");
        }
    }

    static void multiplyTable(int n) {
        System.out.println("\nMultiplication Table of %s".formatted(n));
        for (int i = 1; i < 10; i++) {
            System.out.println("%s x %s: %s".formatted(n, i, n * i));
        }
    }
}
